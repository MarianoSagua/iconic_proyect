import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

const cutDetails = (value) =>{
  if(value.length > 140){
      return value.slice(0, 137) + '...';
  }else{
      return value;
  }
};

const Item = ({producto}) => {

  const details = cutDetails(producto.description);

  return (
    <div>
        <Card style={{ width: '18rem', height: "45rem" }}>
        <Card.Img className='cardImage' variant="top" src={producto.images} />
        <Card.Body className='cardBody'>
          <Card.Title>{producto.title}</Card.Title>
          <Card.Text>{producto.price} $</Card.Text>
          <Card.Text>{details}</Card.Text>
          <Button variant="dark">
            <Link to={"/item/" + producto.id}>Ver Mas</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item