import React from "react";
import { Table } from "flowbite-react";

export const AttendancePage = () => {
    return (
        <div>
            <div className="overflow-x-auto mx-10">
                <p className="mb-10 mt-5 text-lg font-bold">Attendance</p>
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
                                2024-02-01
                            </Table.Cell>
                            <Table.Cell>08.00 AM</Table.Cell>
                            <Table.Cell>04.00 PM</Table.Cell>
                            <Table.Cell>8h</Table.Cell>
                            <Table.Cell>0</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                2024-02-02
                            </Table.Cell>
                            <Table.Cell>12.00 PM</Table.Cell>
                            <Table.Cell>12.00 AM</Table.Cell>
                            <Table.Cell>12h</Table.Cell>
                            <Table.Cell>4h</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                2024-02-03
                            </Table.Cell>
                            <Table.Cell>07.55 AM</Table.Cell>
                            <Table.Cell>04.05 PM</Table.Cell>
                            <Table.Cell>8h 10 min</Table.Cell>
                            <Table.Cell>10 min</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}