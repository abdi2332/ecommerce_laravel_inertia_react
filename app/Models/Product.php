<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Cart;
class Product extends Model
{
    use HasFactory;

    protected $fillable=[
        'name','price','description','image_url',
    ];

    public function carts()
    {
        return $this->hasMany(Cart::class);
    }
}
