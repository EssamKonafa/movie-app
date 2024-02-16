import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '../../axiosConfig/instance';

export default function MovieDatails() {
    let { id } = useParams();
    console.log(id)
    let [MovieDetails, setMovieDetails] = useState({})

    async function getMovieDetails(id) {
        try {
            let { data } = await instance.get(`3/movie/${id}`)
            console.log(data);

            setMovieDetails(data)
        } catch (err) {
            console.log(err);
        }
    }

    //mou et
    useEffect(() => {
        getMovieDetails(id);
    }, [])
    return <>
        <div className="container">
            <div className="row bg-with"  >
                <div key={MovieDetails.id} className="col-md-6 offset-md-3 text-center border  p-2 " >
                    <img src={`https://image.tmdb.org/t/p/w500/${MovieDetails.poster_path}`} className="img-fluid" alt="" />
                    <h5 className="text-dark "> {MovieDetails.title}</h5>
                    <p className="text-dark" >popularity : {MovieDetails.popularity}</p>
                    <p className="text-dark"> voter Average{MovieDetails.vote_average}</p>
                </div>
            </div>
        </div>
    </>
}
