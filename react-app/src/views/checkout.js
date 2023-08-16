import React, { useContext, useRef } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom';
import { menuContext } from '../Context';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom";

import emailjs from '@emailjs/browser';

export const Checkout = () => {	

	const { myOrder } = useContext(menuContext)

	const history = useHistory();

	const form = useRef();

	const sendEmail = (e) => {
		// e.preventDefault(); // prevents the page from reloading when you hit “Send”

		emailjs.sendForm('service_x7ek4wm', 'template_ydzdvuv', form.current, 'nnqZ1AIxfQugh97MX')
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

		console.log(data.data);
		// window.location.href = `mailto:nshwaery@hotmail.com?subject=${mydata}&body="Thanks for your purchase"`;
    history.push(`/confirmation/${mydata}`);

		sendEmail();
	}
	

	return (
		<main>
			<Container maxWidth="lg">
				<Grid container spacing={2}>
				<Link to="/pdp"><ArrowBackIosIcon className="back" /> Back</Link>
				{myOrder.name}
					<Grid item>
						<h1>Checkout Page</h1>
						<form ref={form} onSubmit={onSubmitHandler}>
							<label>Name</label>
							<input type="text" name="user_name" />
							<label>Email</label>
							<input type="email" name="user_email" />
							<label>Message</label>
							<textarea name="message" />
							<button type="submit">Order</button>
						</form>

						{/* <form ref={form} onSubmit={sendEmail}>
							<label>Name</label>
							<input type="text" name="user_name" />
							<label>Email</label>
							<input type="email" name="user_email" />
							<label>Message</label>
							<textarea name="message" />
							<input type="submit" value="Send" />
						</form> */}
					</Grid>
				</Grid>
			</Container>
		</main>
	);
};
