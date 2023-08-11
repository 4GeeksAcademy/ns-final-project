import React, { useContext } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { auth } from "../index";
import { useHistory } from 'react-router-dom';
import { menuContext } from "../Context";

export const Account = () => {	

	const { user } = useContext(menuContext);
	const history = useHistory();

	const logItOut = () => {
		auth.signOut();
		history.push('/menu');
		// return <Redirect to={{ pathname: "/" }} />;
	}

	return (
		<div>
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item>
						<h1>Hi { user.name }</h1>
						<button onClick={logItOut}>Sign out</button>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};
