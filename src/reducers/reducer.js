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

const initialCmdCenterState = {}

export function appState(state = initialAppState, action) {
   switch (action.type) {
      case 'SET_USER_LOGGED_IN':
         return {
            ...state,
               userLoggedIn: action.userLoggedIn
         }
      case 'SET_DEVICE_STATES':
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
      case 'SET_DEVICE_STATE':
         return {
            ...state,
               [action.stateType]: action.newState
         }
      case 'SET_DEVICE_STATES':
         return {
            ...state,
            ...action.newStates
         }
      default:
         return state;
   }
}

export function cmdCenterState(state = initialCmdCenterState, action) {
   switch (action.type) {
      case 'SET_CMD_STATES':
         return {
            ...state,
            ...action.newStates
         }
      default:
         return state;
   }
}

export default combineReducers({
   appState,
   deviceState,
   cmdCenterState
})
