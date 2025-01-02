"use client";
import React from "react";
import { Select, FileInput, Datepicker } from "flowbite-react";
import { Table } from "flowbite-react";

export const LeavesPage = () => {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <form className="w-full max-w-lg flex flex-col gap-6 bg-white p-8 rounded shadow-lg">
                    <p className="mb-3 mt-0 text-lg font-bold">Apply Your Leave</p>
                    <div>
                        <label htmlFor="email1" className="mb-2 block text-md font-medium">
                            Start Date
                        </label>
                        <Datepicker />
                    </div>
                    <div>
                        <label htmlFor="email1" className="mb-2 block text-md font-medium">
                            End Date
                        </label>
                        <Datepicker />
                    </div>
                    <div>
                        <label htmlFor="leaveType" className="mb-2 block text-md font-medium">
                            Leave Type
                        </label>
                        <Select id="leaveType" required className="w-full rounded border-gray-300">
                            <option>Casual</option>
                            <option>Sick</option>
                            <option>Annual</option>
                        </Select>
                    </div>
                    <div>
                        <label htmlFor="file-upload" className="mb-2 block text-md font-medium">
                            Upload Leave Form
                        </label>
                        <FileInput id="file-upload" className="w-full" />
                    </div>
                    <button
                        type="submit"
                        className="rounded bg-blue-600 px-5 py-3 text-md font-semibold text-white hover:bg-blue-700 mt-6"
                    >
                        Submit
                    </button>
                </form>
            </div>

            <div className="overflow-x-auto mx-10 mt-10 mb-20">
                <p className="mb-10 mt-5 text-lg font-bold">Recent Leave Applications</p>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Applied On</Table.HeadCell>
                        <Table.HeadCell>Start Date</Table.HeadCell>
                        <Table.HeadCell>End Date</Table.HeadCell>
                        <Table.HeadCell>Leave Type</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                2024-02-01
                            </Table.Cell>
                            <Table.Cell>2024-02-02</Table.Cell>
                            <Table.Cell>2024-02-04</Table.Cell>
                            <Table.Cell>Casual</Table.Cell>
                            <Table.Cell>Approved</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                2024-02-01
                            </Table.Cell>
                            <Table.Cell>2024-02-02</Table.Cell>
                            <Table.Cell>2024-02-04</Table.Cell>
                            <Table.Cell>Casual</Table.Cell>
                            <Table.Cell>Approved</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                2024-02-01
                            </Table.Cell>
                            <Table.Cell>2024-02-02</Table.Cell>
                            <Table.Cell>2024-02-04</Table.Cell>
                            <Table.Cell>Casual</Table.Cell>
                            <Table.Cell>Approved</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                2024-02-01
                            </Table.Cell>
                            <Table.Cell>2024-02-02</Table.Cell>
                            <Table.Cell>2024-02-04</Table.Cell>
                            <Table.Cell>Casual</Table.Cell>
                            <Table.Cell>Approved</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};
