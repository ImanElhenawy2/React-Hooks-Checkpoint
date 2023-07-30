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
    <div className="mb-3"> 
        <br/>
        <input 
          className='input' 
          type="text" 
          value={filterInput} 
          placeholder="filter by title" 
          onChange={handleFilterChange}           
        />
        <br/>
        <label style={{color:'white'}}>filter by rating</label>
        <br/>
        <select className='select' value={filterRating} onChange={(e) => setFilterRating(e.target.value)}>
            <option value={1}>1</option>
            <option value={2}>2</option>              
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select> 
        <br/>
        <Button className='mybtn' onClick = {handleOnClickFilterChange} >
         Apply Filter
        </Button>
    </div>
        
    </>
}