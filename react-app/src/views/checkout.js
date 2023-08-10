import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export const Checkout = () => {	

	const onSubmitHandler = (e) => {
    e.preventDefault();
   this.props.history.push('/confirmation')
  }

	return (
		<div>
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item>
						<h1>Checkout Page</h1>
						<form onSubmit={onSubmitHandler}>
							<button type="submit">Order</button>
						</form>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};
