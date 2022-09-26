import React from 'react';
import Show from '../../Molecules/Show/Show';
import PropTypes from "prop-types";


function ShowList(props) {
  return (
    <div>
      <hr/>
      {props.showList.map((show,index) =>
        <Show 
          name = {show.name}
          date = {show.date}
          support= {show.support}
          photo= {show.photo}
          time= {show.time}
          price= {show.price}
          key={index}
        />
      )}
    </div>
  );
}

ShowList.propTypes = {
  showList: PropTypes.array
}

export default ShowList;
