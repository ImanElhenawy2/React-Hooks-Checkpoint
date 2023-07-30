import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

export default function MovieList({ filmList }) {
    return(
    <>
            {filmList.map((movie) => {
                return (
                    <Link to={movie.id} style={{textDecoration: 'none'}}>
                        <MovieCard
                            title={movie.title}
                            description={movie.description}
                            posterURL={movie.posterURL}
                            rating={movie.rating}
                        />
                    </Link>  
                );
            })}
        </>
    );
}
