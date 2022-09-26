import React from 'react';
import Proptypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from '../../Atoms/ReuseableForm/ReusableForm';

function NewShowForm(props) {

  function handleNewShowFormSubmission(event) {
    event.preventDefault();
    props.onNewShowCreation({
      date: event.target.date.value,
      name: event.target.name.value.toUpperCase(),
      support: event.target.support.value.toUpperCase(),
      photo: event.target.photo.value,
      time: event.target.time.value,
      price: event.target.price.value,
      id: v4()
    })
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewShowFormSubmission}
        buttonText='Add show to list'/>
    </React.Fragment>
  );
}

NewShowForm.propTypes = {
  onNewShowCreation: Proptypes.func
}

export default NewShowForm;
