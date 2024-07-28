<?php

// app/Console/Commands/FetchProducts.php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use App\Models\Product;

class FetchProducts extends Command
{
    protected $signature = 'fetch:products';
    protected $description = 'Fetch products from API and store them in the database';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $response = Http::get('https://fakestoreapi.com/products');

        if ($response->ok()) {
            $products = $response->json();

            foreach ($products as $productData) {
                Product::updateOrCreate(
                    ['id' => $productData['id']], // Find by ID or create new
                    [
                        'name' => $productData['title'],
                        'description' => $productData['description'],
                        'price' => $productData['price'],
                        'image_url' => $productData['image'],
                    ]
                );
            }

            $this->info('Products have been fetched and stored successfully.');
        } else {
            $this->error('Failed to fetch data from the API.');
        }
    }
}
