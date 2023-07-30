import { Link, useParams } from "react-router-dom";
import movies from "./Movies";
import YouTube from 'react-youtube';

export default function MovieDetails (){
    const {id} = useParams();
    const movie = movies.find((movie) => (movie.id) === id)


    return(
    <div className="container">
        <br/>
        <h1>{movie.title} </h1>
        <br/>
        <br/>
        <YouTube videoId={movie.trailerId} />
        <br/>
        <br/>
        <p>{movie.description}</p>
        <br/>
        <br/>
        <Link to={"/"} style={{textDecoration: 'none', color:'#fff' }}> Go to Home❤️ </Link>
        <br/>
       
    </div>
       
    )

}