import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../../store/slices/favorite';
import './Faviorites.css'

export default function Favorites() {
  const [data, setData] = useState([]);
  const { updatedItems } = useSelector((state) => state.favorite);

  const dispatch = useDispatch();

  function removeItem(id) {
    const updatedData = updatedItems.filter((mov) => mov.id !== id);
    setData(updatedData);
    dispatch(setItems(updatedData));
  }

  useEffect(() => {

    setData(updatedItems);
  }, [updatedItems]);

  return (
    <>
      <h1 className="text-center d-flex align-items-center justify-content-center">favorite Movies</h1>
      <div className="container">
        <div className="row">
          {data?.map((movie) => {
            if (movie !== undefined) {
              return (
                <div key={movie.id} className="col-md-2 border p-1">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="img-fluid "
                    alt="cover"
                  />
                  <h6 className="text-dark">Title : {movie.title}</h6>
                  <p className="">Popularity: {movie.popularity}</p>
                  <p className="text-dark">Voter Average: {movie.vote_average}</p>
                  <div className="">
                    <button className="col-12 btn btn-danger" onClick={() => removeItem(movie.id)}>Remove Item</button>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}
