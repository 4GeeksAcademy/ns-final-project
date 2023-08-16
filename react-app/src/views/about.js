import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import truck from "../img/truck.jpg";
import "../styles/about.scss";

export const About = () => {	

	return (
		<main>
			<Container maxWidth="lg" className="banner about">
				<Grid container>
					<Grid item md={6} className="imgCont"><img src={truck} alt="Juice Truck" className="fw" /></Grid>

					<Grid item md={6}>
						<h1>About Us</h1>
						<p>Apetitoso, or "A Petite Oso", translating to "The Little Bear" was founded in Miami, FL to provide people with a healthy, all-natural juice blend at a reasonable price.</p>
						<p>By cultivating our own fruits, vegetables and other ingredients, we are able to keep the costs low and use only organic ingredients. Apetitoso food trucks are available at two locations currently, with future plans to expand.</p>
						<p>Currently we are located at <Link to={{ pathname: "https://goo.gl/maps/AB14hAtULR589jTx8"}} target="_blank" rel="noopener noreferrer">Nellie B Moore Park</Link> and <Link to={{pathname: "https://goo.gl/maps/pQn86u9dqVcNut5q7"}} target="_blank" rel="noopener noreferrer">Merrick Park</Link> in Coral Gables.</p>
					</Grid>

				</Grid>
			</Container>
		</main>
	);
};
