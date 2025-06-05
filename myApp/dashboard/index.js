import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.8.0/firebase-app.js'
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/11.8.0/firebase-auth.js'
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'https://www.gstatic.com/firebasejs/11.8.0/firebase-app-check.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.8.0/firebase-firestore.js'
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'https://www.gstatic.com/firebasejs/11.8.0/firebase-auth.js'

const config = {
    apiKey: "AIzaSyBtX_400T4HgM9-BsdIWG3LzA0AhpIUCbE",
    authDomain: "mailbot-a84ed.firebaseapp.com",
    projectId: "mailbot-a84ed",
    storageBucket: "mailbot-a84ed.firebasestorage.app",
    messagingSenderId: "65653166020",
    appId: "1:65653166020:web:bf229354528f7884eb1e91",
    measurementId: "G-201TCWFMYY"
}

const app = initializeApp(config)

const appcheck = initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider("6LcNplErAAAAAGEmrF6IoJkeVrSfApVjIoFrnTX1"), 
    isTokenAutoRefreshEnabled: true
})

const auth = getAuth(app)
auth.useDeviceLanguage()

const db = getFirestore(app)

const git = new GithubAuthProvider()
git.addScope("https://github.com/Jamcha123/mailbot")

const google = new GoogleAuthProvider();

document.getElementById("google").addEventListener("click", (e) => {
    signInWithPopup(auth, google)
})

document.getElementById("github").addEventListener("click", (e) => {
    signInWithPopup(auth, git)
})


document.getElementById("logout2").addEventListener("click", (e) => {
    signOut(auth)
})

onAuthStateChanged(auth, (user) => {
    if(user == null){
        document.getElementById("login1").style.display = "flex"
        document.getElementById("logout1").style.display = "none"
        console.log("user, not found")
    }else{
        document.getElementById("loginPage").style.display = "none"
        document.getElementById("login1").style.display = "none"
        document.getElementById("logout1").style.display = "flex"
        console.log("user, logged in")
    }
})