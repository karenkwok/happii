import { createSlice } from '@reduxjs/toolkit';

export const waterSlice = createSlice({
  name: 'water',
  initialState: {
    dailyWater: 0,
    waterTrends: [],
  },
  reducers: {
    setDailyWater: (state, action) => {
      state.dailyWater = action.payload;
    },
    setWaterTrends: (state, action) => {
      state.waterTrends = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDailyWater, setWaterTrends } = waterSlice.actions;

export default waterSlice.reducer;
