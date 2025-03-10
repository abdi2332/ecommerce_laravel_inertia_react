<?php

use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\FacebookController;
use App\Http\Controllers\InvitationController;
use App\Http\Controllers\UserInviterController;
use Illuminate\Support\Facades\Broadcast;

// Welcome route
Route::get('/', function () {
    $products=Product::all();
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'products'=>$products,
    ]);
})->name('home');

Route::get('/email/verify', function () {
    return Inertia::render('Auth/VerifyEmail');
})->middleware('auth')->name('verification.notice');

// User dashboard route with user middleware
Route::middleware(['auth', 'verified','user'])->group(function () {
    Route::get('/dashboard', [UserController::class, 'dashboard'])->name('dashboard');
    Route::post('/cart/add', [UserController::class, 'addToCart'])->name('cart.add');
    Route::get('/cart', [UserController::class, 'viewCart'])->name('cart.view');
    Route::get('/invite',[UserInviterController::class, 'index'])->name('invite');
});


// Authenticated routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Admin dashboard route with admin middleware
Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin/dashboard', [HomeController::class, 'index'])->name('admin.dashboard');
    Route::resource('products', ProductController::class);
    Route::get('/invite', [InvitationController::class, 'index'])->name('invite');
    Route::post('/admin/invite', [InvitationController::class, 'invite']);
    Route::get('/Manage', [TeamController::class, 'index'])->name('manage');
    Route::post('/admin/grant-privilege', [TeamController::class, 'grantPrivilege'])->name('team.grant');
    Route::post('/admin/revoke-privilege', [TeamController::class, 'revokePrivilege'])->name('team.revoke');
    Route::post('/admin/add-to-team', [TeamController::class, 'store'])->name('team.add');
    Route::post('/facebook/post', [FacebookController::class, 'postToFacebook']);
    Route::post('/facebook/post-view', [FacebookController::class, 'postViewAsImage']);
    Route::get('/post',[FacebookController::class,'showPosts'])->name('post');
});
Route::get('/invite/{token}', [InvitationController::class, 'accept'])->name('invite.accept');
Route::post('/invite/{token}', [InvitationController::class, 'register']);

Broadcast::routes();

// Include auth routes
require __DIR__.'/auth.php';
