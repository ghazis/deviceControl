import React from 'react';
import { connect } from 'react-redux';

import { retrieveData, toggleState } from './actions/actions';

class App extends React.Component {

  componentDidMount() {
    this.props.retrieveData();
  }

  convertBoolToName(bool) {
    var name = bool ? "On" : "Off";
    return name
  }

  render() {
    if (this.props.dataLoaded)
      return (
        <div>
          <div className="title">Device Control</div>
            <div className="flex-layout">
              <div className="button-layout">
                <div className="buttonHeader">Bedroom Lights</div>
                <button className="button" onClick={() =>
                  {this.props.toggleState('bedroomState', this.props.bedroomState)}}>
                  {this.convertBoolToName(this.props.bedroomState)}
                </button>
              </div>
              <div className="button-layout">
                <div className="buttonHeader">Dining Room Lights</div>
                <button className="button" onClick={() =>
                  {this.props.toggleState('diningState', this.props.diningState)}}>
                  {this.convertBoolToName(this.props.diningState)}
                </button>
              </div>
            </div>
            <div className="flex-layout">
              <div className="button-layout">
                <div className="buttonHeader">Hallway Lights</div>
                <button className="button" onClick={() =>
                  {this.props.toggleState('hallwayState', this.props.hallwayState)}}>
                  {this.convertBoolToName(this.props.hallwayState)}
                </button>
              </div>
              <div className="button-layout">
                <div className="buttonHeader">Kitchen Lights</div>
                <button className="button" onClick={() =>
                  {this.props.toggleState('kitchenState', this.props.kitchenState)}}>
                  {this.convertBoolToName(this.props.kitchenState)}
                </button>
              </div>
              <div className="button-layout">
                <div className="buttonHeader">Living Room Lights</div>
                <button className="button" onClick={() =>
                  {this.props.toggleState('livingState', this.props.livingState)}}>
                  {this.convertBoolToName(this.props.livingState)}
                </button>
              </div>
            </div>
        </div>
      );
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    dataLoaded: state.appState.dataLoaded,
    bedroomState: state.appState.bedroomState,
    diningState: state.appState.diningState,
    hallwayState: state.appState.hallwayState,
    kitchenState: state.appState.kitchenState,
    livingState: state.appState.livingState
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    retrieveData: () => dispatch(retrieveData()),
    toggleState: (stateType, buttonState) => dispatch(toggleState(stateType, buttonState))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
