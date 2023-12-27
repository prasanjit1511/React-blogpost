import React from 'react';
import "./BlogCSS/Card.css";

function Card(props) {
  return (
    <div className='container mt-5' >
        
      <div className="card ">
        <img src={props.imgg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
           {props.para}
          </p>
          <a href="{props.linK}" className="btn btn-primary">
            {props.plink}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
