import React from 'react';
import Carousel from '../components/Carousel';
import Fact from '../components/Fact';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Contact from './Contact';
import Footer from './Footer';
import Intro from './Intro';
import OurServices from './OurServices';
import OurTeam from './OurTeam';
import Services from './Services';



const Home = () => {
  return (
    <>
        <Header/>
        <NavBar/>
        <Carousel/>
        <Fact/>
        <Intro/>
        
        <OurTeam/>
       
        <Footer/>
     
    </>
  )
}

export default Home