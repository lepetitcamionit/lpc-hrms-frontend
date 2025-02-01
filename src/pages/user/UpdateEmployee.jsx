import React, { useState, useEffect } from "react";
import { Button, TextInput, Label, Select } from "flowbite-react";
import userApi from "../../api/user.request";
import { IoClose } from "react-icons/io5";

export const UpdateEmployee = ({ user, onClose, modalStyle }) => {
    const [formData, setFormData] = useState(user);
    const [error, setError] = useState("");

    useEffect(() => {
        setFormData(user);
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.role) {
            setError("Name and Role are required.");
            return;
        }

        try {
            await userApi.updateUser(formData, formData._id);
            onClose();
        } catch (err) {
            console.error("Error updating employee:", err);
            setError("Failed to update employee.");
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md" style={{ ...modalStyle }}>
            <div className="flex flex-row justify-between mb-6">
                <h2 className="text-xl font-bold">Update Employee</h2>
                <IoClose className="text-2xl font-bold cursor-pointer mt-1" onClick={onClose} />
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <Label htmlFor="name" className="ml-2">Name *</Label>
                    <TextInput id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="mb-6">
                    <Label htmlFor="role" className="ml-2">Role *</Label>
                    <Select id="role" name="role" value={formData.role} onChange={handleInputChange} required>
                        <option value="owner">Owner</option>
                        <option value="barista">Barista</option>
                    </Select>
                </div>
                <div className="mb-6">
                    <Label htmlFor="salary" className="ml-2">Salary</Label>
                    <TextInput id="salary" name="salary" type="number" value={formData.salary} onChange={handleInputChange} />
                </div>

                <div className="flex justify-end">
                    <Button type="submit" className="mr-2">Update Employee</Button>
                    <Button type="button" color="gray" onClick={onClose}>Cancel</Button>
                </div>
            </form>
        </div>
    );
};
