import React from "react";
import MovieCard from "./MovieCard";



export default function MovieList({ filmList}){
    
    return<>
    {filmList.map((movie)=>{
       return< MovieCard
        key={movie.id}
        title= {movie.title}
        description= {movie.description}
        posterURL={movie.posterURL}
        rating={movie.rating}/>

    })}
    </>
}