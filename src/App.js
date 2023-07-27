import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Components/Filter';
import movies from './Movies';
import MovieList from './Components/MovieList';
import { useState , useEffect} from 'react';



function App() {
  const [filmList, setFilmList] = useState(movies);
  const [filtered, setFiltered] = useState(movies);

  const [title, setTitle] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(1);
  
  //const [SearchTitle, setSearchTitel] = useState()
  //const [inputValue, setInputValue] = useState("")
  //const [filteredMovies, setFilteredMovies] = useState([])


  const handelChangeTitle = (e)=>{
    e.preventDefault();
    setTitle(e.target.value)
  };
  const handelChangePoster = (e) =>{
    setPosterURL(e.target.value)
  }
  
  const handelChangeAdd = (e)=>{
    e.preventDefault();
    setFilmList((prev) => [...prev , { title, description, rating, posterURL}]);
    setFiltered()
    setTitle ("")
    setDescription("")
    setRating("")
    setPosterURL("")
  };

  useEffect(()=>{
    setFiltered(movies)        
  }, [movies])
  
  useEffect(()=>{
    setFiltered([...filmList])
  },[filmList])


  


  return (
    <div className="App">
        <div className="mb-3 box"> 
          <label>Add your Favorit Movie:</label>
          <br/>
          <input className='input' type="text" value={title} placeholder='type the Title' onChange={handelChangeTitle}/>
          <br/>
          <input className='input' type="url" value={posterURL} placeholder='type the URL' onChange={handelChangePoster}/>
          <br/>
          <textarea className='area' value={description} variant="primary" placeholder='type the description' onChange={(e) => setDescription(e.target.value)}></textarea>
          <br/>
          <select className='select' value={rating} onChange={(e) => setRating(e.target.value)}>
              <option value={1}>1</option>
              <option value={2}>2</option>              
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
          </select> 
          <br/>
          <button className='mybtn' onClick={handelChangeAdd}>Add</button> 
          <br/>
          
        { //
         //<br/>
         //<input className='input' type="text" value={SearchTitle} onChange={handelChangeFilter}/>
         
}
        </div> 
      
    < MovieList filmList = {filtered} />
    < Filter filmList = {filmList} setFiltered = {setFiltered} />
    </div>
  );
}

export default App;
