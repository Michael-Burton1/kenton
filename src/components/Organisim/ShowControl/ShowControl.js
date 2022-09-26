import React from 'react';
import NewShowForm from '../../Molecules/NewShowForm/NewShowForm';
import ShowList from '../ShowList/ShowList';
import ShowDetail from '../../Molecules/ShowDetail/ShowDetail';

class ShowControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainShowList: [],
      selectedShow: null
    };
  }
  handleClick = () => {
    if (this.state.selectedShow != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedShow: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewShowToList = (newShow) => {
    const newMainShowList = this.state.mainShowList.concat(newShow);
    this.setState({
      mainShowList: newMainShowList,
      formVisibleOnPage:false
    })
  }

  handleChangingSelectedShow = (id) => {
    const selectedShow =this.state.mainShowList.filter(show => show.id === id)[0];
    this.setState({selectedShow: selectedShow});
  }

  handleDeletingShow = (id) => {
    const newMainShowList = this.state.mainShowList.filter(show => show.id !== id);
    this.setState({
      mainShowList: newMainShowList,
      selectedShow: null
    });
  }

  render(){
    let currentlyVisibleState= null;
    let buttonText =null;

    if (this.state.selectedShow !=null) {
      currentlyVisibleState = <ShowDetail show = {this.state.selectedShow} onClickingDelete = {this.handleDeletingShow}/>
      buttonText = 'Return to Show list';
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewShowForm onNewShowCreation={this.handleAddingNewShowToList}/>
      buttonText= 'Return to show list';
    } else {
      currentlyVisibleState= <ShowList showList={this.state.mainShowList} onShowSelection={this.handleChangingSelectedShow}/>
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