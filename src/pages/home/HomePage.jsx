import React from "react";
import { Card } from "flowbite-react";

export const HomePage = () => {
    return (
        <div>
            <div className="flex flex-wrap justify-center gap-16 mt-5">
                <Card className="w-80 flex flex-col items-center">
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white ml-[-60px]">
                        2024 - 01 - 15
                    </h5>
                    <div className="flex justify-center items-center my-5">
                        <button
                            className="text-xl w-32 h-32 bg-yellow-300 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-200 focus:outline-none"
                        >
                            Check in
                        </button>
                    </div>
                    <h5 className="text-lg tracking-tight text-gray-900 dark:text-white">
                        Check In: 08:00 AM
                    </h5>
                </Card>

                <Card className="w-80 flex flex-col items-center">
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white ml-[-60px]">
                        2024 - 01 - 15
                    </h5>
                    <div className="flex justify-center items-center my-5">
                        <button
                            className="text-xl w-32 h-32 bg-yellow-300 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-200 focus:outline-none"
                        >
                            Check Out
                        </button>
                    </div>
                    <h5 className="text-lg tracking-tight text-gray-900 dark:text-white">
                        Check Out: 04:00 PM
                    </h5>
                </Card>
            </div>


            <div className="flex flex-wrap justify-center gap-16 mt-16">
                <Card className="w-[450px] flex flex-col items-center">
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white ml-[-110px]">
                        Last 7 Days Attendance
                    </h5>
                    <div className="flex justify-center items-center my-5">
                        There will be a graph here
                    </div>
                </Card>

                <Card className="w-[450px] flex flex-col items-center">
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white ml-[-110px]">
                        Remaining Leaves for 2025
                    </h5>
                    <div className="flex justify-center items-center my-5">
                        There Will be a graph here
                    </div>
                </Card>
            </div>

            <div className="flex flex-wrap justify-center gap-16 mt-16 mb-10">
                <Card className="w-80 flex flex-col items-center">
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white ml-[-40px]">
                        Your Shift Tomorrow
                    </h5>
                    <div className="flex justify-center items-center my-5 flex flex-col">
                        <p>Villagio</p>
                        <p>08.00 AM to 04.00 PM</p>
                    </div>
                </Card>

                <Card className="w-80 flex flex-col items-center">
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white ml-[-40px]">
                        Your Next Event
                    </h5>
                    <div className="flex justify-center items-center my-5 flex flex-col">
                        <p>Hotel Regis</p>
                        <p>2024 - 01 - 15</p>
                        <p>06.00 PM to 09.00 PM</p>
                    </div>
                </Card>

                <Card className="w-80 flex flex-col items-center">
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white ml-[-40px]">
                        Your Next Training
                    </h5>
                    <div className="flex justify-center items-center my-5 flex flex-col">
                        <p>Al Wakra Branch</p>
                        <p>9.00 AM to 11.00 PM</p>
                        <p>Barista Training</p>
                        <p>Trainer - Ver</p>
                    </div>
                </Card>
            </div>
        </div>
    );
};
