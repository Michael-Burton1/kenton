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
    this.setState({formVisibleOnPage: true});
  }
  render(){
    let currentlyVisibleState= null;
    let addShowButton =null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewShowForm />
    } else {
      currentlyVisibleState= <ShowList />
      addShowButton= <button onClick={this.handleClick}>Add Show</button>
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addShowButton}
      </React.Fragment>
    );
  }

}

export default ShowControl;