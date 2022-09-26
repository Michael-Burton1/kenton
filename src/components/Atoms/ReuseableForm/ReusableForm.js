import React from "react";
import PropTypes from "prop-types";
import '../ReuseableForm/reusableForm.scss';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form className="reusableForm" onSubmit={props.formSubmissionHandler}>
        <div className="reusableFormInputs">
          <div className="formInputDate">
            <label name='date'>Date: </label>
            <input type="text" name="date" placeholder="01/30/2001" />
          </div>
          <div className="formInputHeadliner">
            <label name='name'>Headliner:  </label>
            <input type="text" name="name" placeholder='Headliner Name' />
          </div>
          <div className="formInputSupport">
            <label name='support'>Support: </label>
            <input type="text" name="support" placeholder="support name" />
          </div>
          <div className="formInputPhoto">
            <label name='name'>Photo:  </label>
            <input type="text" name="photo" placeholder="photo" />
          </div>
          <div className="formInputTime">
            <label name='date'>Show time: </label>
            <input type="text" name="time" placeholder="7:00" />
          </div>
          <div className="formInputPrice">
            <label name='name'>Price:  </label>
            <input type="text" name="price" placeholder='10 adv / 12 dos' />
          </div>
        </div>
        <div className="reusableFromButton">
          <button type='submit'>{props.buttonText}</button>
        </div>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;