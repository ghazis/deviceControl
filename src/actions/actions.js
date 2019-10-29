import firebase from 'firebase/app';
import "firebase/database";

function setUserLoggedIn(userLoggedIn) {
   return {
      type: 'SET_USER_LOGGED_IN',
      userLoggedIn: userLoggedIn
   };
}

function setStates(newStates) {
   return {
      type: 'SET_STATES',
      newStates: newStates
   };
}

export function setState(stateType, newState) {
   return {
      type: 'SET_STATE',
      stateType: stateType,
      newState: newState
   };
}

export function retrieveData() {
   return dispatch => {
      firebase.database().ref('/').on('value', function(snapshot) {
         var newStates = {
            allState: snapshot.val().allState,
            bedroomState: snapshot.val().bedroomState,
            diningState: snapshot.val().diningState,
            hallwayState: snapshot.val().hallwayState,
            kitchenState: snapshot.val().kitchenState,
            livingState: snapshot.val().livingState
         }
         dispatch(setStates(newStates));
      });
   }
}

export function toggleState(stateType, currentState) {
   return dispatch => {
      dispatch(setState(stateType, !currentState));
      firebase.database().ref(stateType).set(!currentState);
   }
}


export function signIn() {
 var provider = new firebase.auth.GoogleAuthProvider();

 firebase.auth().signInWithRedirect(provider);
}

export function watchForAuth() {
   return dispatch => {
      firebase.auth().onAuthStateChanged(function(user) {
       if (user) {
         if (user.email=='ashhad.ghazi@gmail.com' || user.email=='qurratulann.butt@gmail.com') {
            dispatch(setUserLoggedIn(true));
         }
       }
      });
   }
}
