// resources/js/Pages/Admin/ManagePrivileges.jsx
import React from 'react';
import { useForm } from '@inertiajs/react';

export default function ManagePrivileges({ users }) {
    const { data, setData, post, errors } = useForm({
        user_id: '',
        privilege: '',
    });

    const grantPrivilege = (e) => {
        e.preventDefault();
        post('/admin/grant-privilege');
    };

    const revokePrivilege = (e) => {
        e.preventDefault();
        post('/admin/revoke-privilege');
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Manage User Privileges</h2>
           
            <form onSubmit={revokePrivilege} className="space-y-4 mt-6">
                <div>
                    <label htmlFor="user_id_revoke" className="block text-sm font-medium text-gray-700">User:</label>
                    <select
                        id="user_id_revoke"
                        name="user_id"
                        value={data.user_id}
                        onChange={(e) => setData('user_id', e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="">Select User</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.name} ({user.email})
                            </option>
                        ))}
                    </select>
                    {errors.user_id && <div className="mt-2 text-sm text-red-600">{errors.user_id}</div>}
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    Revoke Privilege
                </button>
            </form>
        </div>
    );
}
