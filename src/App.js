import React, { Component } from 'react';
//taking data from redux store and mapping to component props and actions
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
	handleOnClick = event => {
		//increaseCount provided by mapDispatchToProps
		this.props.increaseCount();
	};

	render() {
		return (
			<div className="App">
				<button onClick={this.handleOnClick}>Click</button>
				{/* props created from our Redux store. As the items increase the app will display a different number.  */}
				<p>		{this.props.items.length}</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		items: state.items
	};
};

//called from this.props.items.length
const mapDispatchToProps = dispatch => {
	return {
		increaseCount: () => dispatch({ type: 'INCREASE_COUNT' })
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
