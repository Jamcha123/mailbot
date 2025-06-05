import { initializeApp } from 'firebase/app'
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { doc, getFirestore, setDoc } from 'firebase/firestore'


const config = {
    apiKey: "",
    authDomain: "mailbot-a84ed.firebaseapp.com",
    projectId: "mailbot-a84ed",
    storageBucket: "mailbot-a84ed.firebasestorage.app",
    messagingSenderId: "65653166020",
    appId: "1:65653166020:web:bf229354528f7884eb1e91",
    measurementId: "G-201TCWFMYY"
}
const app = initializeApp(config)

const auth = getAuth(app)
auth.useDeviceLanguage()

const db = getFirestore(app)

onAuthStateChanged(auth, (user) => {
    if(user == null){
        console.log("user, not found")
    }else{
        console.log("user, logged in")
    }
})