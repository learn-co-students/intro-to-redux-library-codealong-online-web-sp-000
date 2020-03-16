import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
	handleOnClick = event => {
		this.props.increaseCount();
	};

	render() {
		return (
		<div className="App">
			<button onClick={this.handleOnClick}>Click</button>
			<p>{this.props.items.length}</p>
		</div>
		);
	}
}

// Redux:

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

export default connect(mapStateToProps, mapDispatchToProps)(App);


// this code places a button on the page with an onClick event listener pointed to this.handleOnClick.
// when this.handleOnClick is invoked, it calls a function, this.props.increaseCount.

// Well...increaseCount is actually being provided by the new function below the App component: mapDispatchToProps.
// Meanwhile, you've also got this.props.items.length, which is also a prop created from the Redux store.
// As the store's `items` property increases, App will display a different number!

// Every button click dispatches an action to your store, causing it to change.
// Since data (items) from that store is being accessed in App,
// App will re-render and display the updated counter.
