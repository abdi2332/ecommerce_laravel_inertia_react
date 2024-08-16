import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

function FacebookPost() {
    const [message, setMessage] = useState('');
    const [image, setImage] = useState(null);
    const [htmlTable, setHtmlTable] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleTableChange = (e) => {
        setHtmlTable(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('message', message);
        formData.append('htmlTable', htmlTable);
        if (image) formData.append('image', image);

        Inertia.post('/facebook/post', formData, {
            onSuccess: (response) => {
                setSuccess(response.props.success);
                setError(null);
            },
            onError: (response) => {
                setError(response.props.error);
                setSuccess(null);
            }
        });
    };

    const handlePostView = () => {
        Inertia.post('/facebook/post-view', { message }, {
            onSuccess: (response) => {
                setSuccess(response.props.success);
                setError(null);
            },
            onError: (response) => {
                setError(response.props.error);
                setSuccess(null);
            }
        });
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-semibold mb-6">Post to Facebook</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your post here"
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <textarea
                    value={htmlTable}
                    onChange={handleTableChange}
                    placeholder="Enter HTML table data"
                    rows="10"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="block w-full text-sm text-gray-700 file:border file:border-gray-300 file:bg-gray-100 file:py-2 file:px-4 file:rounded-lg file:text-gray-700 hover:file:bg-gray-200"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Post to Facebook
                </button>
            </form>
            <button
                onClick={handlePostView}
                className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
                Post View as Image
            </button>
            {success && <p className="mt-4 text-green-600">{success}</p>}
            {error && <p className="mt-4 text-red-600">{error}</p>}
        </div>
    );
}

export default FacebookPost;
