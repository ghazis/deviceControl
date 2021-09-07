import React, { useEffect }  from 'react';
import firebase from 'firebase/app';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import "firebase/auth";

import Routes from './Routes';
import { retrieveData, toggleState, signIn, watchForAuth } from './actions/actions';

const App = ({deviceState, dataLoaded, userLoggedIn, toggleState, retrieveData, watchForAuth}) => {

  useEffect(() => {
    retrieveData();
    watchForAuth();
  }, [])

  var body;

  if (userLoggedIn && dataLoaded)
    body = (
      <React.Fragment>
        <div className="title">Device Contro<Link to="/easteregg" className="link">l</Link></div>
        <Routes />
      </React.Fragment>
    );
  else if (dataLoaded)
    body = (
      <React.Fragment>
        <div className="sign-but-layout"><button className="sign-in-button" onClick={signIn}>Sign In</button></div>
      </React.Fragment>
    )
  else body = null;

  return body
}

const mapStateToProps = (state) => {
  return {
    deviceState: state.deviceState,
    dataLoaded: state.appState.dataLoaded,
    userLoggedIn: state.appState.userLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    retrieveData: () => dispatch(retrieveData()),
    watchForAuth: () => dispatch(watchForAuth()),
    toggleState: (stateType, buttonState) => dispatch(toggleState(stateType, buttonState))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
