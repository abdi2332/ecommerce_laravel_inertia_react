<?php

use Illuminate\Support\Facades\Http;

if (!function_exists('postToFacebook')) {
    function postToFacebook($message)
    {
        $accessToken = env('FACEBOOK_ACCESS_TOKEN');
        $pageId = env('FACEBOOK_PAGE_ID');

        $response = Http::post("https://graph.facebook.com/{$pageId}/feed", [
            'message' => $message,
            'access_token' => $accessToken,
        ]);

        $responseData = $response->json();

        if (isset($responseData['error'])) {
            return ['error' => 'Error posting to Facebook: ' . $responseData['error']['message']];
        }

        return ['success' => 'Post published with ID: ' . $responseData['id']];
    }
}
