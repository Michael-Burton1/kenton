import React from 'react';
import ReusableForm from '../../Atoms/ReuseableForm/ReusableForm';
import PropTypes from 'prop-types'


function EditShowForm(props) {
  const { show } = props;

  function HandleEditShowFormSubmission(event) {
    event.preventDefault();
    props.onEditShow({
      date: event.target.date.value,
      name: event.target.name.value,
      support: event.target.support.value,
      photo: event.target.photo.value,
      time: event.target.time.value,
      price: event.target.price.value,
      id: show.id
    })
  }
  return (
    <div>
      <ReusableForm
        formSubmissionHandler = {HandleEditShowFormSubmission}
        buttonText='Update the Show' />
    </div>
  );
}

EditShowForm.propTypes = {
  show: PropTypes.object,
  onEditShow: PropTypes.func
}
export default EditShowForm;
