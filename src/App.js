import CommonNavBar from "./components/LayoutComponents/CommonNavBar";
import AdminNavBar from "./components/LayoutComponents/AdminNavBar";
import { HomePage } from "./pages/home/HomePage";
import { AttendancePage } from "./pages/attendance/AttendancePage";
import { LeavesPage } from "./pages/leaves/LeavesPage";
import { SalaryPage } from "./pages/salary/SalaryPage";
import { ShiftSchedulePage } from "./pages/shiftSchedule/ShiftSchedulePage";
import { TrainingsPage } from "./pages/trainings/TrainingsPage";

function App() {
  return (
    <div>
      <CommonNavBar />
      <br />
      <HomePage />
    </div>
  );
}

export default App;
