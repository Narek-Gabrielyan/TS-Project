import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { changeList, fetchGenresFilms } from "../../Store/Slices/genresSlice";
import Pagination from "../../Components/Pagination/Pagination";
import "./GenresPage.css";

// //////////////////////////
const imgUrl = "https://image.tmdb.org/t/p/w500/";
type PropsType = {
  film: { title: string; poster_path: string };
};
const FilmsCard = ({ film }: PropsType) => {
  return (
    <div style={{ width: 280 + "px" }}>
      <img src={imgUrl + film.poster_path} width={100 + "%"} />
      <h3>{film.title}</h3>
    </div>
  );
};
// //////////////////////////

export default function GenresPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { genresFilms, page, total_count, total_pages } = useAppSelector(
    (state) => state.genresData
  );
  const pagesCount: number = Math.ceil(total_pages / 20);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(fetchGenresFilms({ page, id }));
    dispatch(changeList(currentPage));
  }, [page, id, currentPage]);

  return (
    <div style={{ margin: "10px 0" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {genresFilms.map((film) => {
          return (
            <div key={film.id}>
              <FilmsCard film={film} />
            </div>
          );
        })}
      </div>

      <Pagination
        currentPage={currentPage}
        lastPage={pagesCount}
        maxLength={7}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
