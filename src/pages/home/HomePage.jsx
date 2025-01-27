import React, { useState, useEffect } from "react";
import { Button, Modal } from "flowbite-react";
import attendanceApi from "../../api/attendance.request";
import userApi from "../../api/user.request";
import { format, toZonedTime } from "date-fns-tz";

export const HomePage = () => {
    const [openCheckInModal, setOpenCheckInModal] = useState(false);
    const [openCheckOutModal, setOpenCheckOutModal] = useState(false);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        if (userId) {
            fetchUserName(userId);
        }
    }, []);

    const fetchUserName = async (userId) => {
        try {
            console.log("fetchUserName");
            const response = await userApi.getUserById(userId);

            console.log("fetchUserName o2");
            console.log(response);

            if (response) {
                setUserName(response.name);
                console.log("Fetched user name:", response.name);
            } else {
                console.error("User name is not properly structured in response:", response);
            }
        } catch (error) {
            console.error("Error fetching user name:", error);
        }
    };


    const getQatarTime = () => {
        const now = new Date();
        const qatarTimeZone = "Asia/Qatar";
        const qatarTime = toZonedTime(now, qatarTimeZone);
        return format(qatarTime, "HH:mm:ss", { timeZone: qatarTimeZone }); // Extract time as HH:mm:ss
    };

    const handleCheckIn = async () => {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("authToken");

        if (!userId) {
            console.error("User ID not found in localStorage");
            return;
        }
    
        if (!userName) {
            console.error("User name not found. Ensure fetchUserName is called and sets the state.");
            return;
        }
    
        const checkInTime = getQatarTime();

        console.log(userName);
    
        const attendanceData = {
            employeeId: userId,
            employeeName: userName,
            date: new Date().toISOString().split("T")[0],
            checkInTime,
        };
    
        try {
            console.log("Submitting attendance data:", attendanceData);
            const response = await attendanceApi.createAttendance(attendanceData, token);
            console.log("Attendance check-in successful:", response);
        } catch (error) {
            console.error("Error during check-in:", error);
        }
    
        setOpenCheckInModal(false);
    };    

    const handleCheckOut = async () => {
        const userId = localStorage.getItem("userId");
        if (!userId) {
            console.error("User ID not found in localStorage");
            return;
        }

        const checkOutTime = getQatarTime();
        const todayDate = new Date().toISOString().split("T")[0]; // Today's date in YYYY-MM-DD format

        try {
            const attendanceRecords = await attendanceApi.getAttendanceByEmployeeId(userId);

            const todayAttendance = attendanceRecords.find(record =>
                record.date.split("T")[0] === todayDate
            );

            if (!todayAttendance) {
                console.error("No check-in record found for today.");
                return;
            }

            console.log("todayAttendance");
            console.log(todayAttendance.employeeName);

            const updatedAttendanceData = {
                ...todayAttendance,
                checkOutTime, // Store only time
            };

            const response = await attendanceApi.updateAttendance(todayAttendance._id, updatedAttendanceData);
            console.log("Attendance check-out successful:", response);

            setOpenCheckOutModal(false);
        } catch (error) {
            console.error("Error during check-out:", error);
        }
    };

    return (
        <div className="flex flex-wrap justify-center gap-32">
            <div className="flex items-center mx-2">
                <form className="w-[400px] max-w-lg flex flex-col gap-6 bg-white p-8 rounded-lg mt-10">
                    <p className="mb-2 mt-0 text-md font-bold">Mark Your Attendance</p>
                    <Button className="mt-4 text-white" onClick={() => setOpenCheckInModal(true)}>
                        Check In
                    </Button>
                    <Button className="mt-4 text-white" onClick={() => setOpenCheckOutModal(true)}>
                        Check Out
                    </Button>
                </form>
            </div>

            {/* Modal for Check In */}
            <Modal show={openCheckInModal} size="md" onClose={() => setOpenCheckInModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <h3 className="mb-10 text-xl font-normal text-gray-700 dark:text-gray-400">
                            Confirm Your Check In 🫰🫰
                        </h3>
                        <div className="flex justify-center gap-4 mb-4">
                            <Button onClick={handleCheckIn}>Confirm</Button>
                            <Button color="gray" onClick={() => setOpenCheckInModal(false)}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Modal for Check Out */}
            <Modal show={openCheckOutModal} size="md" onClose={() => setOpenCheckOutModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <h3 className="mb-10 text-xl font-normal text-gray-700 dark:text-gray-400">
                            Confirm Your Check Out 👋👋
                        </h3>
                        <div className="flex justify-center gap-4 mb-4">
                            <Button onClick={handleCheckOut}>Confirm</Button>
                            <Button color="gray" onClick={() => setOpenCheckOutModal(false)}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};
