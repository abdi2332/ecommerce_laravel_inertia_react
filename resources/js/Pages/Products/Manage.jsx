import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';

const Manage = ({ products }) => {
    const [editingProduct, setEditingProduct] = useState(null);
    const { data, setData, post, put, reset, errors } = useForm({
        id: '',
        name: '',
        price: '',
        description: '',
        image_url: null
    });

    const handleEdit = (product) => {
        setEditingProduct(product);
        setData({
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description,
            image_url: null
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('description', data.description);
        if (data.image_url) {
            formData.append('image_url', data.image_url);
        }
        if (data.id) {
            formData.append('_method', 'PUT');
            Inertia.post(route('products.update', data.id), formData, { forceFormData: true });
        } else {
            Inertia.post(route('products.store'), formData, { forceFormData: true });
        }
        reset();
        setEditingProduct(null);
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this product?')) {
            Inertia.delete(route('products.destroy', id));
        }
    };

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            <h1 className="text-3xl font-semibold text-teal-700 mb-6">Manage Products</h1>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-1">Name</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-1">Price</label>
                    <input
                        type="number"
                        value={data.price}
                        onChange={(e) => setData('price', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    {errors.price && <div className="text-red-500 text-xs mt-1">{errors.price}</div>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-1">Description</label>
                    <textarea
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-1">Image</label>
                    <input
                        type="file"
                        onChange={(e) => setData('image_url', e.target.files[0])}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-teal-50"
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <button type="submit" className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
                        {data.id ? 'Update' : 'Save'}
                    </button>
                    {data.id && (
                        <button type="button" onClick={() => reset()} className="px-6 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
                            Cancel
                        </button>
                    )}
                </div>
            </form>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead className="bg-teal-600 text-white">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Image</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {products && products.map((product) => (
                            <tr key={product.id} className="hover:bg-teal-50 transition-colors duration-200">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.name}</td>
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
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button
                                        onClick={() => handleEdit(product)}
                                        className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(product.id)}
                                        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Manage;
