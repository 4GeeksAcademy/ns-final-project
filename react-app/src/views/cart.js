import React, { useContext, useState, useEffect } from "react";
import { menuContext } from "../Context";
import { Redirect, useNavigate, useHistory } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export const Cart = (props) => {

	const { currentSelectedBase } = useContext(menuContext);

	const history = useHistory();
	const goToCheckout = (e) => {
		e.preventDefault();
		history.push('/confirmation');
	}
	
	return (
		<div>
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item xs={6} className="tac">
						<div className="flex">
							<a href="/pdp"><ArrowBackIosIcon className="back" /></a>
							<h1>Cart</h1>
						</div>
						<img src={currentSelectedBase.imgLrg} alt="Juice" className="productShot" />
					</Grid>

					<form onSubmit={goToCheckout}>
						<h2 id="drinkPrice">$<span id="drinkVal">{currentSelectedBase.price.md.toFixed(2)}</span></h2>
						<button type="submit">Purchase</button>
					</form>

				</Grid>
			</Container>
		</div>
	);
};
