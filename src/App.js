import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
	handleOnClick = event => {
		this.props.increaseCount();
	};

	//this.props.items.length, which is also a prop created from our Redux store. As the store's items property increases, App will display a different number!
	render() {
		return (
			<div className="App">
				<button onClick={this.handleOnClick}>Click</button>
				<p>{this.props.items.length}</p>
			</div>
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


//to gain access to the store somewhere in our app, we use a second function provided by react-redux, connect. By modifying a component's export statement and included connect, we are able to take data from our Redux store and map them to a component's prop