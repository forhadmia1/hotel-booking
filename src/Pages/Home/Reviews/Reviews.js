import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [])


    return (
        <Container>
            <h1 className='text-center'>Our Reviews</h1>
            <Row xs={1} md={3} className="g-4 my-5">
                {
                    feedbacks.map(feedback => <Review
                        key={feedback.id}
                        feedback={feedback}
                    ></Review>)
                }
            </Row>
        </Container>
    );
};

export default Reviews;