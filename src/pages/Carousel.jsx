import React, { Component } from 'react'
import "./BlogCSS/Blog.css"

 class Carousel extends Component {
  constructor(props){
    super(props)
    this.state = {
      ShortTitle:{
        STitle1:"Lorem ipsum dolor sit Partho",
        STitle2:"Lorem ipsum dolor sit Partho2",
        STitle3:"Lorem ipsum dolor sit Partho3",

      },
      longTitle:{
        LTitle1:"Live With Partho Vaiya Mane ami",
        LTitle2:"Live With Partho Vaiya Mane ami1",
        LTitle3:"Live With Partho Vaiya Mane ami2",

      },
      ParaGraph:{
        PTitle1:"Partho1 ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sapiente illum aut iste esse perferendis eos hic. Quas pariatur voluptatum laboriosam? Qui ab molestias quo quam dicta maiores obcaecati nulla, quasi tempora, reprehenderit perferendis fugit. Architecto, nisi! Maxime, deserunt, voluptate excepturi modi, cumque magni possimus doloribus quos ipsam ut commodi.voluptatum laboriosam? Qui ab molestias quo quam dicta maiores obcaecati nulla, quasi tempora, reprehenderit perferendis fugit. Architecto, nisi! Maxime, deserunt, voluptate excepturi modi, cumque magni possimus doloribus quos ipsam ut commodi.",
        PTitle2:"Partho2 ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sapiente illum aut iste esse perferendis eos hic. Quas pariatur voluptatum laboriosam? Qui ab molestias quo quam dicta maiores obcaecati nulla, quasi tempora, reprehenderit perferendis fugit. Architecto, nisi! Maxime, deserunt, voluptate excepturi modi, cumque magni possimus doloribus quos ipsam ut commodi.voluptatum laboriosam? Qui ab molestias quo quam dicta maiores obcaecati nulla, quasi tempora, reprehenderit perferendis fugit. Architecto, nisi! Maxime, deserunt, voluptate excepturi modi, cumque magni possimus doloribus quos ipsam ut commodi.",
        PTitle3:"Partho3 ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sapiente illum aut iste esse perferendis eos hic. Quas pariatur voluptatum laboriosam? Qui ab molestias quo quam dicta maiores obcaecati nulla, quasi tempora, reprehenderit perferendis fugit. Architecto, nisi! Maxime, deserunt, voluptate excepturi modi, cumque magni possimus doloribus quos ipsam ut commodi.voluptatum laboriosam? Qui ab molestias quo quam dicta maiores obcaecati nulla, quasi tempora, reprehenderit perferendis fugit. Architecto, nisi! Maxime, deserunt, voluptate excepturi modi, cumque magni possimus doloribus quos ipsam ut commodi.",

      },
      Nameee:{
        NTitle1:"Partho Baba",
        NTitle2:"Partho Baba2",
        NTitle3:"Partho Baba3",

      },
      Date:{
       DTitle1:"26 Dec, 2023",
       DTitle2:"27 Dec, 2024",
       DTitle3:"28 Dec, 2025",

      }


    }
  }
  render() {
    return (
      <div>
      <div id="carouselExampleControls" class="carousel slide container mt-5 " data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
           
            <div className="row">
              <div className="col-md-6">
              <img src="img/01.avif" class="d-block w-100" alt="..."/>
              </div>
              <div className="col-md-6">
                  <p className='ShortTitle text-start'>{this.state.ShortTitle.STitle1}</p>
                  <h3 className=' longTitle text-start'> {this.state.longTitle.LTitle1} </h3>
                  <p className='ShortTitle text-start'>{this.state.ParaGraph.PTitle1}</p>
                  <p className=' partho text-start' >{this.state.Nameee.NTitle1}</p>
                  <p className='ShortTitlee text-start' >{this.state.Date.DTitle1}</p>
              </div>
       </div>
           </div>
          <div class="carousel-item ">
           <div className="row">
              <div className="col-md-6">
              <img src="img/02.jpg" class="d-block w-100" alt="..."/>
              </div>
              <div className="col-md-6">
                  <p className='ShortTitle text-start'>{this.state.ShortTitle.STitle2}</p>
                  <h3 className=' longTitle text-start'> {this.state.longTitle.LTitle2} </h3>
                  <p className='ShortTitle text-start'>{this.state.ParaGraph.PTitle2}</p>
                  <p className=' partho text-start' >{this.state.Nameee.NTitle2}</p>
                  <p className=' ShortTitlee text-start' >{this.state.Date.DTitle2}</p>
         </div>
       </div>
        </div>
          <div class="carousel-item ">
           <div className="row">
              <div className="col-md-6">
              <img src="img/03.jpeg" class="d-block w-100" alt="..."/>
              </div>
              <div className="col-md-6">
                  <p className='ShortTitle text-start'>{this.state.ShortTitle.STitle3}</p>
                  <h3 className=' longTitle text-start'> {this.state.longTitle.LTitle3} </h3>
                  <p className='ShortTitle text-start'>{this.state.ParaGraph.PTitle3}</p>
                  <p className=' partho text-start' >{this.state.Nameee.NTitle3}</p>
                  <p className=' ShortTitlee text-start' >{this.state.Date.DTitle3}</p>
             </div>
            
          </div>
         
          
       </div>
       
      </div>
      </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" ></span>
          
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" ></span>
          
        </button>
       
        <h3 className='text-center mt-5'>Recent Post</h3>
    </div>
        
    )
  }
}

export default Carousel