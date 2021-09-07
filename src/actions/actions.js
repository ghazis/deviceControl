import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";

import { deviceControlConfig, commandCenterConfig } from '../config';

const auth = getAuth();
const deviceControlDB = getDatabase(deviceControlConfig);
const commandCenterDB = getDatabase(commandCenterConfig);

function setUserLoggedIn(userLoggedIn) {
   return {
      type: 'SET_USER_LOGGED_IN',
      userLoggedIn: userLoggedIn
   };
}

function setCmdStates(newStates) {
   return {
      type: 'SET_CMD_STATES',
      newStates: newStates
   };
}

function setDeviceStates(newStates) {
   return {
      type: 'SET_DEVICE_STATES',
      newStates: newStates
   };
}

export function setDeviceState(stateType, newState) {
   return {
      type: 'SET_DEVICE_STATE',
      stateType: stateType,
      newState: newState
   };
}

export function retrieveData() {
   return dispatch => {
      onValue(ref(commandCenterDB, '/'), (snapshot) => {
         dispatch(setCmdStates(snapshot.val()))
      });

      onValue(ref(deviceControlDB, '/'), (snapshot) => {
         dispatch(setDeviceStates(snapshot.val()));
      });
   }
}

export function toggleState(stateType, currentState) {
   return dispatch => {
      dispatch(setDeviceState(stateType, !currentState));
      set(ref(deviceControlDB, stateType), !currentState)
   }
}


export const speak = (speech) => {
   set(ref(commandCenterDB, 'tts/args'), speech);
   set(ref(commandCenterDB, 'tts/run'), 1);
}


export const generatePortfolio = () => {
   return dispatch => {
      set(ref(commandCenterDB, 'etrade/run'), 1);
   }
}


export function signIn() {
   const provider = new GoogleAuthProvider();

   return signInWithRedirect(auth, provider);
}

export function watchForAuth() {
   return dispatch => {
      onAuthStateChanged(auth, (user) => {
       if (user) {
         if (user.email=='ashhad.ghazi@gmail.com' || user.email=='qurratulann.butt@gmail.com') {
            dispatch(setUserLoggedIn(true));
         }
       }
      });
   }
}
