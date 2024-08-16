<?php

// app/Models/Team.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $fillable = ['inviter_id', 'user_id'];

    public function inviter()
    {
        return $this->belongsTo(User::class, 'inviter_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}


