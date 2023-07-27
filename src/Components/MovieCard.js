import React from "react";
import Card from 'react-bootstrap/Card';



export default function MovieCard(props){
    return<>
    <Card className='cards' style={{ width: '18rem', margin:'50px'}}>
      <Card.Img variant="top" src={props.posterURL}/>
      <Card.Body className="main">
        <Card.Title>
            <h3 className="title">{props.title}</h3>
        </Card.Title>
        <Card.Text>
            {props.description}
        </Card.Text>
        <p>{props.rating}</p>
      </Card.Body>
    </Card>
    </>
}
