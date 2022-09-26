import React from 'react';
import './show.scss';
import PropTypes from "prop-types";

function Show(props) {

  return (
    <div className='show'>
      <div className='showCard' onClick = {() => props.whenShowClicked(props.id)}>
        <h3 className='showCardDate'> {props.date} </h3>
        <h4 className='showCardPresents'> The World Famous Kenton Club Presents: </h4>
        <h1 className='showCardName'> {props.name} </h1>
        <p>and</p>
        <h2 className='showCardSupport'> {props.support}</h2>
        <div className='showPhoto'>
          {props.photo}    
        </div>
        <div className='showCardDateTime'>
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
  price: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenShowClicked: PropTypes.func
}

export default Show;
