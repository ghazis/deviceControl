import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { speak, generatePortfolio } from './actions/actions';

const SecretPage = ({deviceState, cmdCenterState, toggleState, generatePortfolio}) => {
    const [speechText, setSpeechText] = useState();
    const [genBtnLabel, setGenBtnLabel] = useState("Generate Portfolio");
    const [showLoadIcon, setShowLoadIcon] = useState(false);

    useEffect(() => {
      const states = cmdCenterState.etrade.run+cmdCenterState.tts.run;
      if (states.includes("running")) setShowLoadIcon(true);
      else setShowLoadIcon(false);
    }, [cmdCenterState])
    

    return (
      <React.Fragment>
        <div className="secret-page-layout">
              <a className="portfolio-link" href="https://docs.google.com/spreadsheets/d/1LWlnxw8ktlrEBfcUyoWdw89eKmeJTMwX" target="_blank">Go To Portfolio</a>
              <button className="generate-button" onClick={() => generatePortfolio()}>{genBtnLabel}</button>
              <input className="speech-field" placeholder="Make Computer Speak" value={speechText} onChange={e => setSpeechText(e.target.value)}/>
              <button className="speech-btn" onClick={() => speak(speechText)}>Speak</button>
              { showLoadIcon ? <img className="loading-gif" src={require("./images/loading.gif")} /> :
                               <div className="loading-gif" />}
        </div>
        <Link to="/" className="link footer">{"<"} Go Back</Link>
      </React.Fragment>
    )
}

const mapStateToProps = (state) => {
  return {
    cmdCenterState: state.cmdCenterState
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    speak: (speech) => dispatch(speak(speech)),
    generatePortfolio: () => dispatch(generatePortfolio())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SecretPage);
