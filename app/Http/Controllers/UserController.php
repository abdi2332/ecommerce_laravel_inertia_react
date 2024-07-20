<?php

namespace App\Http\Controllers;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function dashboard(Request $request)
    {
        // Retrieve all products to display on the dashboard
        $products = Product::all();
        
        // Count the number of items in the cart for the current user
        $cartCount = Cart::where('user_id', $request->user()->id)->count();
        
        // Pass the products and cart count to the Inertia view
        return Inertia::render('Dashboard', [
            'products' => $products,
            'cartCount' => $cartCount,
        ]);
    }
    public function addToCart(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        $cartItem = Cart::where('user_id', $request->user()->id)
            ->where('product_id', $request->product_id)
            ->first();

        if ($cartItem) {
            // Update quantity if item already exists in cart
            $cartItem->quantity += $request->quantity;
            $cartItem->save();
        } else {
            // Create new cart item if not exists
            Cart::create([
                'user_id' => $request->user()->id,
                'product_id' => $request->product_id,
                'quantity' => $request->quantity,
            ]);
        }

        return redirect()->route('dashboard')->with('success', 'Product added to cart!');
    }


    public function viewCart(Request $request)
    {
        // Get the cart items with the related product data
        $cartItems = Cart::with('product')
            ->where('user_id', $request->user()->id)
            ->get();
    
        // Pass the cart items to the Inertia view
        return Inertia::render('Cart', [
            'cartItems' => $cartItems,
        ]);
    }
    

}




