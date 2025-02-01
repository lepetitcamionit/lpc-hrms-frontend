import React, { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../AuthProvider";
import { useNavBar } from "../../NavBarContext";

export const SignIn = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const { setNavBarType } = useNavBar();

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();

        const credentials = {
            userId: userId,
            password: password,
        };

        try {
            const res = await login(credentials);

            console.log(userId);
            console.log(password);

            console.log("Signin: handleLogin 01", res);

            if (!res.user.isUserDeleted) {
                console.log("Signin: handleLogin 02", res);
                localStorage.setItem("authToken", res.token);
                localStorage.setItem("userId", res.user._id);
                localStorage.setItem("role", res.user.role);

                console.log("Signin: handleLogin 03", res);

                const role = res.user.role;

                if (["owner", "admin", "manager", "supervisor", "accountant", "HR"].includes(role)) {
                    setNavBarType("admin");
                    navigate('/admin');
                } else {
                    // barista, head barista, cashier, chef
                    setNavBarType("common");
                    navigate('/');
                }
            }

            console.log("Signin: handleLogin 04", res);

        } catch (error) {
            console.error("Sign-in error:", error);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-center">
                <form className="w-full max-w-lg flex flex-col gap-6 bg-white p-8 rounded-lg mt-10">
                    <p className="mb-2 mt-0 text-md font-bold">Login to HRMS</p>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="userId" value="Enter Your User Id" />
                        </div>
                        <TextInput id="userId" type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Enter Your Password" />
                        </div>
                        <TextInput id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <Button type="submit" className="mt-4 text-white" onClick={handleLogin}>Login</Button>
                </form>
            </div>
        </div>
    );
}