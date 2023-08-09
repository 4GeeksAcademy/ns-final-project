import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { menuContext } from "../Context";
import { Redirect } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import WatermelonPdp from "../img/Watermelon-pdp.png";
// import RasberryPdp from "../img/Rasberry-pdp.png";
// import BlueberryPdp from "../img/Blueberry-pdp.png";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Button from '@mui/material/Button';

// const pathit = `'./img/' + currentSelectedBase.name + '-pdp.png'`;

export const Pdp = (props) => {

	const [constants, setConstants] = useState([]);

	useEffect(() => {
		fetchConstants();
	}, []);

	const { item } = props;

	const { currentSelectedBase } = useContext(menuContext);

	function custSugar() {
		//logic
	}
	function custSize() {
		//logic
	}
	function custProteinType() {
		//logic
	}
	function custProteinAmt() {
		//logic
	}

	// const navigateIt = Redirect();

	const goToCheckout = (e) => {
		e.preventDefault();
		// navigateIt('./cart');
	}

	const fetchConstants = async () => {
		try {
			const res = await fetch('http://127.0.0.1:5001/fourgeeks-final/us-central1/getConstants');
			const data = await res.json();
			setConstants(data.data);
			console.log(data.data);
		}
		catch (e) {
			console.error(e);
		}
	}

	const postOrder = async () => {
		try {
			const setOrder = await fetch('http://127.0.0.1:5001/fourgeeks-final/us-central1/getConstants', {method:'POST', headers:{'Content-Type': 'application/json'}, body:JSON.stringify({})});
		}
		catch (e) {
			console.error(e);
		}
	}

	if (!currentSelectedBase) {
		return <Redirect
		to={{
			pathname: "/"
		}}
	/>;
	}
	return (
		<div>
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item xs={6} className="tac">
						<div className="flex">
							<a href="/menu"><ArrowBackIosIcon className="back" /></a>
							<h1>{currentSelectedBase.name}</h1>
						</div>
						{/* <img src={'./img/'+ currentSelectedBase.name + '-pdp.png'} alt="Juice" className="productShot" /> */}
						<img src={currentSelectedBase.imgLrg} alt="Juice" className="productShot" />
					</Grid>

					<Grid item xs={4}>
						<form onSubmit={goToCheckout}>
							<h2>${currentSelectedBase.price.toFixed(2)}</h2>
							<div>
								<Link to="#">Customize</Link>
								{/* <FormControl fullWidth sx={{mb: 2}}>
									<InputLabel id="custSugarLabel">Sugar</InputLabel>
									<Select
										labelId="custSugarLabel"
										id="custSugar"
										label="Sugar"
										style={{backgroundColor: "white"}}
									>
										<MenuItem value={0}>0</MenuItem>
										<MenuItem value={1}>1</MenuItem>
										<MenuItem value={2}>2</MenuItem>
									</Select>
								</FormControl> */}
							</div>

							<div>
								{/* <label htmlFor="custSize">Size: </label>
								<select name="custSize" id="custSize" onChange={custSize} >
									<option value="1">Small</option>
									<option value="2">Medium</option>
									<option value="3">Large</option>
								</select> */}
								<FormControl fullWidth sx={{mb: 2}}>
									<InputLabel id="custSizeLabel">Size</InputLabel>
									<Select
										labelId="custSizeLabel"
										id="custSize"
										// value={age}
										label="Size"
										style={{backgroundColor: "white"}}
										// onChange={handleChange}
									>
										<MenuItem value={"Small"}>Small</MenuItem>
										<MenuItem value={"Medium"}>Medium</MenuItem>
										<MenuItem value={"Large"}>Large</MenuItem>
									</Select>
								</FormControl>
							</div>

							<div>
								<FormControl fullWidth sx={{mb: 2}}>
									<InputLabel id="proteinTypeLabel">Protein Type</InputLabel>
									<Select
										labelId="proteinTypeLabel"
										id="proteinType"
										label="Protein Type"
										style={{backgroundColor: "white"}}
									>
										<MenuItem value={"None"}>None</MenuItem>
										<MenuItem value={"Whey"}>Whey</MenuItem>
										<MenuItem value={"Soy"}>Soy</MenuItem>
										<MenuItem value={"Plant"}>Plant-Based</MenuItem>
									</Select>
								</FormControl>
							</div>

							<div>
								<FormControl fullWidth sx={{mb: 2}}>
									<InputLabel id="proteinAmtLabel">Protein Amount</InputLabel>
									<Select
										labelId="proteinAmtLabel"
										id="proteinAmt"
										label="Protein Amount"
										style={{backgroundColor: "white"}}
									>
										<MenuItem value={0}>0</MenuItem>
										<MenuItem value={1}>1</MenuItem>
										<MenuItem value={2}>2</MenuItem>
									</Select>
								</FormControl>
							</div>
							<button type="submit">Add to order</button>
						</form>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};
