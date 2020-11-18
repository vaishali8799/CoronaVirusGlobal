import React from 'react'
import {Card} from 'react-bootstrap'
import './minicard.css'

function Minicard({image,title,content}) {
    return (
        <div>
            <Card  className="card">
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title className="card-title">{title}</Card.Title>
    <Card.Text className="card-text">
      {content}
    </Card.Text>
    
  </Card.Body>
</Card>
        </div>
    )
}

export default Minicard
