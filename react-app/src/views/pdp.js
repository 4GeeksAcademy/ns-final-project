import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { menuContext } from "../Context";
import { Redirect } from 'react-router-dom'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import WatermelonPdp from "../img/Watermelon-pdp.png";
// import RasberryPdp from "../img/Rasberry-pdp.png";
// import BlueberryPdp from "../img/Blueberry-pdp.png";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// const pathit = `'./img/' + currentSelectedBase.name + '-pdp.png'`;

export const Pdp = (props) => {

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
					<Grid item xs={6}>
						<div className="flex">
							<a href="/menu"><ArrowBackIosIcon className="back" /></a>
							<h1>{currentSelectedBase.name}</h1>
						</div>
						{/* <img src={'./img/'+ currentSelectedBase.name + '-pdp.png'} alt="Juice" className="productShot" /> */}
						<img src={WatermelonPdp} alt="Juice" className="productShot" />
					</Grid>

					<Grid item xs={4}>
						<div>
							<FormControl fullWidth>
								<InputLabel id="custSugarLabel">Sugar</InputLabel>
								<Select
									labelId="custSugarLabel"
									id="custSugar"
									label="Sugar"
								>
									<MenuItem value={0}>0</MenuItem>
									<MenuItem value={1}>1</MenuItem>
									<MenuItem value={2}>2</MenuItem>
								</Select>
							</FormControl>
						</div>

						<div>
							{/* <label htmlFor="custSize">Size: </label>
							<select name="custSize" id="custSize" onChange={custSize} >
								<option value="1">Small</option>
								<option value="2">Medium</option>
								<option value="3">Large</option>
							</select> */}
							<FormControl fullWidth>
								<InputLabel id="custSizeLabel">Size</InputLabel>
								<Select
									labelId="custSizeLabel"
									id="custSize"
									// value={age}
									label="Size"
									// onChange={handleChange}
								>
									<MenuItem value={"Small"}>Small</MenuItem>
									<MenuItem value={"Medium"}>Medium</MenuItem>
									<MenuItem value={"Large"}>Large</MenuItem>
								</Select>
							</FormControl>
						</div>

						<div>
							<FormControl fullWidth>
								<InputLabel id="proteinTypeLabel">Protein Type</InputLabel>
								<Select
									labelId="proteinTypeLabel"
									id="proteinType"
									label="Protein Type"
								>
									<MenuItem value={"None"}>None</MenuItem>
									<MenuItem value={"Whey"}>Whey</MenuItem>
									<MenuItem value={"Soy"}>Soy</MenuItem>
									<MenuItem value={"Plant"}>Plant-Based</MenuItem>
								</Select>
							</FormControl>
						</div>

						<div>
							<FormControl fullWidth pt={3}>
								<InputLabel id="proteinAmtLabel">Protein Amount</InputLabel>
								<Select
									labelId="proteinAmtLabel"
									id="proteinAmt"
									label="Protein Amount"
								>
									<MenuItem value={0}>0</MenuItem>
									<MenuItem value={1}>1</MenuItem>
									<MenuItem value={2}>2</MenuItem>
								</Select>
							</FormControl>
						</div>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};
