import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "./Slices/genresSlice";
import filmsSlice from "./Slices/filmsSlice";

const store = configureStore({
  reducer: {
    genresData: genresSlice,
    filmsData: filmsSlice,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
