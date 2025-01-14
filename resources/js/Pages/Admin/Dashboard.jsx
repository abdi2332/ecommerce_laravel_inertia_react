import AuthenticatedLayout from '@/Layouts/Admin/Authenticated';
import { Head, Link } from '@inertiajs/react';
import Main from './components/Main';
export default function Dashboard({ auth, product,userscount,productcount,recentproducts }) {

    console.log(product);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
    
       <Main count={userscount} productcount={productcount} items={product} recentItems={recentproducts}/>
     
        </AuthenticatedLayout>
        
    );
}
