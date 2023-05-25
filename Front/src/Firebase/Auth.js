import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./firebase.config";

  class Authfunc {
    constructor() {
        this.auth = getAuth(app);
    }
    SignUp(email, password) {
      return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(this.auth, email, password)
          .then((userCredential) => {
            
            resolve("Signup successfull");
          })
          .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
              reject('That email address is already in use!');
            }
            if (error.code === 'auth/invalid-email') {
              reject('That email address is invalid!');
            }
          });
      });
    }
    
    Login(email, password) {
      return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(this.auth, email, password)
          .then((userCredential) => {
            resolve("Login successfull");
          })
          .catch((error) => {
            if (error.code === 'auth/invalid-email') {
              reject("L'email saisi est incorrect");
            }
            if (error.code === 'auth/wrong-password') {
              reject("Le mot de passe est incorrect");
            }
            if (error.code === 'auth/user-not-found') {
              reject("L'email et le mot de passe sont incorrects");
            }
          });
      });
    }
    
  Logout(){
      signOut(this.auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }
  }

export default Authfunc;