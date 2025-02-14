<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;

class CartController extends Controller
{
    public function addToCart(Request $request){

        $validated = $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|numeric|min:1',
        ]);

        $userId = auth()->id();
        $cart = null;

        if($userId){
            $cart = Cart::create([
                'user_id'=>$userId,
                'product_id'=>$validated['product_id'],
                'quantity'=>$validated['quantity'],
            ]);
        }
        else {
            $cart = session()->get('cart',[]);
            $cart[]= $validated;
            session()->put('cart',$cart);
        }

        broadcast(new CartUpdated($cart));

        return response()->json(['message'=>'Product added to cart!']);
    }
}
