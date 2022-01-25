import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: undefined,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetAuthState: (state, action) => {
      // figure out better way to reset state
      state.user = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, resetAuthState } = authSlice.actions;

export default authSlice.reducer;
