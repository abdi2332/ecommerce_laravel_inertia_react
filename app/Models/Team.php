<?php

// app/Models/Team.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function invitations()
    {
        return $this->hasMany(Invitation::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }
}


