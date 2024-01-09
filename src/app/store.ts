import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import { messageApi } from './messageApi';
//import loginReduser from './redusers/loginSlice';
//import { loginApi } from './redusers/loginApi'



export const store = configureStore({
  reducer: {
    [messageApi.reducerPath]: messageApi.reducer,
    
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      messageApi.middleware,
      )
  ,

})
setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch