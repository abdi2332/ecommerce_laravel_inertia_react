import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth, products }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            {/* <div className="py-6 sm:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow sm:rounded-lg">
                        <div className="p-6">
                            <Link href={route('products.index')} className="text-blue-500 hover:underline mb-4 inline-block">
                                View All Products
                            </Link>
                            <h1 className="text-2xl font-bold mb-6">Product List</h1>

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-teal-600 text-white">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Price</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Description</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Image</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {products && products.map((product) => (
                                            <tr key={product.id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.price}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.description}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {product.image_url && 
                                                        <img 
                                                            src={product.image_url} 
                                                            alt={product.name} 
                                                            className="w-24 h-24 object-cover rounded border border-gray-200" 
                                                        />
                                                    }
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </AuthenticatedLayout>
    );
}
