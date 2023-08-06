import React, { useEffect } from 'react';

const Profile = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <div>
            Profile Page
        </div>
    );
};

export default Profile;