import React from "react";
import { Table } from "flowbite-react";

export const AttendancePage = () => {
    return (
        <div>
            <div className="overflow-x-auto mx-10">
                <p className="mb-10 mt-5 text-md font-bold">Attendance</p>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Date</Table.HeadCell>
                        <Table.HeadCell>Clock In</Table.HeadCell>
                        <Table.HeadCell>Clock Out</Table.HeadCell>
                        <Table.HeadCell>Working Hours</Table.HeadCell>
                        <Table.HeadCell>OT</Table.HeadCell>
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
}