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
import { AdminAttendancePage } from "./pages/attendance/AdminAttendancePage";
import { AdminLeavePage } from "./pages/leaves/AdminLeavePage";
import { AdminNotificationPage } from "./pages/notifications/AdminNotificationPage";
import { AdminPayrollPage } from "./pages/salary/AdminPayrollPage";
import { AdminRolePage } from "./pages/roles/AdminRolePage";
import { AdminShiftsPage } from "./pages/shiftSchedule/AdminShiftsPage";
import { AdminShiftSchedulesPage } from "./pages/shiftSchedule/AdminShiftSchedulesPage";
import { AdminTrainingsPage } from "./pages/trainings/AdminTrainingsPage";
import { RecruitmentPage } from "./pages/recruitment/RecruitmentPage";
import { SignIn } from "./pages/user/SignIn";
import { UserProfile } from "./pages/user/UserProfile";
import ProtectedRoute from "./ProtectedRoute";
import { useNavBar } from "./NavBarContext";

function App() {
  const { navBarType } = useNavBar();

  return (
    <Router>
      {navBarType == "admin" ? <AdminNavBar /> : <CommonNavBar />}
      <Routes>
        {/* Public Route */}
        <Route path="/signin" element={<SignIn />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/attendance"
          element={
            <ProtectedRoute>
              <AttendancePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leave"
          element={
            <ProtectedRoute>
              <LeavesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payroll"
          element={
            <ProtectedRoute>
              <SalaryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/schedule"
          element={
            <ProtectedRoute>
              <ShiftSchedulePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/training"
          element={
            <ProtectedRoute>
              <TrainingsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminHomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/leave"
          element={
            <ProtectedRoute>
              <AdminLeavePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/notification"
          element={
            <ProtectedRoute>
              <AdminNotificationPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/role"
          element={
            <ProtectedRoute>
              <AdminRolePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userProfile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/attendance"
          element={
            <ProtectedRoute>
              <AdminAttendancePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/payroll"
          element={
            <ProtectedRoute>
              <AdminPayrollPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/shifts"
          element={
            <ProtectedRoute>
              <AdminShiftsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/shiftschedules"
          element={
            <ProtectedRoute>
              <AdminShiftSchedulesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/training"
          element={
            <ProtectedRoute>
              <AdminTrainingsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/recruitment"
          element={
            <ProtectedRoute>
              <RecruitmentPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
