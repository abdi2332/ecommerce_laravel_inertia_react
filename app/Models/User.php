<?php

// app/Models/User.php
namespace App\Models;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Team;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'usertype',
    ];

    const USER_TYPE_USER = 0;
    const USER_TYPE_ADMIN = 1;
    const USER_TYPE_RESTRICTED_ADMIN = 2;

    public function isAdmin()
    {
        return $this->usertype === self::USER_TYPE_ADMIN;
    }

    public function isRestrictedAdmin()
    {
        return $this->usertype === self::USER_TYPE_RESTRICTED_ADMIN;
    }

    public function isUser()
    {
        return $this->usertype === self::USER_TYPE_USER;
    }
    
    public function team()
    {
        return $this->hasOne(Team::class, 'user_id', 'id');
    }
    
    public function getTeamCartItems()
{
    // Get the current user's ID
    $userId = $this->id;

    // Get all user IDs in the same team as the current user
    $teamUserIds = Team::where('inviter_id', $userId)
        ->orWhere('user_id', $userId)
        ->pluck('user_id')
        ->toArray();

    // Add the inviter's ID to the list
    $teamUserIds[] = $userId;

    // Get the cart items for all users in the team
    return Cart::with('product')
        ->whereIn('user_id', $teamUserIds)
        ->get();
}

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
}

