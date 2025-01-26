import React from "react";
import { Card } from "flowbite-react";
import { Button, Label, Select, Datepicker } from "flowbite-react";

export const HomePage = () => {
    return (
        <div className="flex flex-wrap justify-center gap-32">
            <div className="flex items-center mx-2">
                <form className="w-[400px] max-w-lg flex flex-col gap-6 bg-white p-8 rounded-lg mt-10 ">
                    <p className="mb-2 mt-0 text-md font-bold">Mark Your Attendance</p>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="attendanceDate" value="Select the date" />
                        </div>
                        <Datepicker />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="starttime" value="Select start time" />
                        </div>
                        <Select id="starttime" required>
                            <option>08.00 AM</option>
                            <option>09.00 AM</option>
                            <option>10.00 AM</option>
                            <option>11.00 AM</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="endtime" value="Select end time" />
                        </div>
                        <Select id="endtime" required>
                            <option>08.00 AM</option>
                            <option>09.00 AM</option>
                            <option>10.00 AM</option>
                            <option>11.00 AM</option>
                        </Select>
                    </div>
                    <Button type="submit" className="mt-4 text-white">Submit</Button>
                </form>
            </div>


            <div className="flex items-center justify-center mx-2">
                <form className="w-[400px] max-w-lg flex flex-col gap-6 p-0 rounded-lg mb-10 bg-white text-gray-500 text-sm pl-4 pt-4 ">
                    <p className="mt-2 text-md">
                        Your Shift Tomorrow
                        <li className="ml-5 mt-2">08.00 AM - 04.00 PM at Villagio Mall</li>
                    </p>
                    <p className="mb-2 mt-2 text-md">
                        Your next Event
                        <li className="ml-5 mt-2">2024-02-15: 06.00 PM at Hotel Regis</li>
                    </p>
                    <p className="mb-2 mt-2 text-md">
                        Your next Training
                        <li className="ml-5 mt-2">2024-02-15: 11.00 AM at Mashaf Branch</li>
                    </p>
                </form>
            </div>
        </div>
    );
};
