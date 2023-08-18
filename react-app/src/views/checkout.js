import React, { useContext, useRef, useMemo } from "react";
import { useHistory } from 'react-router-dom';
import { menuContext } from '../Context';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom";

import emailjs from '@emailjs/browser';
import { Box, Container, Divider, TextField, Button, Card, CardContent, Grid } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export const Checkout = () => {	

	const { myOrder } = useContext(menuContext)

	const history = useHistory();

	const form = useRef();

	const sendEmail = (e) => {
		// e.preventDefault(); // prevents the page from reloading when you hit “Send”

		emailjs.sendForm('service_x7ek4wm', 'template_ydzdvuv', form.current, 'nnqZ1AIxfQugh97MX', {
			from_name: "Apetitoso",
			})
			.then((result) => {
					// show the user a success message
			}, (error) => {
					// show the user an error
			});
	};

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
		// const orderImg = data.data.img;

		console.log(data.data);
		// window.location.href = `mailto:nshwaery@hotmail.com?subject=${mydata}&body="Thanks for your purchase"`;
    history.push(`/confirmation/${mydata}`);
		// /${orderImg}

		sendEmail();
	}

	// const getDrinkQty = (orderName) => {
	// 	const drinkQtyAmt = {};
	// 	myOrder.forEach((order) => {
	// 		if (drinkQtyAmt[order.name]) {
	// 			drinkQtyAmt[order.name] = drinkQtyAmt[order.name] + 1;
	// 		}
	// 		else {
	// 			drinkQtyAmt[order.name] = 1;
	// 		}
	// 		localStorage.setItem('amt', cartNo);
	// 	})
	// 	return drinkQtyAmt[orderName];
	// }

	const calcTotal = useMemo(
		() => {
			const totals = {
				subtotal: 0,
				tax: 0,
				total: 0
			}
			myOrder.forEach((order) => {
				totals.subtotal += order.price.md;
			});
			totals.tax = totals.subtotal*0.07;
			totals.total = totals.subtotal + totals.tax;
			return totals;
		},
		[myOrder]
	);
	
	console.log(myOrder);
	

	return (
		<main>
			<Container maxWidth="lg">
				<form ref={form} onSubmit={onSubmitHandler}>
					<Grid container columnSpacing={10} style={{alignItems: 'flex-start'}}>
						<Grid item md={8}>
						{/* <Link to="/pdp"><ArrowBackIosIcon className="back" /> Back</Link> */}
						<a href="/pdp" className="backTo"><ArrowBackIosIcon className="back" /> Back</a>
							{myOrder.name}
							<h1>Secure Checkout</h1>
							
							{/* <label>Name</label>
							<input type="text" name="user_name" />
							<label>Email</label>
							<input type="email" name="user_email" />
							<label>Message</label>
							<textarea name="message" /> */}

							<TextField margin="normal" label="Name" id="user_name" name="user_name" variant="outlined" fullWidth />
							<TextField margin="normal" type="email" id="user_email" label="Email" name="user_email" variant="outlined" fullWidth />
							<TextField margin="normal" label="Address" variant="outlined" fullWidth />
							<TextField margin="normal" label="City" variant="outlined" sx={{mr: 3}} />
							<TextField margin="normal" label="State" variant="outlined" sx={{mr: 3}} />
							<TextField margin="normal" type="number" label="Zipcode" variant="outlined" />
							<TextField
								label="Credit Card Number" variant="outlined" fullWidth type="number" margin="normal" inputProps={{ maxLength: 16 }}
							/>
							<TextField
								label="CVV" placeholder="XXX" variant="outlined" type="number" margin="normal" 
								inputProps={{ maxLength: 3 }} sx={{mr: 3}} 
							/>
							<TextField 
								label="Expires" variant="outlined" placeholder="MM/YYYY" margin="normal"
								 type="number"
							/>
								
								
						</Grid>
						<Grid item md={4} style={{width: '100%'}}>

						{(myOrder) ? 
						<div className="cartDrawer">
							<ul>
								<li className="drinkDrawer">
									<img src={myOrder[0].img} alt="Juice" />
									<p className="lineItem">
										<span>{myOrder[0].name}</span>
										<span className="tac c_auto">
											{/* { getDrinkQty(myOrder[0].name) } */}
											1
										</span>
										<span>${myOrder[0].price.md.toFixed(2)}</span>
									</p>
								</li>
							</ul>
							<Divider />
							<ul>
								<li className="fw">
									<p className="lineItem">
										<span>Subtotal:</span>
										<span>${calcTotal.subtotal.toFixed(2)}</span>
									</p>
								</li>
								<li className="fw">
									<p className="lineItem">
										<span>Tax: </span>
										<span className="tax">${calcTotal.tax.toFixed(2)}</span>
									</p>
								</li>
							</ul>
							<Divider />
							<p className="lineItem">
								<span><strong>Total:</strong></span>
								<span><strong>${calcTotal.total.toFixed(2)}</strong></span>
							</p>

							{/* <label>Message</label>
							<textarea name="message" /> */}
							<button type="submit" style={{marginTop: '20px'}}>Place Order</button> 
							</div>
						: 'empty'}
							
						</Grid>
					</Grid>
				</form>
			</Container>

			{/* <Container maxWidth="sm">
				<Card variant="outlined" sx={{ mt: 2 }} sm={6}>
					<CardContent>
						<Box component="form">
							<TextField
								label="Name"
								variant="outlined"
								fullWidth
								margin="normal"
							/>

							<TextField
								label="Address"
								variant="outlined"
								fullWidth
								margin="normal"
							/>

							<TextField
								label="Credit Card Number"
								variant="outlined"
								fullWidth
								margin="normal"
								type="number"
								inputProps={{ maxLength: 16 }}
							/>

							<TextField
								label="CVV"
								variant="outlined"
								fullWidth
								margin="normal"
								type="number"
								inputProps={{ maxLength: 3 }}
							/>

							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TextField
										label="Expiry Month"
										variant="outlined"
										fullWidth
										margin="normal"
										type="number"
										inputProps={{ min: 1, max: 12 }}
									/>
								</Grid>
								<Grid item xs={6}>
									<TextField
										label="Expiry Year"
										variant="outlined"
										fullWidth
										margin="normal"
										type="number"
										inputProps={{ min: 2023 }}
									/>
								</Grid>
							</Grid>

							<Button
								variant="contained"
								color="primary"
								type="submit"
								fullWidth
								sx={{ mt: 2 }}
							>
								Pay Now
							</Button>
						</Box>
					</CardContent>
				</Card>
			</Container> */}
		</main>
	);
};
