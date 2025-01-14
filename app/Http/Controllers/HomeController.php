<?php

namespace App\Http\Controllers;
use App\Models\Product;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    
    public function index(): Response
    {
        $userscount=User::all()->count();
        $recentproducts = Product::orderBy('created_at', 'desc')->limit(8)->get();
        $productcount=Product::all()->count();
        $products = Product::with('category')->get();
        return Inertia::render('Admin/Dashboard', [
            'product' => $products,
            'userscount' => $userscount,
            'productcount'=>$productcount,
            'recentproducts'=>$recentproducts,
        ]);
    }
}

