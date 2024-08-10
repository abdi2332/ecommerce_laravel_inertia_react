// resources/js/Pages/AcceptInvitation.jsx
import React, { useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';

const AcceptInvitation = ({ token }) => {
    useEffect(() => {
        Inertia.get(`/accept-invitation/${token}`);
    }, [token]);

    return (
        <div>
            <h1>Accepting Invitation...</h1>
        </div>
    );
};

export default AcceptInvitation;
