import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'



const Review = ({ feedback }) => {
    const { name, comment, picture, rating } = feedback;
    return (
        <Col>
            <div className='d-flex flex-column align-items-center'>
                <img style={{ width: '100px', height: '100px' }} className='rounded-circle' src={picture} alt="" />
                <div className='text-center mt-3'>
                    <h4>{name}</h4>
                    <p>{comment}</p>
                    <Rating
                        initialRating={rating}
                        fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        readonly
                    />
                </div>
            </div>
        </Col>
    );
};

export default Review;