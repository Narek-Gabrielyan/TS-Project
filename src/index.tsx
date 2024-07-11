import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store/store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);


// TERMINAL
// npx create-react-app project_lesson_30 --template typescript
// npm i axios react-router-dom
// npm install @reduxjs/toolkit react-redux
// npm i classnames

// FilmsApi

// const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"

// 'https://api.themoviedb.org/3' <= baseURL

// getGenres => /genre/movie/list?api_key=${apiKey}&language=en-US
// MoviePage => discover/movie?api_key=${apiKey}&language=en-US&page=${pageCount}
// GETonemovie => /movie/${id}?api_key=${apiKey}&language=en-US
// getSerch => search/movie?api_key=${apiKey}&query=${text}`
// getGenreMovie => /discover/movie?api_key=${apiKey}&language=en-US&with_genres=${genreId}&page=${1}