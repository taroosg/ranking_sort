var firebaseConfig = {
  apiKey: "AIzaSyBhorsjw3oZjkKRochNFiiP37PuCoM00lQ",
  authDomain: "api-test-2019.firebaseapp.com",
  databaseURL: "https://api-test-2019.firebaseio.com",
  projectId: "api-test-2019",
  storageBucket: "api-test-2019.appspot.com",
  messagingSenderId: "287388845964",
  appId: "1:287388845964:web:c9557c4dc99f30e0"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
