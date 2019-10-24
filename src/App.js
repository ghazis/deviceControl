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
            <div className="widget-layout">
              <div className="widget widgetTeal" onClick={() =>
                  {this.props.toggleState('allState', this.props.allState)}}>
                <div className="deviceImg">
                  <img className="deviceImgSize"
                       src={this.props.allState ? require('./images/lb_on.png') : require('./images/lb_off.png')} />
                  <div className="subheader">All Lights</div>
                </div>
              </div>
              <div className="widget widgetGreen" onClick={() =>
                  {this.props.toggleState('bedroomState', this.props.bedroomState)}}>
                <div className="deviceImg">
                  <img className="deviceImgSize"
                       src={this.props.bedroomState ? require('./images/lb_on.png') : require('./images/lb_off.png')} />
                  <div className="subheader">Bedroom Lights</div>
                </div>
              </div>
            </div>
            <div className="widget-layout">
              <div className="widget widgetPurple" onClick={() =>
                  {this.props.toggleState('kitchenState', this.props.kitchenState)}}>
                <div className="deviceImg">
                  <img className="deviceImgSize"
                       src={this.props.kitchenState ? require('./images/lb_on.png') : require('./images/lb_off.png')} />
                  <div className="subheader">Kitchen Lights</div>
                </div>
              </div>
              <div className="widget widgetYellow" onClick={() =>
                  {this.props.toggleState('diningState', this.props.diningState)}}>
                <div className="deviceImg">
                  <img className="deviceImgSize"
                       src={this.props.diningState ? require('./images/lb_on.png') : require('./images/lb_off.png')} />
                  <div className="subheader-long">Dining Room Lights</div>
                </div>
              </div>
            </div>
            <div className="widget-layout">
              <div className="widget widgetGrey" onClick={() =>
                  {this.props.toggleState('livingState', this.props.livingState)}}>
                <div className="deviceImg">
                  <img className="deviceImgSize"
                       src={this.props.livingState ? require('./images/lb_on.png') : require('./images/lb_off.png')} />
                  <div className="subheader-long">Living Room Lights</div>
                </div>
              </div>
              <div className="widget widgetBlue" onClick={() =>
                  {this.props.toggleState('hallwayState', this.props.hallwayState)}}>
                <div className="deviceImg">
                  <img className="deviceImgSize"
                       src={this.props.hallwayState ? require('./images/lb_on.png') : require('./images/lb_off.png')} />
                  <div className="subheader">Hallway Lights</div>
                </div>
              </div>
            </div>
        </div>
      );
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    allState: state.appState.allState,
    bedroomState: state.appState.bedroomState,
    diningState: state.appState.diningState,
    hallwayState: state.appState.hallwayState,
    kitchenState: state.appState.kitchenState,
    livingState: state.appState.livingState,
    dataLoaded: state.appState.dataLoaded
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    retrieveData: () => dispatch(retrieveData()),
    toggleState: (stateType, buttonState) => dispatch(toggleState(stateType, buttonState))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
