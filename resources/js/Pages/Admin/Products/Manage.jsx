import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/Admin/Authenticated';
import { Head, Link } from '@inertiajs/react';
import useDarkModeStore from '@/store/darkModeStore';
import downarrow from '../../../../images/keyboard_arrow_down 2.png'
import { FaEdit, FaTrash } from 'react-icons/fa';

const Manage = ({ products,auth }) => {
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
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
      
    


        <section class="bg-white dark:bg-gray-900 h-full">
        <div class=" py-4 px-20 max-w-6xl mx-auto  shadow-sm">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white pt-4">Add a new product</h2>
      <form onSubmit={handleSubmit}>
          <div class="grid gap-6 sm:grid-cols-2 sm:gap-6">
              <div class="w-5/6">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                  <input
                   type="text" name="name" id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                   placeholder="Type product name" 
                   required=""
                   value={data.name}
                   onChange={(e)=>setData('name', e.target.value)}/>
              </div>
              <div class="w-5/6">
                  <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                  <input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""/>
              </div>
              <div class="w-5/6">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload file</label>
           <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2" 
           aria-describedby="user_avatar_help" 
           id="user_avatar" type="file"
           onChange={(e)=>setData('image_url', e.target.files[0])}
           />
            </div>
              <div class="w-5/6">
                  <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                  <input type="number" 
                  name="price" 
                  id="price"
                  value={data.price}
                  onChange={(e)=>setData('price',e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required=""/>
              </div>
              <div className='w-5/6'>
                  <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                  <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Select category</option>
                      <option value="TV">TV/Monitors</option>
                      <option value="PC">PC</option>
                      <option value="GA">Gaming/Console</option>
                      <option value="PH">Phones</option>
                  </select>
              </div> 
              <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="description"
                   rows="8"
                   class="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="Your description here"
                   value={data.description}
                   onChange={(e) => setData('description', e.target.value)}
                   ></textarea>
              </div>
          </div>
          <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-950 rounded-lg focus:bg-blue-900  hover:bg-blue-800">
             {data.id ? 'Update':'Add product'}
          </button>
          {data.id && (
                        <button type="button" onClick={() => reset()} class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Cancel
                        </button>
                    )}
      </form>
  </div>

  <div className="max-w-6xl  mx-auto p-6">
    <table className="w-full whitespace-no-wrap">
      <thead>
        <tr className="text-[10px] xx:text-xs tracking-wide text-left text-gray-600 dark:text-gray-200 uppercase border-b bg-gray-200 dark:bg-gray-700">
          <th className="px-4 py-3 text-[10px] xx:text-xs">Item</th>
          <th className="px-4 py-3 text-[10px] xx:text-xs">Price</th>
          <th className="px-4 py-3 text-[10px] xx:text-xs">Status</th>
          <th className="px-4 py-3 text-[10px] xx:text-xs">Action</th>
        </tr>

      </thead>
      <tbody className="bg-white divide-y dark:bg-gray-900">
       
        {products.map(item => (
           <tr key={item.id} className="text-gray-700 dark:text-gray-300">
           <td  className="px-4 py-3 text-[10px] xx:text-xs">
           <div className="flex items-center text-[10px] xx:text-xs">
             <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
               <img   src={item.image_url} alt={item.title} className="object-cover w-full h-full rounded-full" />
               <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
             </div>
             <div>
               <p className="font-semibold text-[10px] xx:text-xs">{item.name.slice(0,15)}</p>
               <p className="text-[10px] text-gray-600 xx:text-xs">10x Developer</p>
             </div>
           </div>
         </td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">$ {item.price}</td>
          <td className="px-4 py-3 text-[10px] xx:text-xs">
            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 dark:bg-green-900 dark:text-green-100 rounded-full">
              Approved
            </span>
          </td>
          <td className="px-4 py-3 text-[10px] xx:text-xs"><span className='flex pl-2'><FaEdit className='mr-2 cursor-pointer' onClick={()=>handleEdit(item)}/><FaTrash className='cursor-pointer' onClick={()=>handleDelete(item.id)}/></span></td>
        </tr>
        ))}
        {/* Other rows here */}
      </tbody>
    </table>
  </div>
</section>




        </AuthenticatedLayout> 
    );
};

export default Manage;
