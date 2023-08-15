import React, { useContext } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom';
import { menuContext } from '../Context';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom";

export const Checkout = () => {	

	const { myOrder } = useContext(menuContext)

	const history = useHistory();
	const onSubmitHandler = async (e) => {
    e.preventDefault();

		const res = await fetch(`${process.env.REACT_APP_FIREBASE_FUNCTIONS_HOST}/fourgeeks-final/us-central1/insertOrder`, {
			method: 'post',
			body: JSON.stringify({ order: myOrder }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const data = await res.json();

		const mydata = data.data.orderId;

		console.log(data.data);

    history.push(`/confirmation/${mydata}`);
  }

	return (
		<div>
			<Container maxWidth="lg">
				<Grid container spacing={2}>
				<Link to="/pdp"><ArrowBackIosIcon className="back" /> Back</Link>
				{myOrder.name}
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
