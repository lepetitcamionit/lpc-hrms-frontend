import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { useAuth } from "../../AuthProvider";
import { useNavigate } from 'react-router-dom';
import userApi from "../../api/user.request";

export const UserProfile = () => {

    const navigate = useNavigate();
    const { logout } = useAuth();

    const [name, setName] = useState(null);

    useEffect(() => {
        const userid = localStorage.getItem("userId")

        const fetchUserDetails = async () => {
            const userData = await userApi.getUserById(userid);
            setName(userData.name);
        }

        fetchUserDetails();
    }, [])

    const handleLogout = async (event) => {
        event.preventDefault();
        await logout();
        navigate("/signin")
    }

    return (
        <div className="flex flex-col justify-center items-center mt-16">
            <div className="mb-6">Hi {name} !</div>
            <div>
                <Button className="mt-4 text-white px-6" onClick={handleLogout}>Logout</Button>
            </div>
        </div>
    );
}