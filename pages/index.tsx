import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <h1 className='text-sky-400'>Welcome to My Portfolio</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor leo sit amet quam aliquet, vel accumsan nunc efficitur. Aenean vel fermentum arcu, a luctus elit. Duis vel nulla nisi. </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

