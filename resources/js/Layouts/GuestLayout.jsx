import { Link } from '@inertiajs/react';
import { FaShoppingCart } from 'react-icons/fa';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 bg-gray-50">
            <div className="flex flex-col items-center">
                <Link href="/">
                    <FaShoppingCart className="text-6xl text-blue-600" />
                </Link>
                <h1 className="mt-4 text-3xl font-bold text-gray-700">Welcome to ShopMaster</h1>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-8 bg-white shadow-lg rounded-lg">
                {children}
            </div>

            <div className="mt-6 flex justify-center space-x-4">
                <Link 
                    href={route('login')} 
                    className="text-blue-600 hover:text-blue-800 underline"
                >
                    Login
                </Link>
                <Link 
                    href={route('register')} 
                    className="text-blue-600 hover:text-blue-800 underline"
                >
                    Register
                </Link>
            </div>
        </div>
    );
}
