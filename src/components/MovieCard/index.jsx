import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.scss";

const imageUrl = import.meta.env.VITE_IMG;
const imageNotFound =
  "https://dummyimage.com/284 x 426/000/fff.jpg&text=image+not+found";

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img
        src={movie.poster_path ? imageUrl + movie.poster_path : imageNotFound}
        alt={`${movie.title}  movie image`}
      />

      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>

      {showLink && <Link to={`/movie/${movie.id}`}>Details</Link>}
    </div>
  );
};

export default MovieCard;
