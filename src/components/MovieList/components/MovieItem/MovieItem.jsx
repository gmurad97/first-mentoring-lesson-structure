import "./MovieItem.css";
import { TMDB_SMALL_POSTER_BASE_URL } from "../../../../utils/constants";

const MovieItem = ({data}) => {
    return (
        <article className="movie__item">
            <div className="movie__poster">
                <img className="movie__poster-img" src={TMDB_SMALL_POSTER_BASE_URL + data.poster_path} alt="" />
            </div>
            <div className="movie__detail">
                <h1>{data.title}</h1>
                <p>{data.overview}</p>
            </div>
        </article>
    );
}

export default MovieItem;