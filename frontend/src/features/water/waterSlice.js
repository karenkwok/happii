import { createSlice } from '@reduxjs/toolkit';

export const waterSlice = createSlice({
  name: 'water',
  initialState: {
    dailyWater: 0,
  },
  reducers: {
    setDailyWater: (state, action) => {
      state.dailyWater = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDailyWater } = waterSlice.actions;

export default waterSlice.reducer;
