import React from 'react';
import Proptypes from 'prop-types';
import { v4 } from 'uuid';

function NewShowForm(props) {

  function handleNewShowFormSubmission(event) {
    event.preventDefault();
    props.onNewShowCreation({
      date: event.target.date.value,
      name: event.target.name.value,
      support: event.target.support.value,
      photo: event.target.photo.value,
      time: event.target.time.value,
      price: event.target.price.value,
      id: v4()
    })
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewShowFormSubmission}>
        <input type="text" name="date" placeholder="Location" />
        <input type="text" name="name" placeholder='Headliner Name' />
        <input type="text" name="support" placeholder="support name" />
        <input type="text" name="photo" placeholder="photo" />
        <input type="text" name="time" placeholder="time" />
        <input type="text" name="price" placeholder="price" />
        <button type='submit'>Add show to list</button>
      </form>
    </React.Fragment>
  );
}

NewShowForm.propTypes = {
  onNewShowCreation: Proptypes.func
}

export default NewShowForm;
