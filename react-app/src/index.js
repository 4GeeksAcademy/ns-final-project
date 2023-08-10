import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch as Routes, Link } from "react-router-dom";

// Pages
import { Menu } from './views/menu';
import { Pdp } from './views/pdp';
import { Cart } from './views/cart';
import { About } from "./views/about";
import { Home } from "./views/home";
import { Account } from "./views/account";
import { Confirmation } from "./views/confirmation";
import { Checkout } from "./views/checkout";

// Common
import { Nav } from "./nav";
import { Footer } from "./footer";

import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import ContextProvider from "./Context";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const firebaseConfig = {
  apiKey: "AIzaSyCBNCn9NDfX63F1YikmA3IXIACmwy1AevA",
  authDomain: "fourgeeks-final.firebaseapp.com",
  projectId: "fourgeeks-final",
  storageBucket: "fourgeeks-final.appspot.com",
  messagingSenderId: "778547548624",
  appId: "1:778547548624:web:5420248dc67a10279c29d5",
  measurementId: "G-LNKQ02ZQ0T"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
connectAuthEmulator(auth, process.env.REACT_APP_FIREBASE_AUTH_HOST);
connectFirestoreEmulator(firestore, process.env.REACT_APP_FIREBASE_FIRESTORE_HOST);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<Nav></Nav>
		<main>
		<ContextProvider>
				<BrowserRouter>
					<Routes>
						<Route exact path="/"><App /></Route>
						<Route exact path="/home"><Home /></Route>
						<Route exact path="/menu"><Menu /></Route>
						<Route exact path="/pdp"><Pdp /></Route>
						<Route exact path="/cart"><Cart /></Route>
						<Route exact path="/checkout"><Checkout /></Route>
						<Route exact path="/confirmation"><Confirmation /></Route>
						<Route exact path="/about"><About /></Route>
						<Route exact path="/account"><Account /></Route>

						<Route render={() => 
						<>
							<Container maxWidth="lg">
								<Grid container>
									<Grid item xs={12} center>
										<div className="nothing">
											<h1 center>Not found!</h1>
										</div>
									</Grid>
								</Grid>
							</Container>
						</>
						} />
					</Routes>
				</BrowserRouter>
		</ContextProvider>
		</main>
		<Footer></Footer>
	</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
