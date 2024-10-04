import { useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = () => {
    const movies = useSelector(state=> state.movie.movies);


    return (
        <nav className="navbar">
            <ul>
                {movies.map((movie,idx)=>(
                    <li key={idx}>{movie.title}</li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;