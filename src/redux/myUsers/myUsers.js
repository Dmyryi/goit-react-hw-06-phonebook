import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'myUsers',
  initialState: {
    name: '',
    number: '',
  },
  reducers: {
    nameUsers: (state, action) => {
      state.name = action.payload;
    },
    numberUsers: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const { nameUsers, numberUsers } = userSlice.actions;
