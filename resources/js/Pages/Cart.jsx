// resources/js/Pages/Cart.jsx

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Cart({ cartItems }) {
    return (
        <AuthenticatedLayout>
            <Head title="Cart" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Your Cart</div>
                        <div className="grid grid-cols-1 gap-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="p-4 border rounded-lg">
                                    <h2 className="text-xl font-bold">{item.product.name}</h2>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: ${item.product.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
