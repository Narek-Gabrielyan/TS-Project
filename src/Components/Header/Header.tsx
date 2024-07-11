import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { fetchGenres } from "../../Store/Slices/genresSlice";
import GenresBTN from "./GenresBTN/GenresBTN";
import { log } from "console";
import "./Header.css";

export default function Header() {
  const dispatch = useAppDispatch();

  const { genres } = useAppSelector((state) => state.genresData);

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return (
    <header>
      <div>
        <h4>Logo</h4>
      </div>
      <nav>
        {genres.map((genre) => {
          return <GenresBTN key={genre.id} genre={genre} />;
        })}
      </nav>
      <div>
        <input />
      </div>
    </header>
  );
}
