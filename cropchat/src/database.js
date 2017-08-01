import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCEq39n_xZW0QtRIX4_Gfbm0fpB21eTjq0',
  authDomain: 'pwadojo.firebaseapp.com',
  databaseURL: 'https://pwadojo.firebaseio.com',
  projectId: 'pwadojo',
  storageBucket: 'pwadojo.appspot.com',
  messagingSenderId: '445295830164'
}

const firebaseApp = firebase.initializeApp(config)

export const catsRef = firebaseApp.database().ref('pictures')
