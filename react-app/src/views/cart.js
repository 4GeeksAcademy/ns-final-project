import React, { useContext, useState, useEffect } from "react";
import { menuContext } from "../Context";
import { Redirect, useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export const Cart = (props) => {

	const { currentSelectedBase } = useContext(menuContext);
	
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

				</Grid>
			</Container>
		</div>
	);
};
