import React from 'react'
import Navbar from './pages/Navbar';
import Carousel from './pages/Carousel';
import Card from './pages/Card';
import Page from './pages/Page';
import Footer from './pages/Footer';

function Home() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <div className='container'>
      
        <div className='row'>
          <div className='col-md-4'>
           <Card imgg="img/01.avif" title="Card title 1" para=" Some quick example text to build on the card title and make up the bulk of the card's content."  plink=" Go somewhere" linK="" />

          </div>

          <div className='col-md-4'>
           <Card imgg="img/01.avif" title="Card title 1" para=" Some quick example text to build on the card title and make up the bulk of the card's content."  plink=" Go somewhere" linK="" />

          </div>
          <div className='col-md-4'>
           <Card imgg="img/01.avif" title="Card title 1" para=" Some quick example text to build on the card title and make up the bulk of the card's content."  plink=" Go somewhere" linK="" />

          </div>
          <div className='col-md-4'>
           <Card imgg="img/01.avif" title="Card title 1" para=" Some quick example text to build on the card title and make up the bulk of the card's content."  plink=" Go somewhere" linK="" />

          </div>
          <div className='col-md-4'>
           <Card imgg="img/01.avif" title="Card title 1" para=" Some quick example text to build on the card title and make up the bulk of the card's content."  plink=" Go somewhere" linK="" />

          </div>
          <div className='col-md-4'>
           <Card imgg="img/01.avif" title="Card title 1" para=" Some quick example text to build on the card title and make up the bulk of the card's content."  plink=" Go somewhere" linK="" />

          </div>

          {/* page */}

          <Page/>
           
          

        </div>

       

      </div>

    <Footer/>
    </div>
  )
}

export default Home
