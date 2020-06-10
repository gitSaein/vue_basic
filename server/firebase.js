import * as firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBrjfPnhvU3SqTTkPjHjGrhtupg-l2Xrio",
    authDomain: "react-basic-f4b00.firebaseapp.com",
    databaseURL: "https://react-basic-f4b00.firebaseio.com",
    projectId: "react-basic-f4b00",
    storageBucket: "react-basic-f4b00.appspot.com",
    messagingSenderId: "7294555700",
    appId: "1:7294555700:web:e5d4a8c4c2f02afe9f9c61",
    measurementId: "G-848HQML4S6"
};

firebase.initializeApp(firebaseConfig)
const databaseRef = firebase.database().ref();
export const