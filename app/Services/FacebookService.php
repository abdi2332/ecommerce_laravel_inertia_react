<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class FacebookService
{
    protected $accessToken;
    protected $pageId;

    public function __construct()
    {
        $this->accessToken = env('FACEBOOK_ACCESS_TOKEN');
        $this->pageId = env('FACEBOOK_PAGE_ID');
    }

    public function postToFacebook($message, $imagePath = null)
    {
        $endpoint = "https://graph.facebook.com/{$this->pageId}/feed";
        $payload = [
            'message' => $message,
            'access_token' => $this->accessToken,
        ];

        // Attach image if provided
        if ($imagePath) {
            $response = Http::attach(
                'source', file_get_contents($imagePath), 'image.jpg'
            )->post("https://graph.facebook.com/{$this->pageId}/photos", [
                'message' => $message,
                'access_token' => $this->accessToken,
            ]);
        } else {
            $response = Http::post($endpoint, $payload);
        }

        $responseData = $response->json();

        if (isset($responseData['error'])) {
            return ['error' => 'Error posting to Facebook: ' . $responseData['error']['message']];
        }

        return ['success' => 'Post published with ID: ' . $responseData['id']];
    }

    public function postViewAsImageToFacebook($viewName, $data = [], $message = '')
    {
        $imagePath = storage_path('app/public/temp_images/facebook-post.png');

        // Capture the view as an image
        \Spatie\Browsershot\Browsershot::html(view($viewName, $data)->render())
            ->setScreenshotType('png')
            ->save($imagePath);

        // Post the image to Facebook
        return $this->postToFacebook($message, $imagePath);
    }

    // New Method to get Facebook Page posts
    public function getPagePosts($limit = 5)
    {
        // Include the 'message' and 'attachments' fields in the query
        $endpoint = "https://graph.facebook.com/{$this->pageId}/posts";
        $response = Http::get($endpoint, [
            'access_token' => $this->accessToken,
            'fields' => 'message,attachments{media},created_time', // Request the 'message' and 'attachments' (with 'media' field for images)
        ]);
    
        $responseData = $response->json();
 
        if (isset($responseData['error'])) {
            return ['error' => 'Error fetching posts: ' . $responseData['error']['message']];
        }
    
        // Process each post to get the image URL
        $posts = array_slice($responseData['data'] ?? [], 0, $limit); // Return only the most recent posts
    
        foreach ($posts as &$post) {
            // Check if there are attachments (like images) and set the image URL
            if (isset($post['attachments']['data'][0]['media']['image']['src'])) {
                $post['image_url'] = $post['attachments']['data'][0]['media']['image']['src'];
            } else {
                $post['image_url'] = null; // No image available for this post
            }
        }
    
        return $posts;
    }
    

}
