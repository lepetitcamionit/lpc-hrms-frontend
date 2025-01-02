import React from "react";
import { Table } from "flowbite-react";

export const TrainingsPage = () => {
    return (
        <div>
            <div className="overflow-x-auto mx-10">
                <p className="mb-10 mt-5 text-lg font-bold">Trainings</p>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Date</Table.HeadCell>
                        <Table.HeadCell>Trainer</Table.HeadCell>
                        <Table.HeadCell>Place</Table.HeadCell>
                        <Table.HeadCell>Topic</Table.HeadCell>
                        <Table.HeadCell>Start Time</Table.HeadCell>
                        <Table.HeadCell>End Time</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                2024-02-01
                            </Table.Cell>
                            <Table.Cell>Ver</Table.Cell>
                            <Table.Cell>Mashaf</Table.Cell>
                            <Table.Cell>Barista Training</Table.Cell>
                            <Table.Cell>08.00 AM</Table.Cell>
                            <Table.Cell>11.00 AM</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                2024-02-01
                            </Table.Cell>
                            <Table.Cell>Ver</Table.Cell>
                            <Table.Cell>Mashaf</Table.Cell>
                            <Table.Cell>Barista Training</Table.Cell>
                            <Table.Cell>08.00 AM</Table.Cell>
                            <Table.Cell>11.00 AM</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                2024-02-01
                            </Table.Cell>
                            <Table.Cell>Ver</Table.Cell>
                            <Table.Cell>Mashaf</Table.Cell>
                            <Table.Cell>Barista Training</Table.Cell>
                            <Table.Cell>08.00 AM</Table.Cell>
                            <Table.Cell>11.00 AM</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}