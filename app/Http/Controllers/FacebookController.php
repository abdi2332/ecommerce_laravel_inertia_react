<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\FacebookService;

class FacebookController extends Controller
{
    protected $facebookService;

    public function __construct(FacebookService $facebookService)
    {
        $this->facebookService = $facebookService;
    }

    public function index()
    {
        return Inertia::render('Admin/FacebookPost');
    }

    public function postToFacebook(Request $request)
    {
        $message = $request->input('message');
        $image = $request->file('image');
        $htmlTable = $request->input('htmlTable');

        $formattedMessage = $message . "\n\n" . $htmlTable;

        $imagePath = $image ? $image->store('temp_images', 'public') : null;
        $fullImagePath = $imagePath ? storage_path('app/public/' . $imagePath) : null;

        $result = $this->facebookService->postToFacebook($formattedMessage, $fullImagePath);

        if (isset($result['error'])) {
            return Inertia::render('Admin/FacebookPost', [
                'error' => $result['error']
            ]);
        }

        return Inertia::render('Admin/FacebookPost', [
            'success' => $result['success']
        ]);
    }
    public function postViewAsImage(Request $request)
    {
        $message = $request->input('message');
        $viewName = 'emails.try'; // Replace with your actual view file name
        $data = []; // Data to pass to the view

        $result = $this->facebookService->postViewAsImageToFacebook($viewName, $data, $message);

        if (isset($result['error'])) {
            return Inertia::render('Admin/FacebookPost', [
                'error' => $result['error']
            ]);
        }

        return Inertia::render('Admin/FacebookPost', [
            'success' => $result['success']
        ]);
    }
}
