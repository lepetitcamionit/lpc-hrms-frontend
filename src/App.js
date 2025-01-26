import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CommonNavBar from "./components/LayoutComponents/CommonNavBar";
import AdminNavBar from "./components/LayoutComponents/AdminNavBar";
import { HomePage } from "./pages/home/HomePage";
import { AttendancePage } from "./pages/attendance/AttendancePage";
import { LeavesPage } from "./pages/leaves/LeavesPage";
import { SalaryPage } from "./pages/salary/SalaryPage";
import { ShiftSchedulePage } from "./pages/shiftSchedule/ShiftSchedulePage";
import { TrainingsPage } from "./pages/trainings/TrainingsPage";
import { AdminHomePage } from "./pages/home/AdminHomePage";
import { AdminLeavePage } from "./pages/leaves/AdminLeavePage";
import { AdminNotificationPage } from "./pages/notifications/AdminNotificationPage";
import { AdminRolePage } from "./pages/roles/AdminRolePage";
import { SignIn } from "./pages/user/SignIn";

function App() {
  return (
    <Router>
      <CommonNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/leave" element={<LeavesPage />} />
        <Route path="/payroll" element={<SalaryPage />} />
        <Route path="/schedule" element={<ShiftSchedulePage />} />
        <Route path="/training" element={<TrainingsPage />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/admin/leave" element={<AdminLeavePage />} />
        <Route path="/admin/notification" element={<AdminNotificationPage />} />
        <Route path="/admin/role" element={<AdminRolePage />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
