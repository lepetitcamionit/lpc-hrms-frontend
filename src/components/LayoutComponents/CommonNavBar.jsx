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
      <Drawer open={isOpen} onClose={handleClose} style={{ backgroundColor: "#F8EC98" }}>
        <div className="flex items-center my-7 text-2xl">
          <IoClose style={{ marginLeft: "240px", cursor: "pointer" }} onClick={handleClose} />
        </div>
        <Drawer.Items>
          <Sidebar aria-label="Sidebar with multi-level dropdown example" className="[&>div]:bg-transparent [&>div]:p-0">
            <div className="flex h-full flex-col justify-between">
              <div>
                <Sidebar.Items>
                  <div className="text-xl ml-8">
                    <div className="flex items-center mb-0 mt-0 cursor-pointer rounded-md px-4 py-2 transition duration-300 hover:bg-yellow-200" onClick={goHome}>
                      Home
                    </div>
                    <div className="flex items-center my-4 cursor-pointer rounded-md px-4 py-2 transition duration-300 hover:bg-yellow-200" >
                      Attendance
                    </div>
                    <div className="flex items-center my-4 cursor-pointer rounded-md px-4 py-2 transition duration-300 hover:bg-yellow-200" >
                      Leaves
                    </div>
                    <div className="flex items-center my-4 cursor-pointer rounded-md px-4 py-2 transition duration-300 hover:bg-yellow-200">
                      Salary Slips
                    </div>
                    <div className="flex items-center my-4 cursor-pointer rounded-md px-4 py-2 transition duration-300 hover:bg-yellow-200" >
                      Shift Schedule
                    </div>
                    <div className="flex items-center my-4 cursor-pointer rounded-md px-4 py-2 transition duration-300 hover:bg-yellow-200">
                      Trainings
                    </div>
                  </div>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>

      <Navbar fluid rounded style={{ backgroundColor: '#F8EC98' }}>
        <Navbar.Brand style={{ marginTop: "10px", marginBottom: "10px" }}>
          <Tooltip content="Menu" placement="bottom" className="text-xs">
            <IoMenu className="mr-3 ml-3 h-6 w-6" style={{ cursor: "pointer" }} onClick={() => setIsOpen(true)} />
          </Tooltip>
          <img src="/assets/logo2.png" className="mr-3 ml-5 h-6 sm:h-6" alt="Le Petit Camion Logo" />
        </Navbar.Brand>
        <div className="flex md:order-3" style={{ marginTop: "10px", marginBottom: "10px", marginLeft: "14px" }}>
          <Tooltip content="Notifications" placement="bottom" className="text-xs">
            <div className="relative cursor-pointer">
              <IoNotificationsSharp className="mr-3 ml-5 h-7 w-7 mt-1" />
            </div>
          </Tooltip>
          <Tooltip content="User Profile" placement="bottom" className="text-xs">
            <IoPerson className="mr-3 ml-3 h-6 w-6 mt-1 cursor-pointer" onClick={goToProfileOrSignIn} />
          </Tooltip>
        </div>
      </Navbar>
    </>
  );
}

export default CommonNavBar;
