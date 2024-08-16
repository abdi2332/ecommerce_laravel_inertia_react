<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Delinfo extends Model
{
    use HasFactory;
   protected $table='delinfo';
   
    protected $fillable=['name','email','user_id'];
}
