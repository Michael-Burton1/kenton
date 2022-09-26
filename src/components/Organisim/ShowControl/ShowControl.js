import React from 'react';
import NewShowForm from '../../Molecules/NewShowForm/NewShowForm';
import ShowList from '../ShowList/ShowList';

class ShowControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainShowList: []
    };
  }
  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewShowToList = (newShow) => {
    const newMainShowList = this.state.mainShowList.concat(newShow);
    this.setState({
      mainShowList: newMainShowList,
      formVisibleOnPage:false
    })
  }

  render(){
    let currentlyVisibleState= null;
    let buttonText =null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewShowForm onNewShowCreation={this.handleAddingNewShowToList}/>
      buttonText= 'Return to show list';
    } else {
      currentlyVisibleState= <ShowList showList={this.state.mainShowList} />
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