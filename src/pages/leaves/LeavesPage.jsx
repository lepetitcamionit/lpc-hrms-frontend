"use client";
import React from "react";
import { Table } from "flowbite-react";
import { Button, Label, Select, FileInput, Datepicker } from "flowbite-react";

export const LeavesPage = () => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <form className="w-full max-w-lg flex flex-col gap-6 bg-white p-8 rounded-lg mt-10">
                    <p className="mb-2 mt-0 text-md font-bold">Apply Your Leave</p>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="startdate" value="Enter leave start date" />
                        </div>
                        <Datepicker />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="enddate" value="Enter leave end date"/>
                        </div>
                        <Datepicker />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="leavetype" value="Select Leave Type" />
                        </div>
                        <Select id="leavetypes" required>
                            <option>Casual</option>
                            <option>Sick</option>
                            <option>Vacation</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="leaveform" value="Upload Leave Form" />
                        </div>
                        <FileInput id="file-upload" />
                    </div>
                    <Button type="submit" className="mt-4 text-white">Submit</Button>
                </form>
            </div>

            <div className="overflow-x-auto mx-10 mt-10 mb-20">
                <p className="mb-10 mt-5 text-md font-bold">Recent Leave Applications</p>
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
                                -
                            </Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};
