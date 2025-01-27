import apiInstance from "./apiInstance";

const getUserById = async (id) => {
  // if (!token) {
  //   throw new Error("User is not authenticated. Please log in.");
  // }

  try {
    const response = await apiInstance.get(`/user/${id}`, {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      // withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const token = localStorage.getItem("authToken");
    if (token) {
      document.cookie = `token=${token}; path=/`;
    }
    const response = await apiInstance.get(`/user/admin`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

const updateUser = async (userData, userid, token) => {
  if (!token) {
    throw new Error("User is not authenticated. Please log in.");
  }

  try {
    const response = await apiInstance.patch(`/user/${userid}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error;
  }
};

// const softDeleteUser = async (userid, token) => {
//   if (!token) {
//     throw new Error("User is not authenticated. Please log in.");
//   }

//   try {
//     const response = await apiInstance.patch(`/user/soft-delete/${userid}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       withCredentials: true,
//     });

//     localStorage.removeItem("authToken");
//     localStorage.removeItem("userId");

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