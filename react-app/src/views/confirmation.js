import React, {useContext} from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link, useParams } from "react-router-dom";
import { menuContext } from "../Context";


export const Confirmation = () => {	

	let { orderId } = useParams();
	const {myOrder} = useContext(menuContext);
	const { user } = useContext(menuContext);
	console.log(myOrder);

	const getDrinkQty = (orderName) => {
		const drinkQtyAmt = {};
		myOrder.forEach((order) => {
			if (drinkQtyAmt[order.name]) {
				drinkQtyAmt[order.name] = drinkQtyAmt[order.name] + 1;
			}
			else {
				drinkQtyAmt[order.name] = 1;
			}
		})
		return drinkQtyAmt[orderName];
	}

	return (
		<main>
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item>
						<h2 style={{textTransform: 'initial'}}>Thank you {user.name}, for your order!</h2>
						{/* <img src={ orderImg } alt="Juice" /> */}
						<p>Your order number is <strong>{ orderId }</strong>.</p>

						{myOrder.map((order) => {
							return (
								<>
									<li className="drinkDrawer">
										<img src={`../${order.img}`} alt="Juice" />
										<p className="lineItem">
											<span>{order.name}</span>
											<span className="tac c_auto">{ getDrinkQty(order.name) }</span>
											<span>${order.price.md.toFixed(2)}</span>
										</p>
									</li>
								</>
							)
						}) }

						<Link to="/menu">Back to menu</Link>
					</Grid>
				</Grid>
			</Container>
		</main>
	);
};
