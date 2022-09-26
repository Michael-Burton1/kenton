import React from 'react';
import Show from '../../Molecules/Show/Show';
import PropTypes from "prop-types";


function ShowList(props) {
  return (
    <div>
      <hr/>
      {props.showList.map((show) =>
        <Show 
          whenShowClicked = {props.onShowSelection}
          name = {show.name}
          date = {show.date}
          support= {show.support}
          photo= {show.photo}
          time= {show.time}
          price= {show.price}
          id={show.id}
          key={show.id}
        />
      )}
    </div>
  );
}

ShowList.propTypes = {
  showList: PropTypes.array,
  onShowSelection: PropTypes.func
};

export default ShowList;
