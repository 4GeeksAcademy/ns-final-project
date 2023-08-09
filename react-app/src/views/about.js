import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import truck from "../img/truck.jpg";

export const About = () => {	

	return (
		<div>
			<Container maxWidth="lg" style={{background: 'white', margin: '80px auto 40px', paddingBottom: '40px'}}>
				<Grid container spacing={5}>
					<Grid item xs={6}><img src={truck} alt="Juice Truck" className="fw" /></Grid>

					<Grid item xs={6}>
						<h1>About Us</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum cursus diam ut pulvinar. Fusce mauris ex, volutpat ut congue vitae, viverra sit amet arcu. Duis porta dolor vitae eros interdum, vel rhoncus purus eleifend. Mauris vel felis accumsan, tempus tortor id.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum cursus diam ut pulvinar. Fusce mauris ex, volutpat ut congue vitae, viverra sit amet arcu. Duis porta dolor vitae eros interdum, vel rhoncus purus eleifend. Mauris vel felis accumsan, tempus tortor id.</p>
					</Grid>

				</Grid>
			</Container>
		</div>
	);
};
