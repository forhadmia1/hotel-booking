import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useHotels from '../../../Hooks/useHotels';
import Hotel from '../Hotel/Hotel';

const Hotels = () => {
    const [hotels] = useHotels();

    return (
        <Container className='mb-5'>
            <h1 className='text-center fw-bold mb-5'>Our Hotels</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    hotels.map(hotel => <Hotel
                        key={hotel.id}
                        hotel={hotel}
                    ></Hotel>)
                }
            </Row>
        </Container>
    );
};

export default Hotels;