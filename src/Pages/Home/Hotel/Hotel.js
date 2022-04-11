import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Hotel = ({ hotel }) => {
    const { name, picture, description } = hotel;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <button className='btn btn-secondary fw-bold w-100'>Book Now</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Hotel;