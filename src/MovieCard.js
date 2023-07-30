import React from "react";
import Card from 'react-bootstrap/Card';



export default function MovieCard(props){
    return<>
    
    <Card className='cards' style={{ width: '18rem', margin:'50px'}}>
      <Card.Img variant="top" className="poster" src={props.posterURL}/>
      <Card.Body className="main">
        <Card.Title>
            <h4 className="title">{props.title}</h4>
        </Card.Title>    
            <p>{props.description}</p>
            <p>{props.rating}</p>
      </Card.Body>
    </Card>
   
    </>
}
