import { initializeApp, getApps } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReduxSagaFirebase from 'redux-saga-firebase'

const firebaseConfig = {
  // apiKey: process.env.GOOGLE_API_KEY,
  // authDomain: process.env.GOOGLE_AUTH_DOMAIN,
  // projectId: process.env.GOOGLE_PROJECT_ID,
  // storageBucket: process.env.GOOGLE_STORAGE_BUCKET,
  // messagingSenderId: process.env.GOOGLE_MESSAGING_SENDER_ID,
  // appId: process.env.GOOGLE_APP_ID,
  // measurementId: process.env.GOOGLE_MEASUREMENT_ID,
  apiKey: 'AIzaSyD2I3WHfJcLVxr_4XGnlvUEQAal6bohJyo',
  authDomain: 'cms-demo-91cf1.firebaseapp.com',
  projectId: 'cms-demo-91cf1',
  storageBucket: 'cms-demo-91cf1.appspot.com',
  messagingSenderId: '364522847776',
  appId: '1:364522847776:web:765bb1112019ced28bc645',
}

const app = initializeApp(firebaseConfig)
const rsf = new ReduxSagaFirebase(app)
const db = getFirestore(app)
const auth = getAuth(app)

const firebase = {
  rsf,
  auth,
  db,
}

export default firebase
