import React from "react";
import { Button, Label, TextInput } from "flowbite-react";

export const SignIn = () => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <form className="w-full max-w-lg flex flex-col gap-6 bg-white p-8 rounded-lg mt-10">
                    <p className="mb-2 mt-0 text-md font-bold">Login to HRMS</p>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="username" value="Enter Your Username" />
                        </div>
                        <TextInput id="username" type="text" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Enter Your Password" />
                        </div>
                        <TextInput id="password" type="password" required />
                    </div>
                    <Button type="submit" className="mt-4 text-white">Login</Button>
                </form>
            </div>
        </div>
    );
}