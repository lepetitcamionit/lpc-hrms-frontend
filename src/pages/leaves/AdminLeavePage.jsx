import React from "react";
import { Table } from "flowbite-react";
import { IoPencil } from "react-icons/io5";

export const AdminLeavePage = () => {
    return (
        <div>
            <div className="overflow-x-auto mx-10">
                <p className="mb-10 mt-5 text-lg font-bold">Leave Management</p>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Applied Date</Table.HeadCell>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Start Date</Table.HeadCell>
                        <Table.HeadCell>End Date</Table.HeadCell>
                        <Table.HeadCell>Leave Type</Table.HeadCell>
                        <Table.HeadCell>Leave Form</Table.HeadCell>
                        <Table.HeadCell>Update</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                2024-02-01
                            </Table.Cell>
                            <Table.Cell>John Smith</Table.Cell>
                            <Table.Cell>2024-02-10</Table.Cell>
                            <Table.Cell>2024-02-12</Table.Cell>
                            <Table.Cell>Casual</Table.Cell>
                            <Table.Cell><p className="text-blue-600 cursor-pointer">Download</p></Table.Cell>
                            <Table.Cell><div className="text-xl ml-2 cursor-pointer"><IoPencil /></div></Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                2024-02-01
                            </Table.Cell>
                            <Table.Cell>John Smith</Table.Cell>
                            <Table.Cell>2024-02-10</Table.Cell>
                            <Table.Cell>2024-02-12</Table.Cell>
                            <Table.Cell>Casual</Table.Cell>
                            <Table.Cell><p className="text-blue-600 cursor-pointer">Download</p></Table.Cell>
                            <Table.Cell><div className="text-xl ml-2 cursor-pointer"><IoPencil /></div></Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                2024-02-01
                            </Table.Cell>
                            <Table.Cell>John Smith</Table.Cell>
                            <Table.Cell>2024-02-10</Table.Cell>
                            <Table.Cell>2024-02-12</Table.Cell>
                            <Table.Cell>Casual</Table.Cell>
                            <Table.Cell><p className="text-blue-600 cursor-pointer">Download</p></Table.Cell>
                            <Table.Cell><div className="text-xl ml-2 cursor-pointer"><IoPencil /></div></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}