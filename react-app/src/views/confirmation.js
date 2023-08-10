import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

export const Confirmation = () => {	

	return (
		<div>
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item>
						<h1>Thank you for your order!</h1>
						<p>Your order number is 236437.</p>
						<Link to="/menu">Back to menu</Link>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};
