import { useEffect } from 'react';
import './App.scss';
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './index';
import { Context } from './Context';
import { BrowserRouter, Route, Switch as Routes, Link } from "react-router-dom";
import { Home } from "./views/home.js";
import { Menu } from "./views/menu.js";
import { Pdp } from "./views/pdp.js";

const provider = new GoogleAuthProvider();

// provider.setCustomParameters({
//   redirect_uri: 'https://elvishernandez-didactic-carnival-x5jgw56wqqwf9pvj-9099.preview.app.github.dev/'
// })

function App() {

  // const { setUser } = useContext(Context);


  return (
    <div className="App">
      <button onClick={(e) => {
        signInWithPopup(auth, provider)
          .then(async (result) => {

            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // The signed-in user info.
            const user = result.user;
            console.log('token: ', token);
            console.log('user: ', user);

            const res = await fetch(`${process.env.REACT_APP_FIREBASE_FUNCTIONS_HOST}/fourgeeks-final/us-central1/signUpOrSigninUser`, {
              method: 'post',
              body: JSON.stringify({ email: user.email, name: user.displayName }),
              headers: {
                'Content-Type': 'application/json'
              }
            });

            const dbUser = await res.json();
          }).catch((error) => {
            console.error(error);
     
          });
        // createUserWithEmailAndPassword(auth, "elvishernandeztheone@gmail.com", "password")
        //   .then((res) => console.log(res))
        //   .catch((err) => console.error(err))
      }}>Sign in</button>

      {/* <button onClick={() => auth.signOut()}>Sign out</button> */}
    </div>
  );
}

export default App;
