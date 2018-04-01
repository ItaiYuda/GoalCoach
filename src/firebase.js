import * as firebase from 'firebase';

const confing = {
  apiKey: "AIzaSyBWtjEGjrWWj15giY3xWipYbSHPl8P87HY",
  authDomain: "goalcoach-2f298.firebaseapp.com",
  databaseURL: "https://goalcoach-2f298.firebaseio.com",
  projectId: "goalcoach-2f298",
  storageBucket: "",
  messagingSenderId: "177665424744"
};

export const firebaseApp = firebase.initializeApp(confing);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoalRef');
