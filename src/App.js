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
import { UserProfile } from "./pages/user/UserProfile";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <CommonNavBar />
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
        </Routes>
    </Router>
  );
}

export default App;
