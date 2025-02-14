<?php

use App\Http\Controllers\CartController;

Route::get('/cart', [CartController::class, 'getCart']);
Route::post('/cart/add', [CartController::class, 'addToCart']);

