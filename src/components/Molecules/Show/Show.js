import React from 'react';
import './show.scss';
import PropTypes from "prop-types";

function Show(props) {

  return (
    <div className='show'>
      <div className='showCard'>
        <h3> {props.date} </h3>
        <h4> THIS BAR PRESENTS </h4>
        <h1> {props.name} </h1>
        <p>and</p>
        <h2> {props.support}</h2>
        <div className='showPhoto'>
          {props.photo}    
        </div>
        <div>
          {props.time},
          {props.price}
        </div>
      </div>
    </div>
  );
}
Show.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  support: PropTypes.string,
  photo: PropTypes.string,
  time: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}

export default Show;
