<?php

namespace App\Http\Controllers;
use App\Models\Product;
use App\Models\Cart;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function dashboard()
    {
        $products = Product::all();
        return Inertia::render('Dashboard', [
            'products' => $products,
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
        $cartItems = Cart::where('user_id', $request->user()->id)
            ->with('product')
            ->get();

        return Inertia::render('Cart', [
            'cartItems' => $cartItems,
        ]);
    }
}
