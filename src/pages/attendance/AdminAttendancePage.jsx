import React, { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import * as XLSX from "xlsx";
import attendanceApi from "../../api/attendance.request";
import { Table } from "flowbite-react";

export const AdminAttendancePage = () => {
    const [attendanceData, setAttendanceData] = useState([]);
    const [uniqueEmployees, setUniqueEmployees] = useState([]);

    useEffect(() => {
        const fetchAttendanceData = async () => {
            try {
                const response = await attendanceApi.getAllAttendance();
                console.log(response);
                setAttendanceData(response);

                const employees = [...new Set(response.map((record) => record.employeeName))];
                setUniqueEmployees(employees);
            } catch (error) {
                console.error("Error fetching attendance data:", error);
            }
        };

        fetchAttendanceData();
    }, []);

    const downloadExcel = () => {
        const formattedData = attendanceData.map((record) => {
            const date = record.date.split("T")[0];
            const checkInTime = record.checkInTime;
            const checkOutTime = record.checkOutTime;

            const ot = calculateOT(record.checkInTime, record.checkOutTime);

            return {
                date,
                employeeName: record.employeeName,
                checkInTime,
                checkOutTime,
                OT: ot,
            };
        });

        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(formattedData);

        XLSX.utils.book_append_sheet(wb, ws, "Attendance");

        XLSX.writeFile(wb, "attendance_data.xlsx");
    };

    const downloadIndividualExcel = (employeeName) => {
        const employeeData = attendanceData
            .filter((record) => record.employeeName === employeeName)
            .map((record) => ({
                date: record.date.split("T")[0],
                checkInTime: record.checkInTime,
                checkOutTime: record.checkOutTime,
                OT: calculateOT(record.checkInTime, record.checkOutTime),
            }));

        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(employeeData);

        XLSX.utils.book_append_sheet(wb, ws, employeeName);

        XLSX.writeFile(wb, `${employeeName}_attendance.xlsx`);
    };

    const calculateOT = (checkInTime, checkOutTime) => {
        if (!checkInTime || !checkOutTime) return "N/A";

        const checkInDate = new Date(`1970-01-01T${checkInTime}`);
        const checkOutDate = new Date(`1970-01-01T${checkOutTime}`);

        const workingTimeMillis = checkOutDate - checkInDate;

        const totalWorkingHours = workingTimeMillis / (1000 * 60 * 60);
        const totalWorkingMinutes = workingTimeMillis / (1000 * 60);

        if (totalWorkingHours > 8) {
            const otMinutes = totalWorkingMinutes - 8 * 60;
            const otHours = Math.floor(otMinutes / 60);
            const otRemainingMinutes = otMinutes % 60;

            return `${otHours} hours ${otRemainingMinutes} minutes`;
        }

        return "No OT";
    };

    return (
        <div>
            <p className="mt-12 mt-5 text-md font-bold ml-10">Attendance Reports</p>
            <div className="flex flex-row justify-center mt-6">
                <Button className="mt-4 text-white" onClick={downloadExcel}>
                    Download Full Attendance Report
                </Button>
            </div>

            <div className="mx-8 sm:mx-48 mt-12">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Staff Name</Table.HeadCell>
                        <Table.HeadCell>Individual Report</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {uniqueEmployees.map((employeeName) => (
                            <Table.Row
                                key={employeeName}
                                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                            >
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {employeeName}
                                </Table.Cell>
                                <Table.Cell
                                    className="text-blue-600 cursor-pointer"
                                    onClick={() => downloadIndividualExcel(employeeName)}
                                >
                                    Download
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}