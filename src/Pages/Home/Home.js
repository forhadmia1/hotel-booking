import React from 'react';
import Banner from './Banner/Banner';
import BestDeals from './BestDeals/BestDeals';
import ContactForm from './ContactForm/ContactForm';
import Hotels from './Hotels/Hotels';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Banner />
            <BestDeals />
            <Hotels />
            <Reviews />
            <ContactForm />
        </>
    );
};

export default Home;