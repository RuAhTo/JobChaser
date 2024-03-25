import React from 'react' 
import ReactDOM from 'react-dom/client' 
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import App from './App'
import './index.css'
import AuthProvider from './components/context/AuthContext'


// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// }

// const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')!).render( 
<React.StrictMode>
  <AuthProvider>
    <App/>
  </AuthProvider>
</React.StrictMode>, )