import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import bear from "./img/bear.png";
import "./styles/nav.scss";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { menuContext } from "./Context";
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './index';
import Person2Icon from '@mui/icons-material/Person2';
import BlenderIcon from '@mui/icons-material/Blender';
import ListIcon from '@mui/icons-material/List';

import CloseIcon from '@mui/icons-material/Close';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const provider = new GoogleAuthProvider();

export const Nav = () => {

	const { user, myOrder } = useContext(menuContext);

	let cartNo = (myOrder.length) ? myOrder.length : '';

	// local storage
	localStorage.clear();
	let realNo = localStorage.getItem('amt');
	// console.log(realNo);

	// drawer
	const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

	const getDrinkQty = (orderName) => {
		const drinkQtyAmt = {};
		myOrder.forEach((order) => {
			if (drinkQtyAmt[order.name]) {
				drinkQtyAmt[order.name] = drinkQtyAmt[order.name] + 1;
			}
			else {
				drinkQtyAmt[order.name] = 1;
			}
			localStorage.setItem('amt', cartNo);
		})
		return drinkQtyAmt[orderName];
	}

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

	const removeItem = (e) => {
		e.target.parentElement.parentElement.parentElement.remove();
		cartNo = cartNo -1;
	}

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
			className="cartDrawer"
    >
			<h2>My Order:</h2>
      <List className="cartDrinks">
				{myOrder.map((order) => {
					return (
						<>
							<li className="drinkDrawer">
								<img src={order.img} alt="Juice" />
								<p className="lineItem">
									<span className="c_first c_auto" onClick={removeItem}><CloseIcon></CloseIcon></span>
									<span>{order.name}</span>
									<span className="tac c_auto">{ getDrinkQty(order.name) }</span>
									<span>${order.price.md.toFixed(2)}</span>
								</p>
							</li>
							{/* <li className="drinkDrawer">
								<img src="red.png" alt="Juice" />
								<p className="lineItem">
								<span className="c_first c_auto"><CloseIcon></CloseIcon></span>
									<span className="first">Watermelon</span>
									<span className="tac c_auto">1</span>
									<span>$5.00</span>
								</p>
							</li> */}
						</>
					)
				}) }
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
				
      </List>
      <Divider />
			{myOrder.length > 0 ? 
				<>
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
				<a href="/checkout" className="btn" style={{display: 'block', width: 'calc(100% - 30px)', marginTop: '20px'}}>Purchase</a>
			</>
			: 
			<>
				<img src="empty.png" alt="Empty" className="emptyCart" />
				<p>Cart is empty</p>
				<a href="/menu">Let's find the right juice for you</a>
			</>
			}
    </Box>
  );

	return (
		<>
			<nav>
				<Container maxWidth="lg" pt={3}>
					<Grid container style={{ justifyContent: 'space-between'}}>
						<Grid item>
						<a href="/" className="logoCont"><h1><img src={bear} className="logo" alt="Apetitoso" /> <span>Apetitoso</span></h1></a>
						</Grid>
						<Grid item>
							<ul>
								<li>
									<a href="/menu" className="navNames">
										<ListIcon /><span className="hideSmall">Menu</span>
									</a>
								</li>
								<li>
									<a href="/about" className="navNames">
										<BlenderIcon /><span className="hideSmall">About</span>
									</a>
								</li>
								<li>{ (user.name) ? (
									<a href="/account" className="navNames">
										<Person2Icon />
										<span className="hideSmall">Hi, {user.name}</span>
									</a>
								) : 
									<a href="/" className="navNames" onClick={(e) => {
										e.preventDefault();
										signInWithPopup(auth, provider)
											.then(async (result) => {

												// This gives you a Google Access Token. You can use it to access the Google API.
												const credential = GoogleAuthProvider.credentialFromResult(result);
												const token = credential.accessToken;

												// The signed-in user info.
												const user = result.user;
												console.log('token: ', token);
												console.log('user: ', user);

												const res = await fetch(`${process.env.REACT_APP_FIREBASE_FUNCTIONS_HOST}/fourgeeks-final/us-central1/signUpOrSigninUser`, {
													method: 'post',
													body: JSON.stringify({ email: user.email, name: user.displayName }),
													headers: {
														'Content-Type': 'application/json'
													}
												});

												const dbUser = await res.json();
											}).catch((error) => {
												console.error(error);
								
											});
									}}><Person2Icon /> Sign in</a>
								}
								</li>
								<li>
									{['right'].map((anchor) => (
										<React.Fragment key={anchor}>
											<div className="cartCont">
												<div onClick={toggleDrawer(anchor, true)}>
													<ShoppingCartIcon className="cart"></ShoppingCartIcon>
													<div className="cartNo">{realNo} {cartNo}</div>
												</div>
												{/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
												<Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} >
													{list(anchor)}
												</Drawer>
											</div>
										</React.Fragment>
									))}
								</li>
								
							</ul>
						</Grid>
					</Grid>
				</Container>
			</nav>
		</>
	);
};
