import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import bear from "./img/bear.png";
import "./styles/nav.scss";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { menuContext } from "./Context";
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './index';

const provider = new GoogleAuthProvider();

export const Nav = () => {

	const { user } = useContext(menuContext);

	return (
		<>
			<nav>
				<Container maxWidth="lg" pt={3}>
					<Grid container style={{ justifyContent: 'space-between'}}>
						<Grid item>
						<a href="/" className="logoCont"><h1><img src={bear} className="logo" alt="Apetitoso" /> <span>Apetitoso</span></h1></a>
						</Grid>
						<Grid item>
							<ul>
								<li><a href="/menu">Menu</a></li>
								<li><a href="/about">About</a></li>
								{/* <li>Rewards</li> */}
								{/* <li><a href="account">Hi, { user.name }</a></li> */}
								<li>{ (user.name) ? (
									<a href="/account">Hi, {user.name} </a>
								) : 
									<a href="/" onClick={(e) => {
										e.preventDefault();
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
									}}>Sign in</a>
								}
								</li>
								
							</ul>
						</Grid>
					</Grid>
				</Container>
			</nav>
		</>
	);
};
