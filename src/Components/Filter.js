import React, {useState} from "react";
import Button from 'react-bootstrap/Button';



export default function Filter({ filmList, setFiltered }){
  const [filterInput, setFilterInput] = useState("")
  const [filterRating, setFilterRating] = useState(1)

  const handleFilterChange = (e) => {
    setFilterInput(e.target.value)
  }
  const handleOnClickFilterChange = (e) => {
    setFiltered([
      ...filmList.filter(film => film.title.toLowerCase().includes(filterInput.toLowerCase()) || film.rating === Number(filterRating)),
    ])
  }

    return<>
    <div className="mb-3 box2"> 
        <br/>
        <input className='input' type="text" placeholder="filter by title" onChange={handleFilterChange} value={filterInput} />
        <br/>
        <select className='select' value={filterRating} placeholder="filter by rating" onChange={(e) => setFilterRating(e.target.value)}>
            <option value={1}>1</option>
            <option value={2}>2</option>              
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select> 
        <br/>
        <Button className='search' onClick = {handleOnClickFilterChange} >
         Apply Filter
        </Button>
    </div>
        
    </>
}