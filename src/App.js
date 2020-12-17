import './App.css';
import React from 'react';
import NavBar from './NavBar';
import MyCarousel from './MyCarousel';
import NavBottom from './NavBottom';
import BoxLabelsPart from './BoxLabelsPart';
import Callforaction from './Callforaction';
import FeaturedSPs from './FeaturedSPs';
import NewsletterSubscribe from './NewsletterSubscribe';
import FooterMenuItems from './FooterMenuItems';

function App() {
  return (
      <div className="App">
        <NavBar>
        
        </NavBar>

        <h1>
        TeQuest - Your Service Provider
        </h1>
        <hr></hr>
        <h4>
          A platform to bring together all kinds of Services and Service Providers from all over the World!  
        </h4>

        <MyCarousel className="MyCarousel">
          
        </MyCarousel>

        <BoxLabelsPart>

        </BoxLabelsPart>

        <Callforaction>

        </Callforaction>

        <FeaturedSPs>
          
        </FeaturedSPs>

        <NewsletterSubscribe>

        </NewsletterSubscribe>

        <FooterMenuItems>

        </FooterMenuItems>

        <NavBottom className="fixed-bottom text-light bg-dark">
        Copyright &copy; <a href='index.html' className="text-light bg-dark"> TeQuest </a> - Your Service Provider. All Rights Reserved
        </NavBottom>

      </div> 
     
    
  );
  
}

export default App;
