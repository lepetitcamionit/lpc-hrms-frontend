import React from "react";
import { Table } from "flowbite-react";
import { Button, Textarea, Label, TextInput } from "flowbite-react";
import { IoPencil, IoTrash } from "react-icons/io5";

export const AdminRolePage = () => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <form className="w-full max-w-lg flex flex-col gap-6 bg-white p-8 rounded-lg mt-10">
                    <p className="mb-2 mt-0 text-lg font-bold">Create A Role</p>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="rolename" value="Enter role name" />
                        </div>
                        <TextInput id="rolename" type="text" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="description" value="Enter role description" />
                        </div>
                        <Textarea id="description" type="text" required />
                    </div>
                    <Button type="submit" className="mt-4">Save</Button>
                </form>
            </div>

            <div className="overflow-x-auto mx-10 mt-10 mb-20">
                <p className="mb-10 mt-5 text-lg font-bold">All Roles</p>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Role name</Table.HeadCell>
                        <Table.HeadCell>Role Description</Table.HeadCell>
                        <Table.HeadCell>Update</Table.HeadCell>
                        <Table.HeadCell>Delete</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Admin
                            </Table.Cell>
                            <Table.Cell>Manage all IT work </Table.Cell>
                            <Table.Cell><div className="text-xl ml-2 cursor-pointer"><IoPencil /></div></Table.Cell>
                            <Table.Cell><div className="text-xl ml-2 cursor-pointer text-red-600"><IoTrash /></div></Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Admin
                            </Table.Cell>
                            <Table.Cell>Manage all IT work</Table.Cell>
                            <Table.Cell><div className="text-xl ml-2 cursor-pointer"><IoPencil /></div></Table.Cell>
                            <Table.Cell><div className="text-xl ml-2 cursor-pointer text-red-600"><IoTrash /></div></Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Admin
                            </Table.Cell>
                            <Table.Cell>Manage all IT work</Table.Cell>
                            <Table.Cell><div className="text-xl ml-2 cursor-pointer"><IoPencil /></div></Table.Cell>
                            <Table.Cell><div className="text-xl ml-2 cursor-pointer text-red-600"><IoTrash /></div></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}