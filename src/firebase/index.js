import firebase from 'firebase'

export const config = {
  apiKey: "AIzaSyCWvbxLdisdjLDH6sxziQKtOOnEyaEJJ7s",
  authDomain: "divethru-14f14.firebaseapp.com",
  databaseURL: "https://divethru-14f14.firebaseio.com",
  projectId: "divethru-14f14",
  storageBucket: "divethru-14f14.appspot.com",
  messagingSenderId: "5071479695"
}

firebase.initializeApp(config)

var firebaseRef = firebase.database().ref()
export default firebase
export var userRef = firebaseRef.child('Users')
export var catRef = firebaseRef.child('Category')
export var JounralRef = firebaseRef.child('Jounral')
export var QuoteRef = firebaseRef.child('DailyQuotes')
