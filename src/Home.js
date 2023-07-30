import MovieList from "./MovieList";
import Filter from "./Filter";
import { useState, useEffect } from "react";
import movies from "./Movies";

export default function Home() {
    const [filmList, setFilmList] = useState(movies);
    const [filtered, setFiltered] = useState(movies);
    const [title, setTitle] = useState("");
    const [posterURL, setPosterURL] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState(1);

    const handelChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    const handelChangePoster = (e) => {
        setPosterURL(e.target.value);
    };
    const handelChangeAdd = (e) => {
        e.preventDefault();
        setFilmList((prev) => [
            ...prev,
            { title, description, rating, posterURL },
        ]);
        setFiltered([]);
        setTitle("");
        setDescription("");
        setRating("");
        setPosterURL("");
    };
    
    useEffect(() => {
        setFiltered(movies);
    }, [movies]);

    useEffect(() => {
        setFiltered([...filmList]);
    }, [filmList]);

    return (
        <>
            <div className="mb-3">
                <label style={{ color: "white" }}>
                    {" "}
                    Add your Favorit ❤️ Movie{" "}
                </label>
                <br />
                <input
                    className="input"
                    type="text"
                    value={title}
                    placeholder="type the Title"
                    onChange={handelChangeTitle}
                />
                <br />
                <input
                    className="input"
                    type="url"
                    value={posterURL}
                    placeholder="type the URL"
                    onChange={handelChangePoster}
                />
                <br />
                <textarea
                    className="area"
                    value={description}
                    placeholder="type the description"
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <br />
                <select
                    className="select"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <br />
                <button className="mybtn" onClick={handelChangeAdd}>
                    Add
                </button>
            </div>
            <MovieList filmList={filtered} />
            <Filter filmList={filmList} setFiltered={setFiltered} />
        </>
    );
}
    