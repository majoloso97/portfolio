import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main className='bg-white dark:bg-slate-600 h-screen'>
        <h1 className='text-sky-900 dark:text-sky-500'>Welcome to My Portfolio</h1>
        <p className='text-black dark:text-sky-100'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor leo sit amet quam aliquet, vel accumsan nunc efficitur. Aenean vel fermentum arcu, a luctus elit. Duis vel nulla nisi.
          </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

