import React, { useEffect, useMemo, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../Store/hooks';
import FilmsCard from '../../Components/FilmsCard/FilmsCard';
import "./HomePage.css";
import Pagination from '../../Components/Pagination/Pagination';
import { fetchFilms } from '../../Store/Slices/filmsSlice';
import { changePage } from '../../Store/Slices/filmsSlice';

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();

  const { films, page, total_pages, total_results } = useAppSelector(
    (state) => state.filmsData
  );
  
  const pagesCount: number = Math.ceil(total_results / 20);

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"})
    dispatch(changePage(currentPage)) && dispatch(fetchFilms(currentPage));
  }, [currentPage]);

  return (
    <div>
      <div className="home-block">
        {films.map((film) => {
          return <FilmsCard key={film.id} film={film} />;
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