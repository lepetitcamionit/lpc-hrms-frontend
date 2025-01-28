import React from "react";
import { Table } from "flowbite-react";

export const TrainingsPage = () => {
    return (
        <div>
            <div className="overflow-x-auto mx-10">
                <p className="mb-10 mt-5 text-md font-bold">Trainings</p>
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
                                -
                            </Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>- </Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}