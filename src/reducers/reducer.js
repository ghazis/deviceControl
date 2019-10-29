import { combineReducers } from 'redux';

const initialAppState = {
   dataLoaded: false,
   userLoggedIn: false
}

const initialDeviceState = {
   allState: false,
   bedroomState: false,
   diningState: false,
   hallwayState: false,
   kitchenState: false,
   livingState: false
}

export function appState(state = initialAppState, action) {
   switch (action.type) {
      case 'SET_USER_LOGGED_IN':
         return {
            ...state,
               userLoggedIn: action.userLoggedIn
         }
      case 'SET_STATES':
         return {
            ...state,
               dataLoaded: true
         }
      default:
         return state;
   }
}

export function deviceState(state = initialDeviceState, action) {
   switch (action.type) {
      case 'SET_STATE':
         return {
            ...state,
               [action.stateType]: action.newState
         }
      case 'SET_STATES':
         return action.newStates
      default:
         return state;
   }
}

export default combineReducers({
   appState,
   deviceState
})
