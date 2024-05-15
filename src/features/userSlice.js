import { createSlice } from '@reduxjs/toolkit';
import { UsersData } from './fakedata';
export const userSlice = createSlice({
  name: 'hello',
  initialState: { data: UsersData },
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
    },

    deleteUser: (state, action) => {
      state.data = state.data.filter((user) => user.id !== action.payload.id);
    },

    updateUsername: (state, action) => {
      state.data.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
      });
    },
  },
});

export const { addUser, deleteUser, updateUsername } = userSlice.actions;
export default userSlice.reducer;