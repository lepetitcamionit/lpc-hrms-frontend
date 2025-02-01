import React, { useState, useEffect } from "react";
import { Table, Modal } from "flowbite-react";
import { Button, TextInput } from "flowbite-react";
import { IoPencil, IoTrash } from "react-icons/io5";
import userApi from "../../api/user.request";
import { CreateEmployee } from "./CreateEmployee";
import { UpdateEmployee } from "./UpdateEmployee";

export const EmployeeManagement = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [userToUpdate, setUserToUpdate] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const allUsers = await userApi.getAllUsers();
                setUsers(allUsers);
                console.log(allUsers);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    const filteredUsers = users
        .filter((user) => !user.isUserDeleted && !user.isResigned)
        .filter((user) => user.name?.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleViewUser = async (userId) => {
        try {
            const user = await userApi.getUserById(userId);
            setSelectedUser(user);

            console.log("handleViewUser");

            setIsModalOpen(true);
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };

    const handleOpenCreateModal = () => {
        setIsCreateModalOpen(true);
    }

    const handleCloseCreateModal = () => {
        setIsCreateModalOpen(false);
    }

    const handleOpenUpdateModal = (user) => {
        setUserToUpdate(user);
        setIsUpdateModalOpen(true);
    };

    const handleCloseUpdateModal = () => {
        setIsUpdateModalOpen(false);
    };

    const handleOpenDeleteModal = (user) => {
        setUserToDelete(user);
        setIsDeleteModalOpen(true);
    };

    const handleCloseDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setUserToDelete(null);
    };

    const handleDeleteUser = async () => {
        if (!userToDelete) return;

        try {
            await userApi.softDeleteUser(userToDelete._id);
            setUsers(users.filter(user => user._id !== userToDelete._id));
            handleCloseDeleteModal();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    return (
        <div>
            <p className="mt-12 mt-5 text-md font-bold ml-10">Employee Management</p>
            <div className="mx-8 sm:mx-32 mt-12">
                <div className="flex flex-row justify-between mb-6">
                    <TextInput
                        type="text"
                        placeholder="Search Here..."
                        className="w-[200px]"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button type="submit" onClick={handleOpenCreateModal}>Create Employee</Button>
                </div>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Details</Table.HeadCell>
                        <Table.HeadCell>Update</Table.HeadCell>
                        <Table.HeadCell>Soft Delete</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {filteredUsers.map((user) => (
                            <Table.Row
                                key={user.id}
                                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                            >
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {user.name}
                                </Table.Cell>
                                <Table.Cell
                                    className="text-blue-600 cursor-pointer"
                                    onClick={() => handleViewUser(user._id)}
                                >
                                    View
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="text-xl ml-2 cursor-pointer" onClick={() => handleOpenUpdateModal(user)}>
                                        <IoPencil />
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="text-xl ml-2 cursor-pointer text-red-500" onClick={() => handleOpenDeleteModal(user)}>
                                        <IoTrash />
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>

            {/* Modal to show user details */}
            {isModalOpen && selectedUser && (
                <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <Modal.Header>User Details</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-4 ml-6">
                            <p><strong className="mr-2">Name:</strong> {selectedUser.name}</p>
                            <p><strong className="mr-2">User Id:</strong> {selectedUser.userId}</p>
                            <p><strong className="mr-2">Role:</strong> {selectedUser.role}</p>
                            <p><strong className="mr-2">Salary:</strong> {selectedUser.salary} QR</p>
                            <p><strong className="mr-2">Passport Number:</strong> {selectedUser.passportNumber}</p>
                            <p><strong className="mr-2">QID Number:</strong> {selectedUser.qidNumber}</p>
                            <p><strong className="mr-2">Date of Birth:</strong> {selectedUser.dateOfBirth.split("T")[0]}</p>
                            <p><strong className="mr-2">Contact Number:</strong> {selectedUser.contactNumber}</p>
                            <p><strong className="mr-2">Family Contact Number:</strong> {selectedUser.familyContactNumber}</p>
                            <p><strong className="mr-2">Nationality:</strong> {selectedUser.nationality}</p>
                            <p><strong className="mr-2">Joining Date:</strong> {selectedUser.joiningDate.split("T")[0]}</p>
                            <p><strong className="mr-2">Probation Evaluation Confirm Date:</strong> {selectedUser.probationEvalConfirmDate.split("T")[0]}</p>
                            <p><strong className="mr-2">Warning Letter Count:</strong> {selectedUser.warningLetterCount}</p>
                            <p><strong className="mr-2">Health Card Start Date:</strong> {selectedUser.healthcardStartDate.split("T")[0]}</p>
                            <p><strong className="mr-2">Health Card Number:</strong> {selectedUser.healthcardNumber}</p>
                            <p><strong className="mr-2">FHC Start Date:</strong> {selectedUser.FHCStartDate.split("T")[0]}</p>
                        </div>
                    </Modal.Body>
                </Modal>
            )}

            {isCreateModalOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",  // Dark background
                            zIndex: 9998,  // Set z-index lower than modal
                        }}
                        onClick={handleCloseCreateModal}  // Close modal when clicking backdrop
                    ></div>

                    {/* Modal */}
                    <CreateEmployee
                        onClose={handleCloseCreateModal}
                        modalStyle={{
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 9999,  // Set z-index higher than backdrop
                            width: "100%", // Adjust width if needed
                            maxWidth: "500px",
                            height: "80%",
                            maxHeight: "90vh",
                            overflowY: "auto",
                            backgroundColor: "white",
                            borderRadius: "8px", // Optional for better look
                        }}
                    />
                </>
            )}

            {isUpdateModalOpen && (
                <>
                    <div
                        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 9998 }}
                        onClick={handleCloseUpdateModal}
                    ></div>

                    <UpdateEmployee
                        user={userToUpdate}
                        onClose={handleCloseUpdateModal}
                        modalStyle={{
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 9999,
                            width: "100%",
                            maxWidth: "500px",
                            height: "80%",
                            maxHeight: "90vh",
                            overflowY: "auto",
                            backgroundColor: "white",
                            borderRadius: "8px",
                        }}
                    />
                </>
            )}

            {/* Delete Confirmation Modal */}
            {isDeleteModalOpen && (
                <Modal show={isDeleteModalOpen} onClose={handleCloseDeleteModal}>
                    <Modal.Header>Delete Employee</Modal.Header>
                    <Modal.Body>
                        <p>Are you sure you want to delete <strong>{userToDelete?.name}</strong>?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button color="red" onClick={handleDeleteUser}>Yes, Delete</Button>
                        <Button color="gray" onClick={handleCloseDeleteModal}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            )}

        </div>
    );
};
