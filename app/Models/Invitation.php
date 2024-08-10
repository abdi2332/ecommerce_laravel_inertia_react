<?php


// app/Models/Invitation.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invitation extends Model
{
    use HasFactory;

    protected $fillable = ['email', 'token', 'invited_by', 'expires_at', 'accepted'];
}



