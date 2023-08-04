import React from "react";
import { Link } from "react-router-dom";
import bear from "./img/bear.png";
import "./nav.css";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export const Nav = () => {
	return (
		<>
			<nav>
				<Container maxWidth="lg" pt={3}>
					<Grid container>
						<Grid item xs={6}>
						<a href="/" className="logoCont"><h1><img src={bear} className="logo" alt="Apetitoso" /> Apetitoso</h1></a>
						</Grid>
						<Grid item xs={6}>
							<ul>
								<li><a href="/">Home</a></li>
								<li><a href="menu">Menu</a></li>
								<li><a href="about">About</a></li>
								{/* <li>Rewards</li> */}
								<li><a href="account">Hi, Nick</a></li>
							</ul>
						</Grid>
					</Grid>
				</Container>
			</nav>
		</>
	);
};
