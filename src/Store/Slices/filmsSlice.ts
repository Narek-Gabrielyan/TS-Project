import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MovieAPI } from "../../API/api";
import { AxiosResponse } from "axios";

export type FilmsDataType = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type FilmsStateType = {
  films: Array<FilmsDataType>;
  page: number;
  total_pages: number;
  total_results: number;
};

type FilmsStateTypeBYAxios = {
  results: Array<FilmsDataType>;
  page: number;
  total_pages: number;
  total_results: number;
};

const fetchFilms = createAsyncThunk<Array<FilmsDataType>, number>(
  "fetchFilms",
  async (page, { dispatch }) => {
    const response: AxiosResponse<FilmsStateTypeBYAxios> =
      await MovieAPI.getFilmsByPage(page);
    dispatch(
      total({
        totalPages: response.data.total_pages,
        totalResults: response.data.total_results,
      })
    );

    return response.data.results;
  }
);

const initialState: FilmsStateType = {
  films: [],
  page: 1,
  total_pages: 0, // 44988
  total_results: 0, // 899758
};

const filmsSlice = createSlice({
  name: "filmsSlice",
  initialState,
  reducers: {
    total(state, action) {
      state.total_pages = action.payload.totalPages;
      state.total_results = action.payload.totalResults;
    },
    changePage(state, action) {
      state.page = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload;
    });
  },
});


export const { total, changePage } = filmsSlice.actions;
export { fetchFilms };
export default filmsSlice.reducer;
