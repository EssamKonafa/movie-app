import React, { useEffect, useState } from "react";
import instance from "../../axiosConfig/instance";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, changeFavorite } from "../../store/slices/favorite";
import { moviesAction } from "../../store/slices/movies";

export default function Movies() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { addfavorite } = useSelector((state) => state.favorite);

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    async function getMovies() {
        try {
            const data = await instance.get(`3/movie/popular?page=${page}`);
            setMovies(data?.data.results);
        } catch (err) {
            console.error(err);
        }
    }

    function addtoFavorite(movie) {
            dispatch(addFavorite(movie));
            dispatch(changeFavorite(true));        
    }

    useEffect(() => {
        dispatch(moviesAction());
        getMovies();
    }, [dispatch, page]);

    return (
        <div className="container bg-with">
            <h1 className="text-center d-flex align-items-center justify-content-center">Movies</h1>
            <div className="row">
                {movies?.map((movie) => (
                    <div
                        key={movie.id}
                        className="col-md-3 border p-2"
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            className="img-fluid"
                            alt=""
                        />
                        <h5 className="text-dark"> {movie.title}</h5>
                        <p>Popularity: {movie.popularity}</p>
                        <p className="text-dark">Voter Average: {movie.vote_average}</p>
                        {addfavorite.includes(movie) ? (
                            <button
                                className="col-12 btn btn-success"
                            >added successfully</button>
                        ) : (
                            <button
                                className="col-12 btn btn-primary"
                                onClick={() => addtoFavorite(movie)}
                            >add to favorites</button>
                            
                        )}
                        <button
                        className="col-12 btn btn-info"
                        onClick={() => navigate(`/movieDetails/${movie.id}`)}>
                            view details
                        </button>
                    </div>
                ))}
            </div>
            <div className="text-center mt-3 pb-5">
                <button
                    className="btn btn-success me-3"
                    onClick={() => setPage((prevPage) => prevPage - 1)}
                >
                    Previous
                </button>
                <button
                    className="btn btn-success"
                    onClick={() => setPage((prevPage) => prevPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
