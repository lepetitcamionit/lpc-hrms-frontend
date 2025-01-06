import React from "react";
import { Table } from "flowbite-react";
import { Button, Textarea, Label, TextInput } from "flowbite-react";
import { IoPencil } from "react-icons/io5";

export const AdminNotificationPage = () => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <form className="w-full max-w-lg flex flex-col gap-6 bg-white p-8 rounded-lg mt-10">
                    <p className="mb-2 mt-0 text-lg font-bold">Create Notification</p>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="title" value="Enter your message"/>
                        </div>
                        <TextInput id="title" type="text" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="description" value="Enter your description"/>
                        </div>
                        <Textarea id="description" type="text" required />
                    </div>
                    <Button type="submit" className="mt-4">Publish</Button>
                </form>
            </div>

            <div className="overflow-x-auto mx-10 mt-10 mb-20">
                <p className="mb-10 mt-5 text-lg font-bold">Previous Notification</p>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Published On</Table.HeadCell>
                        <Table.HeadCell>Title</Table.HeadCell>
                        <Table.HeadCell>Description</Table.HeadCell>
                        <Table.HeadCell>Update</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                2024-02-01
                            </Table.Cell>
                            <Table.Cell>Test</Table.Cell>
                            <Table.Cell>Test Description Test DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest Description</Table.Cell>
                            <Table.Cell><div className="text-xl ml-2 cursor-pointer"><IoPencil /></div></Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                2024-02-01
                            </Table.Cell>
                            <Table.Cell>Test</Table.Cell>
                            <Table.Cell>Test Description</Table.Cell>
                            <Table.Cell><div className="text-xl ml-2 cursor-pointer"><IoPencil /></div></Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                2024-02-01
                            </Table.Cell>
                            <Table.Cell>Test</Table.Cell>
                            <Table.Cell>Test Description</Table.Cell>
                            <Table.Cell><div className="text-xl ml-2 cursor-pointer"><IoPencil /></div></Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                2024-02-01
                            </Table.Cell>
                            <Table.Cell>Test</Table.Cell>
                            <Table.Cell>Test Description</Table.Cell>
                            <Table.Cell><div className="text-xl ml-2 cursor-pointer"><IoPencil /></div></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}