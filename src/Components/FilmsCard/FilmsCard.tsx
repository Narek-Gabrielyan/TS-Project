import React from 'react'
import { FilmsDataType } from '../../Store/Slices/filmsSlice';
import "./FilmsCard.css";

type FilmsCardPropsType = {
  film: FilmsDataType
};

export const imgUrl = "https://image.tmdb.org/t/p/w500/";

export default function FilmsCard({film}: FilmsCardPropsType) {
  return (
    <div className='filmCard'>
      <h3>{film.title}</h3>
      <img src={imgUrl.concat(film.poster_path)} alt="IMG Films" />
    </div>
  );
}