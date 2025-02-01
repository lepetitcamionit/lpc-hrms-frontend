import React, { useState } from "react";
import { Button, TextInput, Label, Select } from "flowbite-react";
import userApi from "../../api/user.request";
import { IoClose } from "react-icons/io5";

export const CreateEmployee = ({ onClose, modalStyle }) => {
    const [formData, setFormData] = useState({
        userId: "",
        password: "",
        confirmPassword: "",
        name: "",
        role: "",
        salary: 0,
        passportNumber: "",
        qidNumber: "",
        dateOfBirth: "",
        contactNumber: "",
        familyContactNumber: "",
        nationality: "",
        joiningDate: "",
        probationEvalConfirmDate: "",
        warningLetterCount: 0,
        healthcardStartDate: "",
        healthcardNumber: "",
        FHCStartDate: "",
    });

    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        console.log("handleSubmit 01");

        e.preventDefault();

        // Basic validation for required fields
        const { userId, password, confirmPassword, name, role } = formData;
        if (!userId || !password || !confirmPassword || !name || !role) {
            setError("All required fields must be filled out");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        console.log("handleSubmit 02");

        try {
            const response = await userApi.createUser(formData); // Assuming createUser API exists
            console.log("Employee created successfully:", response);
            onClose(); // Close the form after successful creation
            window.location.reload();
        } catch (err) {
            console.error("Error creating employee:", err);
            setError("Failed to create employee. Please try again.");
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md" style={{ ...modalStyle }}>
            <div className="flex flex-row justify-between mb-6">
                <h2 className="text-xl font-bold">Create Employee</h2>
                <IoClose className="text-2xl font-bold cursor-pointer mt-1" onClick={onClose} />
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
                {/* Required Fields */}
                <div className="mb-6">
                    <Label htmlFor="userId" className="ml-2">User ID *</Label>
                    <TextInput
                        id="userId"
                        name="userId"
                        type="text"
                        placeholder="Enter User ID"
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <Label htmlFor="password" className="ml-2">Password *</Label>
                    <TextInput
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <Label htmlFor="confirmPassword" className="ml-2">Confirm Password *</Label>
                    <TextInput
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <Label htmlFor="name" className="ml-2">Name *</Label>
                    <TextInput
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter Name"
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <Label htmlFor="role" className="ml-2">Role *</Label>
                    <Select
                        id="role"
                        name="role"
                        required
                        onChange={handleInputChange}
                    >
                        <option value="">Select Role</option>
                        <option value="owner">Owner</option>
                        <option value="barista">Barista</option>
                        {/* Add more roles as needed */}
                    </Select>
                </div>

                {/* Optional Fields */}
                <div className="mb-6">
                    <Label htmlFor="salary" className="ml-2">Salary</Label>
                    <TextInput
                        id="salary"
                        name="salary"
                        type="number"
                        placeholder="Enter Salary"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <Label htmlFor="passportNumber" className="ml-2">Passport Number</Label>
                    <TextInput
                        id="passportNumber"
                        name="passportNumber"
                        type="text"
                        placeholder="Enter Passport Number"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <Label htmlFor="qidNumber" className="ml-2">QID Number</Label>
                    <TextInput
                        id="qidNumber"
                        name="qidNumber"
                        type="text"
                        placeholder="Enter QID Number"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <Label htmlFor="dateOfBirth" className="ml-2">Date of Birth</Label>
                    <TextInput
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <Label htmlFor="contactNumber" className="ml-2">Contact Number</Label>
                    <TextInput
                        id="contactNumber"
                        name="contactNumber"
                        type="text"
                        placeholder="Enter Contact Number"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <Label htmlFor="familyContactNumber" className="ml-2">Family Contact Number</Label>
                    <TextInput
                        id="familyContactNumber"
                        name="familyContactNumber"
                        type="text"
                        placeholder="Enter Family Contact Number"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <Label htmlFor="nationality" className="ml-2">Nationality</Label>
                    <TextInput
                        id="nationality"
                        name="nationality"
                        type="text"
                        placeholder="Enter Nationality"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <Label htmlFor="joiningDate" className="ml-2">Joining Date</Label>
                    <TextInput
                        id="joiningDate"
                        name="joiningDate"
                        type="date"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <Label htmlFor="probationEvalConfirmDate" className="ml-2">Probation Evaluation Confirm Date</Label>
                    <TextInput
                        id="probationEvalConfirmDate"
                        name="probationEvalConfirmDate"
                        type="date"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <Label htmlFor="warningLetterCount" className="ml-2">Warning Letter Count</Label>
                    <TextInput
                        id="warningLetterCount"
                        name="warningLetterCount"
                        type="number"
                        placeholder="Enter Warning Letter Count"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <Label htmlFor="healthcardStartDate" className="ml-2">Health Card Start Date</Label>
                    <TextInput
                        id="healthcardStartDate"
                        name="healthcardStartDate"
                        type="date"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <Label htmlFor="healthcardNumber" className="ml-2">Health Card Number</Label>
                    <TextInput
                        id="healthcardNumber"
                        name="healthcardNumber"
                        type="text"
                        placeholder="Enter Health Card Number"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <Label htmlFor="FHCStartDate" className="ml-2">FHC Start Date</Label>
                    <TextInput
                        id="FHCStartDate"
                        name="FHCStartDate"
                        type="date"
                        onChange={handleInputChange}
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                    <Button type="submit" className="mr-2">
                        Create Employee
                    </Button>
                    <Button type="button" color="gray" onClick={onClose}>
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
};
