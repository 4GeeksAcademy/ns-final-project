import React from "react";
import { Container, TextField, Grid } from "@mui/material";
import "../styles/home.scss";

export const Home = () => {
	return (
		<main>
			<Container maxWidth="lg" className="centerIt">
				<Grid container>
					<Grid item sm={6}>
						<h2>Want to know more?</h2>
						<p>Learn about Apetitoso. Founded here in Coral Gables, FL, Apetitoso has plans to expand nationwide. See why we're different and our mission statement. </p>
						<a href="/about">See our story</a>
					</Grid>

					<Grid item className="banner menuPromo" sm={6}>
						<a href="/menu">
							<button className="btn-small" style={{padding: '11px 20px'}}>Pick your drink!</button>
						</a>
					</Grid>

					<Grid item className="banner emailSignup" xs={12}>
						<Grid container>
							<Grid item sm={6}>
								<h2>Want exclusive offers and discounts?</h2>
								<p> Sign up now to ge the latest Apetitoso information!</p>
								<form>
									<TextField size="small" label="Email" placeholder="xxxx@xxxxxx.com" variant="outlined" type="email"/>
									<button type="submit" className="btn-small" style={{padding: '11px 20px', marginLeft: '10px'}}>Submit</button>
								</form>
							</Grid>
							<Grid item sm={6} className="dude"></Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</main>
	);
};
