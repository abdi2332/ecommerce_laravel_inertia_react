<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    
    public function index(): Response
    {
        $products = Product::all();
        return Inertia::render('Admin/Dashboard', [
            'products' => $products,
        ]);
    }
}

