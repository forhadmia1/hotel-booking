import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useHotels from '../../Hooks/useHotels';
import Hotel from '../Home/Hotel/Hotel';

const Resorts = () => {
    const [hotels] = useHotels();
    return (
        <Container className='my-5'>
            <Row xs={1} md={2} className="g-4">
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

export default Resorts;