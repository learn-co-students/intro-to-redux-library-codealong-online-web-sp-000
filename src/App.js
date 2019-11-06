import React, { Component } from 'react';
import { connect } from 'react-redux';                 // imported connect
import './App.css';



class App extends Component {
  handleOnClick = event => {
    this.props.increaseCount();  // increaseCount is actually being provided by the new function below our App
                                 //                                              component: mapDispatchToProps.

  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>Click</button>
        <p>{this.props.items.length}</p>  // prop created from our Redux store.
                                 // As the store's items property increases, App will display a different number!
      </div>         /
    );
  }
}




const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseCount: () => dispatch({ type: 'INCREASE_COUNT' })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
