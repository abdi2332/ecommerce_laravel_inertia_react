// resources/js/Components/Notification.jsx
import React from 'react';

const Notification = ({ type, message }) => {
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
    const textColor = 'text-white';

    return (
        <div className={`p-4 mb-4 rounded ${bgColor} ${textColor}`}>
            {message}
        </div>
    );
};

export default Notification;
