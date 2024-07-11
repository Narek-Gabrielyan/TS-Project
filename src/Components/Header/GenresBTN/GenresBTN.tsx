import React from 'react'
import { GenresDataType } from '../../../Store/Slices/genresSlice';
import "./GenresBTN.css";
import { NavLink } from 'react-router-dom';

type GenresBTNPropsType = {
  genre: GenresDataType;
};

export default function GenresBTN({genre}: GenresBTNPropsType) {
  return <button style={{marginLeft: "4px"}}>{
    <NavLink to={`/genres/${genre.id}/${genre.name}`}>
      {genre.name}
    </NavLink>
  }</button>;
}
