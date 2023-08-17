import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link, useParams } from "react-router-dom";


export const Confirmation = () => {	

	let { orderId } = useParams();

	return (
		<main>
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item>
						<h1>Thank you for your order!</h1>
						{/* <img src={ orderImg } alt="Juice" /> */}
						<p>Your order number is <strong>{ orderId }</strong>.</p>
						<Link to="/menu">Back to menu</Link>
					</Grid>
				</Grid>
			</Container>
		</main>
	);
};
