import apiInstance from "./apiInstance";

const getAttendanceByEmployeeId = async (id) => {
  try {
    const response = await apiInstance.get(`/attendance/employee/${id}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("API Error Response:", error.response.data);
      throw new Error(
        error.response.data.message || "Error fetching user data."
      );
    } else {
      console.error("Unknown error:", error.message);
      throw new Error("An unknown error occurred.");
    }
  }
};

const getAllAttendance = async () => {
  try {
    const response = await apiInstance.get(`/attendance`);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("API Error Response:", error.response.data);
      throw new Error(
        error.response.data.message || "Error fetching user data."
      );
    } else {
      console.error("Unknown error:", error.message);
      throw new Error("An unknown error occurred.");
    }
  }
};

const createAttendance = async (attendanceData) => {
  console.log("createAttendance 01");
  console.log(attendanceData);

  try {
    console.log("createAttendance 02");
    const response = await apiInstance.post(`/attendance`, attendanceData);
    console.log("createAttendance 03");
    console.log(response);

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("API Error Response:", error.response.data);
      throw new Error(
        error.response.data.message || "Error fetching user data."
      );
    } else {
      console.error("Unknown error:", error.message);
      throw new Error("An unknown error occurred.");
    }
  }
};

const updateAttendance = async (id, userData) => {
  try {
    const response = await apiInstance.patch(`/attendance/${id}`, userData);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("API Error Response:", error.response.data);
      throw new Error(
        error.response.data.message || "Error fetching user data."
      );
    } else {
      console.error("Unknown error:", error.message);
      throw new Error("An unknown error occurred.");
    }
  }
};

const attendanceApi = {
  getAttendanceByEmployeeId,
  getAllAttendance,
  createAttendance,
  updateAttendance,
};

export default attendanceApi;
