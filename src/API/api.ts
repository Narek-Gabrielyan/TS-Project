import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const apiKey: string = "f36f23edf6e10fd2ddcf939916b1f67a";

// MoviePage => discover/movie?api_key=${apiKey}&language=en-US&page=${pageCount}

export const MovieAPI = {
  getGenres() {
    return instance.get(`/genre/movie/list?api_key=${apiKey}&language=en-US`);
  },
  getFilmsByPage(pageCount: number = 50) {
    return instance.get(
      `/discover/movie?api_key=${apiKey}&language=en-US&page=${pageCount}`
    );
  },
  getGenresFilms(page: any, id: any) {
    return instance.get(
      `/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${id}&page=${page}`
    );
  },
};
