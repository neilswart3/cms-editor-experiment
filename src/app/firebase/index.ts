import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReduxSagaFirebase from 'redux-saga-firebase'

const firebaseConfig = {
  apiKey: process.env.GOOGLE_API_KEY,
  authDomain: process.env.GOOGLE_AUTH_DOMAIN,
  projectId: process.env.GOOGLE_PROJECT_ID,
  storageBucket: process.env.GOOGLE_STORAGE_BUCKET,
  messagingSenderId: process.env.GOOGLE_MESSAGING_SENDER_ID,
  appId: process.env.GOOGLE_APP_ID,
}

let app
let rsf
let db
let auth

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig)
  rsf = new ReduxSagaFirebase(app)
  db = getFirestore(app)
  auth = getAuth(app)
}

const firebase = {
  rsf,
  auth,
  db,
}

export default firebase
