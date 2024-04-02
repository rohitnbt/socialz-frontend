import { configureStore } from '@reduxjs/toolkit'
import postReducer from './postSlice'
import userReducer from './userSlice'
import storyReducer from './storySlice'

export const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
    story: storyReducer
  },
})