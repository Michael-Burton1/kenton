import React from 'react';
import NewShowForm from '../../Molecules/NewShowForm/NewShowForm';
import ShowList from '../ShowList/ShowList';

class ShowControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }
  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState= null;
    let buttonText =null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewShowForm />
      buttonText= 'Return to show list';
    } else {
      currentlyVisibleState= <ShowList />
      buttonText="Add ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default ShowControl;