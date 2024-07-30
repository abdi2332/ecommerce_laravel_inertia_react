import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import { useState } from 'react';
import Footer from '@/Layouts/Footer';
import Carousel from '@/Layouts/Carousel';

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
        <AuthenticatedLayout user={auth.user}
            count={cartItemsCount}
        >
            <Carousel/>
            <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal w-[98%] mx-auto">
                {/* Nav */}
                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                    <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                            <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl" href="#">
                                Store
                            </a>
                            <div className="flex items-center" id="store-nav-content">
                                <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                                    <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                                    </svg>
                                </a>
                                <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                                    <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </nav>
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap -mx-6">
                            {products.map(item => (
                                <div key={item.id} className="relative w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col group">
                                    <a href="#" className="block">
                                        <img
                                            src={item.image_url}
                                            alt={item.title}
                                            className="hover:grow hover:shadow-xl object-contain h-48 w-full"
                                        />
                                        <div className="pt-3 flex items-center justify-between">
                                            <p>{item.title}</p>
                                            <svg className="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                            </svg>
                                        </div>
                                        <p className="pt-1 text-gray-900">£{item.price}</p>
                                        <p className="pt-1 text-gray-900">£{item.name.slice(0,35)}</p>
                                    </a>
                                    {/* Add to Cart Button */}
                                    <button
                                        onClick={() => addToCart(item.id)}
                                        className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded hidden group-hover:block text-xs"
                                    >
                                        Add to Cart
                                    </button>

                                </div>
                            ))}
                        </div>
                    </div>
                    <section className="bg-white py-8">
                        <div className="container py-8 px-6 mx-auto">
                            <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8" href="#">
                                About
                            </a>
                            <p className="mt-4 mb-2">
                                Welcome to our e-commerce platform! Our site is designed with a sleek, modern aesthetic to provide you with an enjoyable shopping experience.
                                <br />
                                Inspired by the beautiful nordic minimalist design, our platform offers a user-friendly interface for seamless browsing and purchasing.
                                <br />
                                We are dedicated to offering the best products and services to meet all your needs.
                            </p>
                            <p className="mb-2">
                                Our mission is to deliver high-quality products and exceptional customer service. We strive to provide a diverse range of items, ensuring you find exactly what you're looking for. Our site is easy to navigate, with detailed product descriptions and customer reviews to help you make informed decisions.
                                <br />
                                Happy shopping!
                            </p>
                        </div>
                    </section>
                </div>
                {/* Footer */}
                <Footer />
            </div>
        </AuthenticatedLayout>
    );
}
