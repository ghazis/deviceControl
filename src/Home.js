import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { toggleState } from './actions/actions';

const convertBoolToName = (bool) => {
  var name = bool ? "On" : "Off";
  return name
}

const Home = ({deviceState, toggleState}) => {

      return (
        <div>
            <div className="widget-layout">
              <div className="widget widgetTeal" onClick={() =>
                  {toggleState('allState', deviceState.allState)}}>
                <div className="deviceImg">
                  <img className="deviceImgSize"
                       src={deviceState.allState ? require('./images/lb_on.png') : require('./images/lb_off.png')} />
                  <div className="subheader">All Lights</div>
                </div>
              </div>
              <div className="widget widgetGreen" onClick={() =>
                  {toggleState('bedroomState', deviceState.bedroomState)}}>
                <div className="deviceImg">
                  <img className="deviceImgSize"
                       src={deviceState.bedroomState ? require('./images/lb_on.png') : require('./images/lb_off.png')} />
                  <div className="subheader">Bedroom Lights</div>
                </div>
              </div>
            </div>
            <div className="widget-layout">
              <div className="widget widgetPurple" onClick={() =>
                  {toggleState('kitchenState', deviceState.kitchenState)}}>
                <div className="deviceImg">
                  <img className="deviceImgSize"
                       src={deviceState.kitchenState ? require('./images/lb_on.png') : require('./images/lb_off.png')} />
                  <div className="subheader">Kitchen Lights</div>
                </div>
              </div>
              <div className="widget widgetYellow" onClick={() =>
                  {toggleState('diningState', deviceState.diningState)}}>
                <div className="deviceImg">
                  <img className="deviceImgSize"
                       src={deviceState.diningState ? require('./images/lb_on.png') : require('./images/lb_off.png')} />
                  <div className="subheader-long">Dining Room Lights</div>
                </div>
              </div>
            </div>
            <div className="widget-layout">
              <div className="widget widgetGrey" onClick={() =>
                  {toggleState('livingState', deviceState.livingState)}}>
                <div className="deviceImg">
                  <img className="deviceImgSize"
                       src={deviceState.livingState ? require('./images/lb_on.png') : require('./images/lb_off.png')} />
                  <div className="subheader-long">Living Room Lights</div>
                </div>
              </div>
              <div className="widget widgetBlue" onClick={() =>
                  {toggleState('hallwayState', deviceState.hallwayState)}}>
                <div className="deviceImg">
                  <img className="deviceImgSize"
                       src={deviceState.hallwayState ? require('./images/lb_on.png') : require('./images/lb_off.png')} />
                  <div className="subheader">Hallway Lights</div>
                </div>
              </div>
            </div>
        </div>
      )
}

const mapStateToProps = (state) => {
  return {
    deviceState: state.deviceState
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleState: (stateType, buttonState) => dispatch(toggleState(stateType, buttonState))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
