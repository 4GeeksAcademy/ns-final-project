import React, { useContext } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { auth } from "../index";
import { Redirect } from 'react-router-dom';
import { menuContext } from "../Context";

export const Account = () => {	

	const { user } = useContext(menuContext);

	const logItOut = () => {
		auth.signOut();
		console.log('ggg');
		return <Redirect to={{ pathname: "/" }} />;
	}

	return (
		<div>
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item>
						<h1>Hi { user.displayName }</h1>
						<button onClick={logItOut}>Sign out</button>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};
