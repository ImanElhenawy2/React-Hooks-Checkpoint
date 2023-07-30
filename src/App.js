import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import MovieDetails from './MovieDetails';



function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<MovieDetails/>} />
      </Routes>

    </div>
  );
}

export default App;
