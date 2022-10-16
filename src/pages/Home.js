import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';


import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

const home = () => {
  return (
    <>
      <Hero>
        <Banner title="Welcome to JHA ERA" subtitle="rooms starting at ₹145,000">
          <Link to="/rooms" className="btn-primary">
            Houses for sale
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default home;
