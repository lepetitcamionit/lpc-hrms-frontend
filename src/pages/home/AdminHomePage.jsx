import React, { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import * as XLSX from "xlsx";
import attendanceApi from "../../api/attendance.request";
export const AdminHomePage = () => {
    const [attendanceData, setAttendanceData] = useState([]);

    useEffect(() => {
        const fetchAttendanceData = async () => {
            try {
                const response = await attendanceApi.getAllAttendance();
                console.log(response);
                setAttendanceData(response);
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
            <Button className="mt-4 text-white" onClick={downloadExcel}>
                Download Attendance Report
            </Button>
        </div>
    );
};
