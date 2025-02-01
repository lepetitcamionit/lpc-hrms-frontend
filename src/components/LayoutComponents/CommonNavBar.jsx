"use client";
import { useEffect, useState } from "react";
import { Navbar } from "flowbite-react";
import { IoNotificationsSharp, IoPerson, IoMenu, IoClose } from "react-icons/io5";
import { Drawer, Sidebar } from "flowbite-react";
import { useNavigate } from 'react-router-dom';
import { Tooltip } from "flowbite-react";
import { useDispatch } from "react-redux";

function CommonNavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const goHome = () => {
    navigate('/');
    handleClose();
  }

  const goToAttendance = () => {
    navigate('/attendance');
    handleClose();
  }

  const goToLeaves = () => {
    navigate('/leave');
    handleClose();
  }

  const goToSalarySlips = () => {
    navigate('/payroll');
    handleClose();
  }

  const goToShiftSchedule = () => {
    navigate('/schedule');
    handleClose();
  }

  const goToTraining = () => {
    navigate('/training');
    handleClose();
  }

  const goToProfileOrSignIn = () => {
    const token = localStorage.getItem("authToken");
    console.log("CommonNavBar ", token);
    if (token) {
      navigate('/userProfile');
    } else {
      navigate('/signin');
    }
  };

  return (
    <>
      <Drawer open={isOpen} onClose={handleClose} style={{ backgroundColor: "#004561" }}>
        <div className="flex items-center my-4">
          <IoClose style={{ marginLeft: "240px", cursor: "pointer" }} onClick={handleClose} className="text-white h-5 w-5"/>
        </div>
        <Drawer.Items>
          <Sidebar aria-label="Sidebar with multi-level dropdown example" className="[&>div]:bg-transparent [&>div]:p-0">
            <div className="flex h-full flex-col justify-between">
              <div>
                <Sidebar.Items>
                  <div className="text-[16px] ml-6">
                    <div className="flex items-center mb-0 mt-0 mr-10 cursor-pointer rounded-md px-4 py-1 transition duration-300 hover:bg-[#21708B] text-white" onClick={goHome}>
                      Home
                    </div>
                    <div className="flex items-center my-4 mr-10 cursor-pointer rounded-md px-4 py-1 transition duration-300 hover:bg-[#21708B] text-white" onClick={goToAttendance}>
                      Attendance
                    </div>
                    <div className="flex items-center my-4 mr-10 cursor-pointer rounded-md px-4 py-1 transition duration-300 hover:bg-[#21708B] text-white" onClick={goToLeaves}>
                      Leaves
                    </div>
                    <div className="flex items-center my-4 mr-10 cursor-pointer rounded-md px-4 py-1 transition duration-300 hover:bg-[#21708B] text-white" onClick={goToSalarySlips}>
                      Salary Slips
                    </div>
                    <div className="flex items-center my-4 mr-10 cursor-pointer rounded-md px-4 py-1 transition duration-300 hover:bg-[#21708B] text-white" onClick={goToShiftSchedule}>
                      Shift Schedule
                    </div>
                    <div className="flex items-center my-4 mr-10 cursor-pointer rounded-md px-4 py-1 transition duration-300 hover:bg-[#21708B] text-white" onClick={goToTraining}>
                      Trainings
                    </div>
                  </div>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>

      <Navbar fluid rounded style={{
        backgroundColor: '#004561',
        position: 'sticky',
        top: 0,
        boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)',
        zIndex: 10,
      }}>
        <Navbar.Brand>
          <Tooltip content="Menu" placement="bottom" className="text-xs">
            <IoMenu className="mr-3 ml-3 h-6 w-6 text-white" style={{ cursor: "pointer" }} onClick={() => setIsOpen(true)} />
          </Tooltip>
          <img src="/assets/logo_white.png" className="mr-3 ml-5 h-5 sm:h-6 cursor-pointer" alt="Le Petit Camion Logo" onClick={goHome}/>
        </Navbar.Brand>
        <div className="flex md:order-3" style={{ marginTop: "10px", marginBottom: "10px", marginLeft: "14px" }}>
          <Tooltip content="Notifications" placement="bottom" className="text-xs">
            <div className="relative cursor-pointer">
              <IoNotificationsSharp className="mr-3 ml-5 h-5 w-5 mt-1 text-white" />
            </div>
          </Tooltip>
          <Tooltip content="User Profile" placement="bottom" className="text-xs">
            <IoPerson className="mr-3 ml-3 h-5 w-5 mt-1 cursor-pointer text-white" onClick={goToProfileOrSignIn} />
          </Tooltip>
        </div>
      </Navbar>
    </>
  );
}

export default CommonNavBar;
