import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { MovieAPI } from "../../API/api";
import { AxiosResponse } from "axios";

export type GenresDataType = {
    id: number,
    name: string,
}

type FilmsType = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type GenresStateType = {
  genres: Array<GenresDataType>;

  total_pages: number;
  genresFilms: Array<FilmsType>;
  page: number | string | undefined;
  total_count: number;
};


// // <async return, async arg, 2 arg type>
const fetchGenres = createAsyncThunk <Array <GenresDataType> > (
    "fetchGenres",
    async () => {
        const response: AxiosResponse <GenresStateType> =
          await MovieAPI.getGenres();       
        return response.data.genres
    }
)

const fetchGenresFilms = createAsyncThunk<any, any, any>(
  "fetchGenresFilms",
  async ({ page, id }, { dispatch }) => {
    const response: AxiosResponse<any> = await MovieAPI.getGenresFilms(
      page,
      id
    );  
    dispatch(pageChange(response.data.total_pages));
    return response.data.results;
  }
);

const initialState: GenresStateType = {
  genres: [],

  total_pages: 1,
  genresFilms: [],
  page: 1,
  total_count: 20,
};

const genresSlice = createSlice({
  name: "genresSlice",
  initialState,
  reducers: {
    pageChange(state, action) {
      state.total_pages = action.payload;
    },
    changeList(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchGenres.fulfilled,
      (state, action: PayloadAction<Array<GenresDataType>>) => {
        state.genres = action.payload;
      }
    );
    builder.addCase(fetchGenresFilms.fulfilled, (state, action) => {
      state.genresFilms = action.payload;
    });
  },
});

export const { pageChange, changeList } = genresSlice.actions;
export { fetchGenres, fetchGenresFilms };
export default genresSlice.reducer
