import { configureStore } from '@reduxjs/toolkit'

import AuthSlice from '../features/auth-slice.tsx/authSlice'
import {localStorageMiddleware} from '../features/auth-slice.tsx/authSlice'
import {reHydrateStore} from '../features/auth-slice.tsx/authSlice'

export default configureStore({
  reducer: {
    auth: AuthSlice
  },
  preloadedState: reHydrateStore(),
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(localStorageMiddleware)
})

