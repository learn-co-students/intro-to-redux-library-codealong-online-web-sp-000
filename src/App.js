import React, { Component } from 'react';
import { connect } from 'react-redux'; /* import the connect method, which allows us to access our state prop elsewhere in our project without passing it down again. It works in tandem with Provider, which wraps the top-level component (here, it's App) and passes down our state (called store) only once. way less work that prop-passing hell! */
import './App.css';

class App extends Component {
	handleOnClick = event => {
		this.props.increaseCount();
	};


	// the code on lines 12-17 and 6-8 places a button on the page with an onClick event listener pointed to this.handleOnClick. When this.handleOnClick is invoked, it calls a function, this.props.increaseCount. Well.. increaseCount is actually being provided by the new function below our App component: mapDispatchToProps. Meanwhile, we've also got this.props.items.length, which is also a prop created from our Redux store. As the store's items property increases, App will display a different number!
	render() {
		return (
			<div className="App">
				<button onClick={this.handleOnClick}>Click</button>
				<p>{this.props.items.length}</p>
			</div>
		);
	}
}

// see explaination of this callback above
const mapStateToProps = state => {
	return {
		items: state.items
	};
};

// see explaination of this callback above
const mapDispatchToProps = dispatch => {
	return {
		increaseCount: () => dispatch({ type: 'INCREASE_COUNT' })
	};
};

// By modifying a component's export statement and included connect, we are able to take data from our Redux store and map them to a component's props. Similarly, we can also take actions, and by wrapping them in a dispatch and an anonymous function, be able pass them as props as well
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
