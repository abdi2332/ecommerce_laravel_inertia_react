import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';

export default function Cart({ cartItems }) {
    const [totalPrice, setTotalPrice] = useState(0);


    const removeFromCart =(id)=>{
        
    }

    useEffect(() => {
        const calculateTotal = () => {
            const total = cartItems.reduce((acc, item) => {
                return acc + (item.product.price * item.quantity);
            }, 0);
            setTotalPrice(total);
        };

        calculateTotal();
    }, [cartItems]);

    return (
        <>
            <Head title="Cart" />
            <div className="py-12 bg-gray-100 min-h-screen">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg p-6 mb-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Shopping Cart</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 space-y-4">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="p-4 border rounded-lg flex items-center bg-white">
                                        <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden">
                                            {item.product.image_url ? (
                                                <img
                                                    src={item.product.image_url}
                                                    alt={item.product.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-gray-500">
                                                    No Image
                                                </div>
                                            )}
                                        </div>
                                        <div className="ml-4 flex-1">
                                            <h2 className="text-xl font-semibold">{item.product.name}</h2>
                                            <p className="text-gray-600">Quantity: {item.quantity}</p>
                                            <p className="text-gray-600">Price: ${item.product.price}</p>
                                        </div>
                                        <button className="text-red-500" title="Remove from Cart" onClick={()=>remoc}>
                                            <FaTrash />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                                <div className="border-t border-gray-200 py-2">
                                    <div className="flex justify-between text-gray-700">
                                        <span>Subtotal</span>
                                        <span>${totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-700 mt-2">
                                        <span>Shipping</span>
                                        <span>$5.00</span>
                                    </div>
                                    <div className="flex justify-between text-gray-700 mt-2">
                                        <span>Tax</span>
                                        <span>${(totalPrice * 0.1).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between font-bold text-gray-900 mt-4 border-t border-gray-300 pt-4">
                                        <span>Total</span>
                                        <span>${(totalPrice + 5 + totalPrice * 0.1).toFixed(2)}</span>
                                    </div>
                                    <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-500 transition duration-200">
                                        Proceed to Checkout
                                    </button>
                                    <button className="mt-2 w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-500 transition duration-200">
                                        Continue Shopping
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
