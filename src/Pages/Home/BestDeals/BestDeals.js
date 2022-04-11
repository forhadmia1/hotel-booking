import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import hotel from '../../../Assets/Images/Hotel.jpg'

const BestDeals = () => {

    const navigate = useNavigate();

    return (
        <Container className='my-5'>
            <Row className='g-5'>
                <Col md={4}>
                    <img className='img-fluid' src={hotel} alt="" />
                </Col>
                <Col>
                    <h2 className='display-1 fw-bold'>The Best Hotel</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sed iste culpa excepturi vitae, beatae facere modi consequuntur provident tempora hic cumque quidem laudantium doloribus voluptatum eum ratione rem asperiores! Commodi numquam libero aliquid facere odio sapiente, autem iure sequi quis voluptate cum facilis. Nam impedit sequi expedita corporis. Alias, asperiores. Praesentium possimus ipsam et facere obcaecati enim, eos iusto modi deleniti? Doloribus nobis ex blanditiis voluptatum labore accusamus ducimus deserunt nemo laudantium tempora enim voluptates a debitis, velit earum inventore quas! Accusantium eos dolores possimus hic, odio fugiat exercitationem consectetur sint facilis maiores harum quisquam dignissimos ipsa dolorum quas?</p>
                    <button onClick={() => navigate('/resorts')} className='btn btn-secondary px-5 fw-bold'>See All</button >
                </Col>
            </Row>
        </Container>
    );
};

export default BestDeals;