import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

 const App = (props) => {
	const handleOnClick = event => {
		props.increaseCount();
	};


		return (
			<div className="App">
				<button onClick={handleOnClick}>Click</button>
				<p>{props.items.length}</p>
			</div>
		);
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
