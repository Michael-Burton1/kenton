import React from 'react';
import PropTypes from 'prop-types';
import '../ShowDetail/showDetail.scss'

function ShowDetail(props) {
  const { show, onClickingDelete }= props;


  return (
    <div className='showDetailContainer'>
      <h1>Show details</h1>
      <div className='showDetail'>
        <div className='showDetailDate'>
          <p>date: </p><p>{show.date}</p>
        </div>
        <div className='showDetailName'>
          <p>headliner: </p><p>{show.name}</p>
        </div>
        <div className='showDetailSupport'>
          <p>support: </p><p>{show.support}</p>
        </div>
        <div className='showDetailPhoto'>
          <p>photo:  </p><p>{show.photo}</p>
        </div>
        <div className='showDetailTime'>
          <p>time: </p><p>{show.time}</p>
        </div>
        <div className='showDetailPrice'>
          <p>price: </p><p>{show.price}</p>
        </div>
        <div className='showDetailId'>
          <p>showID: </p><p>{show.id}</p>
        </div>
      </div>
      <button onClick={() => onClickingDelete(show.id)}>Delete Show</button>
    </div>
  );
}

ShowDetail.propTypes = {
  show: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default ShowDetail;
