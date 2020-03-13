import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyA6HhPCvxls1m5wdQu7YCsZ60vBt2vzktY",
authDomain: "vue-my-smoothies.firebaseapp.com",
databaseURL: "https://vue-my-smoothies.firebaseio.com",
projectId: "vue-my-smoothies",
storageBucket: "vue-my-smoothies.appspot.com",
messagingSenderId: "422758648227",
appId: "1:422758648227:web:0529d4b9f1194c6bbcb216",
measurementId: "G-99KV5H297K"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp.firestore()

