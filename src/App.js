import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
	handleOnClick = event => {
		this.props.increaseCount();
		// this basically calls dispatch with action = {type: 'INCREASE_COUNT'}
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

// when called mapStateToProps(state) ==> {item: [] Some Array)}
const mapStateToProps = state => {
	return {
		items: state.items
	};
};


// when called mapDispatchToProps(dispatch) ===> {increaseCount: #runs dispatch(action)}
const mapDispatchToProps = dispatch => {
	return {
		increaseCount: () => dispatch({ type: 'INCREASE_COUNT' })
	};
};

// sets items and increaseCount as props => state items, and dispatch function
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
