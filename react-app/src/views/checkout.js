import React, { useContext, useState, useEffect, useMemo } from "react";
import { menuContext } from "../Context";
import { Redirect, useNavigate, useHistory } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export const Cart = (props) => {

	// const { user, myOrder } = useContext(menuContext);

	// let cartNo = (myOrder.length) ? myOrder.length : '';

	// // local storage
	// localStorage.clear();
	// let realNo = localStorage.getItem('amt');
	// console.log(realNo);

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

	// const calcTotal = useMemo(
	// 	() => {
	// 		const totals = {
	// 			subtotal: 0,
	// 			tax: 0,
	// 			total: 0
	// 		}
	// 		myOrder.forEach((order) => {
	// 			totals.subtotal += order.price.md;
	// 		});
	// 		totals.tax = totals.subtotal*0.07;
	// 		totals.total = totals.subtotal + totals.tax;
	// 		return totals;
	// 	},
	// 	[myOrder]
	// );

	// const removeItem = (e) => {
	// 	e.target.parentElement.parentElement.parentElement.remove();
	// 	cartNo = cartNo -1;
		
	// }
	
	return (
		<>
		</>
		// <Box
    //   role="presentation"
		// 	className="cartDrawer"
    // >
		// 	<h2>My Order:</h2>
    //   <List>
		// 		{myOrder.map((order) => {
		// 			return (
		// 				<>
		// 					<li className="drinkDrawer">
		// 						<img src={order.img} alt="Juice" />
		// 						<p className="lineItem">
		// 							<span className="c_first c_auto" onClick={removeItem}><CloseIcon></CloseIcon></span>
		// 							<span>{order.name}</span>
		// 							<span className="tac c_auto">{ getDrinkQty(order.name) }</span>
		// 							<span>${order.price.md.toFixed(2)}</span>
		// 						</p>
		// 					</li>
		// 				</>
		// 			)
		// 		}) }
        
				
    //   </List>
    //   <Divider />
		// 	{myOrder.length > 0 ? 
		// 		<>
		// 			<ul>
		// 			<li>
		// 				<p className="lineItem">
		// 					<span>Subtotal:</span>
		// 					<span>${calcTotal.subtotal.toFixed(2)}</span>
		// 				</p>
		// 			</li>
		// 			<li>
		// 				<p className="lineItem">
		// 					<span>Tax: </span>
		// 					<span className="tax">${calcTotal.tax.toFixed(2)}</span>
		// 				</p>
		// 			</li>
		// 		</ul>
		// 		<Divider />
		// 		<p className="lineItem">
		// 			<span><strong>Total:</strong></span>
		// 			<span><strong>${calcTotal.total.toFixed(2)}</strong></span>
		// 		</p>
		// 		<a href="/checkout" className="btn" style={{display: 'block', width: 'calc(100% - 30px)', marginTop: '20px'}}>Purchase</a>
		// 	</>
		// 	: 
		// 	<>
		// 		<img src="empty.png" alt="Empty" className="emptyCart" />
		// 		<p>Cart is empty</p>
		// 		<a href="/menu">Let's find the right juice for you</a>
		// 	</>
		// 	}
    // </Box>
	 );
};