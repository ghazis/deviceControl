import { combineReducers } from 'redux';

const initialState = {
   allState: false,
   bedroomState: false,
   diningState: false,
   hallwayState: false,
   kitchenState: false,
   livingState: false,
   dataLoaded: false
}

export function appState(state = initialState, action) {
   switch (action.type) {
      case 'SET_STATES':
         return {
            ...action.newStates,
               dataLoaded: true
         }
      case 'SET_STATE':
         return {
            ...state,
               [action.stateType]: action.newState
         }
      default:
         return state;
   }
}

export default combineReducers({
   appState
})
