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
}
