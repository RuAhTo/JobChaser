import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

    const firebaseConfig = {
        apiKey: "AIzaSyDbqAERRIRWwnwYGzPIJZLSiyVE-t2scFs",
        authDomain: "jobchaser-8c83f.firebaseapp.com",
        projectId: "jobchaser-8c83f",
        storageBucket: "jobchaser-8c83f.appspot.com",
        messagingSenderId: "978112080893",
        appId: "1:978112080893:web:1ce5c8f92ab8732c214794"
    };
    
const app = initializeApp(firebaseConfig, "jobchaser-8c83f");

const analytics = getAnalytics(app)
const auth = getAuth(app)

export { analytics }
export { auth }
