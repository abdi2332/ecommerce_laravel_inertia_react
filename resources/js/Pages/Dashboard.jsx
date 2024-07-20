import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export default function Dashboard({ auth, products, cartCount }) {
    const [isAdding, setIsAdding] = useState(false);
    const [error, setError] = useState(null);
    const [cartItemsCount, setCartItemsCount] = useState(cartCount);

    const addToCart = async (productId) => {
        setIsAdding(true);
        setError(null);

        try {
            await Inertia.post(route('cart.add'), { product_id: productId, quantity: 1 });

            setCartItemsCount(cartItemsCount + 1);
        } catch (err) {
            console.error('Error adding to cart:', err);
            setError('An error occurred while adding the item to the cart.');
        } finally {
            setIsAdding(false);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-8 flex justify-between items-center p-6">
                        <div className="text-gray-900 text-2xl font-bold">Explore Our Products</div>
                        <div className="relative">
                            <Link href={route('cart.view')}>
                                <FaShoppingCart className="text-teal-600 text-3xl cursor-pointer" />
                                {cartItemsCount > 0 && (
                                    <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs translate-x-1/2 -translate-y-1/2">
                                        {cartItemsCount}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </div>
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products && products.map((product) => (
                            <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                                <div className="relative">
                                    {product.image_url && (
                                        <img
                                            src={product.image_url}
                                            alt={product.name}
                                            className="w-full h-48 object-cover"
                                        />
                                    )}
                                    <div className="absolute top-0 right-0 bg-white p-2 rounded-bl-lg shadow-md">
                                        <span className="text-teal-600 font-semibold text-sm">${product.price}</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                                    <p className="text-gray-700 mb-4">{product.description}</p>
                                    <button
                                        onClick={() => addToCart(product.id)}
                                        disabled={isAdding}
                                        className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition duration-200"
                                    >
                                        {isAdding ? 'Adding...' : 'Add to Cart'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
