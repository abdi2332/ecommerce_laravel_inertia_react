// resources/js/Pages/Admin/InviteUser.jsx
import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { useEditor, EditorContent } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';

export default function InviteUser() {
    const { data, setData, post, errors } = useForm({
        email: '',
    });

    // Initialize Tiptap editor
    const editor = useEditor({
        extensions: [StarterKit],
        content: '',  // initial content, you can set it to a default value
    });

    const submit = (e) => {
        e.preventDefault();
        post('/admin/invite', {
            data: {
                email: data.email,
                message: editor.getHTML(), // Send editor content as HTML
            },
        });
    };

    useEffect(() => {
        // Clean up the editor on unmount
        return () => {
            editor?.destroy();
        };
    }, [editor]);

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Invite User</h2>
            <form onSubmit={submit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.email && <div className="mt-2 text-sm text-red-600">{errors.email}</div>}
                </div>

                {/* Tiptap Editor */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
                    <div className="border border-gray-300 rounded-md p-2">
                        <EditorContent editor={editor} />
                    </div>
                    {errors.message && <div className="mt-2 text-sm text-red-600">{errors.message}</div>}
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Send Invitation
                </button>
            </form>
        </div>
    );
}
