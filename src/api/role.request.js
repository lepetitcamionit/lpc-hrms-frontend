import apiInstance from "./apiInstance";

const getRoleById = async (id) => {
  try {
    const response = await apiInstance.get(`/role/${id}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("API Error Response:", error.response.data);
      throw new Error(error.response.data.message || "Error fetching user data.");
    } else {
      console.error("Unknown error:", error.message);
      throw new Error("An unknown error occurred.");
    }
  }
};

const getAllRoles = async () => {
  try {
    const response = await apiInstance.get(`/role`);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("API Error Response:", error.response.data);
      throw new Error(error.response.data.message || "Error fetching user data.");
    } else {
      console.error("Unknown error:", error.message);
      throw new Error("An unknown error occurred.");
    }
  }
};

const roleApi = {
  getRoleById,
  getAllRoles,
};

export default roleApi;
