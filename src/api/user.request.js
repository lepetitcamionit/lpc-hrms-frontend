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

// const softDeleteUser = async (userid) => {
//   try {
//     const response = await apiInstance.patch(`/user/soft-delete/${userid}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error updating user data:", error);
//     throw error;
//   }
// };

const userApi = {
  getUserById,
  getAllUsers,
  updateUser,
//   softDeleteUser,
};

export default userApi;