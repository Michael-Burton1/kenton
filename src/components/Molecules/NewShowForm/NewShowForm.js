import React from 'react';

function NewShowForm(props) {

  function handleNewShowFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.date.value);
    console.log(event.target.name.value);
    console.log(event.target.support.value);
    console.log(event.target.photo.value);
    console.log(event.target.time.value);
    console.log(event.target.price.value);
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

export default NewShowForm;
