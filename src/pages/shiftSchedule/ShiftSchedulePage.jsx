import React from "react";
import { Table } from "flowbite-react";

export const ShiftSchedulePage = () => {
    return (
        <div>
            <div className="overflow-x-auto sm:mx-32 mx-10">
                <p className="mb-10 mt-5 text-md font-bold">Shift Schedules</p>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Date</Table.HeadCell>
                        <Table.HeadCell>Branch</Table.HeadCell>
                        <Table.HeadCell>Start Time</Table.HeadCell>
                        <Table.HeadCell>Ending Time</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                2024-02-01
                            </Table.Cell>
                            <Table.Cell>Villagio</Table.Cell>
                            <Table.Cell>08.00 AM</Table.Cell>
                            <Table.Cell>04.00 PM</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                2024-02-01
                            </Table.Cell>
                            <Table.Cell>Villagio</Table.Cell>
                            <Table.Cell>08.00 AM</Table.Cell>
                            <Table.Cell>04.00 PM</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                2024-02-01
                            </Table.Cell>
                            <Table.Cell>Villagio</Table.Cell>
                            <Table.Cell>08.00 AM</Table.Cell>
                            <Table.Cell>04.00 PM</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}