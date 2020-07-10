
/* ./src/App.js */
    /* To gain access to the store in our app, we use a second function: connect (provided by react-redux)
       By modifying a component's export statement and including connect, we are able to take data from our Redux store and map them to a component's props. We can also take actions and wrap them in a dispatch and anonymous function to be able to pass them as props too 
    */
   import React, {Component} from 'react';
   import {connect} from 'react-redux';
   import './App.css';
   
   class App extends Component { 
	   handleOnClick = event => {
		   this.props.increaseCount();
	   };
   
	   render() {
		   return(
			   <div className="App">
				   <button onClick={this.handleOnClick}>CLICK</button>
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
		   increaseCount: () => dispatch({type: 'INCREASE_COUNT'})
	   };
   };
   
   export default connect(
	   mapStateToProps, 
	   mapDispatchToProps
   )(App); 
   //This code places a button on the page with an onClick event listener pointed to this.handleOnClick.
   
   