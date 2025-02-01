import apiInstance from "./apiInstance";

const getUserById = async (id) => {
  try {
    const response = await apiInstance.get(`/user/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const response = await apiInstance.get(`/user/admin`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

const updateUser = async (userData, userid) => {
  try {
    const response = await apiInstance.patch(`/user/${userid}`, userData);
    return response.data;
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error;
  }
};

const createUser = async (userData) => {
  try {
    const response = await apiInstance.post(`/user`, userData);
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

const softDeleteUser = async (userid) => {
  try {
    const response = await apiInstance.patch(`/user/soft-delete/${userid}`);
    return response.data;
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error;
  }
};

const userApi = {
  getUserById,
  getAllUsers,
  updateUser,
  createUser,
  softDeleteUser,
};

export default userApi;