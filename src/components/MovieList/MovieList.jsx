import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./MovieList.css";
import MovieItem from "./components/MovieItem/MovieItem.jsx";
import { addMovies,setMovies } from "../../store/movieSlices/movieSlices.js";
import TMDB from "../../services/api/TMDB.js";


const MovieList = () => {
    const sceleton = useRef(null);

    const [page, setPage] = useState(1);


    const movies = useSelector(state => state.movie.movies);
    const dispatch = useDispatch();

    /* useEffect(() => {
        TMDB.getPopularMovies().then(response => dispatch(setMovies(response)));
    }, []);
 */
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setPage((prev)=>{

                        TMDB.getPopularMovies(prev).then(response => dispatch(addMovies(response)));
                        return prev+1;
                    });
                    console.log(entry.isIntersecting);
                }
            });
        }, {
            threshold: 0.1
        });

        if (sceleton.current) {
            observer.observe(sceleton.current);
        }

        return () => {
            if (sceleton.current) {
                observer.unobserve(sceleton.current);
            }
            observer.disconnect();
        };
    }, []);



    return (
        <section className="movie__list">
            {movies.map((movie, idx) => (
                <MovieItem data={movie} key={idx} />
            ))}




            <div ref={sceleton} className="movie__sceleton-item"></div>
            <div className="movie__sceleton-item"></div>
            <div className="movie__sceleton-item"></div>
            <div className="movie__sceleton-item"></div>
        </section>
    );
}

export default MovieList;