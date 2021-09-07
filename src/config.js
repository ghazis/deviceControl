import { initializeApp } from 'firebase/app';

export const deviceControlConfig = initializeApp({
  apiKey: "AIzaSyCVUXU3zSRVjtvYndgCYd8u9xWyy2oUFuk",
  authDomain: "device-control-74788.firebaseapp.com",
  databaseURL: "https://device-control-74788.firebaseio.com"
});

export const commandCenterConfig = initializeApp({
  apiKey: "AIzaSyD7rqT-dQvOCqO52GIf4pqXUFreFU6Q4_o",
  authDomain: "command-center-f8571-default-rtdb.firebaseio.com",
  databaseURL: "https://command-center-f8571-default-rtdb.firebaseio.com/"
}, 'commandCenterDB');
