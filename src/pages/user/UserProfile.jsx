import React from "react";
import { Button } from "flowbite-react";
import { useAuth } from "../../AuthProvider";
import { useNavigate } from 'react-router-dom';

export const UserProfile = () => {

    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = async (event) => {
        event.preventDefault();
        await logout();
        navigate("/signin")
    }

    return (
        <div>
            <Button className="mt-4 text-white" onClick={handleLogout}>Logout</Button>
        </div>
    );
}