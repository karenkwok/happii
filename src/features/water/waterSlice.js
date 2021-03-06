import { createSlice } from '@reduxjs/toolkit';

export const waterSlice = createSlice({
  name: 'water',
  initialState: {
    dailyWater: 0,
    waterTrends: [],
    waterStreak: 0,
    waterGoal: 0,
  },
  reducers: {
    setDailyWater: (state, action) => {
      state.dailyWater = action.payload;
    },
    setWaterTrends: (state, action) => {
      state.waterTrends = action.payload;
    },
    resetWaterState: (state, action) => {
      // figure out better way to reset state
      state.dailyWater = 0;
      state.waterTrends = [];
    },
    setWaterStreak: (state, action) => {
      state.waterStreak = action.payload;
    },
    setWaterGoal: (state, action) => {
      state.waterGoal = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setDailyWater, setWaterTrends, resetWaterState, setWaterStreak, setWaterGoal } = waterSlice.actions;

export default waterSlice.reducer;
