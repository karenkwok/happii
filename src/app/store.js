import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice';
import waterReducer from '../features/water/waterSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    water: waterReducer,
  },
});
