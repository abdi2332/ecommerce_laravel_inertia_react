<?php

namespace App\Http\Controllers;
use App\Models\Cart;
use App\Models\Team;
use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Events\CartUpdated;

class UserController extends Controller
{
    public function dashboard(Request $request)
    {
        // Retrieve all products to display on the dashboard
        $products = Product::all();

        $userId = auth()->id();
        
        // Count the number of items in the cart for the current user
        $cartCount = Cart::where('user_id', $userId)->sum('quantity');
        
        // Pass the products and cart count to the Inertia view
        return Inertia::render('Dashboard', [
            'products' => $products,
            'cartCount' => $cartCount,
        ]);
    }
    public function welcome(){
        $items=Product::all();
    }
    public function addToCart(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        $userId = auth()->id();
        $cart = null;
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

        $cartItemCount = Cart::where('user_id', $userId)->sum('quantity');

        broadcast(new CartUpdated($userId, $cartItemCount))->toOthers();

        return Inertia::render('Cart', [
            'cartItems' => $cartItem,
        ]);

    }


    public function viewCart(Request $request)
    {
        // Get the current user
        $user = $request->user();
    
        // Get the cart items for all users in the same team
        $cartItems = $user->getTeamCartItems();
    
        // Pass the cart items to the Inertia view
        return Inertia::render('Cart', [
            'cartItems' => $cartItems,
        ]);
    }
      

}




