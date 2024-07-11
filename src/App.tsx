import React, { useEffect } from 'react';
import Header from './Components/Header/Header';
import { useAppDispatch } from './Store/hooks';
// import { fetchFilms } from './Store/Slices/filmsSlice';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/HomePage';
import GenresPage from './Pages/GenresPage/GenresPage';

export default function App() {
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(fetchFilms())
  // }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genres/:id/:name" element={<GenresPage />} />
      </Routes>
    </div>
  );
}
