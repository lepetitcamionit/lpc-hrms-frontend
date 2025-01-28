import React from "react";
import { Table } from "flowbite-react";

export const SalaryPage = () => {
    return (
        <div>
            <div className="overflow-x-auto sm:mx-48 mx-10">
                <p className="mb-10 mt-5 text-md font-bold">Salary Slips</p>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Salary Slip</Table.HeadCell>
                        <Table.HeadCell>Download</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                - 
                            </Table.Cell>
                            {/* <Table.Cell><div className="text-blue-600 cursor-pointer">Click Here</div></Table.Cell> */}
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}