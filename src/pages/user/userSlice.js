import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      console.log("Adding user:", action.payload);
      state.users.push(action.payload);
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { addUser, setUsers } = userSlice.actions;

export default userSlice.reducer;