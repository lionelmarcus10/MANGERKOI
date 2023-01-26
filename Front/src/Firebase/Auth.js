import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./firebase.config";

  class Authfunc {
    constructor() {
        this.auth = getAuth(app);
    }
    Signup(email, password){
        
        createUserWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Signup successfull")
            return user
            // ...
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }
        
            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
  
          });
          
    }
   Login(email, password){
        let message = ""
        signInWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            message = "Login successfull"
            return message
        })
        .catch((error) => {
          if (error.code === 'auth/invalid-email') {
            message = "L'email saisi est incorrect"
          }
          if (error.code === 'auth/wrong-password') {
            message = "Le mot de passe est incorrect"
          }
          if (error.code === 'auth/user-not-found') {
            message = "L'email et le mot de passe sont incorrects"
          }
            
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