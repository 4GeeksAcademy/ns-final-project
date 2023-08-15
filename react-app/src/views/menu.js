import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { menuContext } from "../Context.js";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import "../menu.scss";
import loader from "../img/animated-fruit.gif";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


// Card Component
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// import { bases } from '../Context';

export const Menu = () => {

	const [bases, setBases] = useState([]);

	useEffect(() => {
		fetchBases();
	}, [])

	const { setCurrentSelectedBase } = useContext(menuContext);
	const onSelectBase = (e) => {
		let baseName = e.target.classList[0];
		if (!baseName) {
			baseName = e.target.parentElement.classList[0];
		}
		const base = bases.find((base) => {
			console.log(base.id, baseName, e.target, base.GF, base.price.md);
			return base.id === baseName;
		});
		setCurrentSelectedBase(base);

		// console.log(e.target);
	}

	const fetchBases = async () => {

		try {

			const res = await fetch('http://127.0.0.1:5001/fourgeeks-final/us-central1/getBases');
			const data = await res.json();
			document.querySelector('.loader').classList.add('hidden');

			setBases(data.data);

			console.log(data.data);
		}
		catch (e) {
			console.error(e);
		}
	}

	return (
		<div>
			<Container maxWidth="lg" sx={{mb: 2, mt: 2}}>
				<img src={loader} alt="loader" className="loader" />
				<Grid container spacing={2} xs>
					{bases.map((base) => 
						<Grid item xs={6} sm={4} md={3}>
							<Link to="/pdp" className="product tac">
								<div className={base.id} onClick={onSelectBase}>
									<div className={(base.GF === false) ? "gf-hidden" : "gf"}>
									<Tooltip title="Gluten-Free">
										<IconButton>
											<span className="gf-lg">GF</span>
										</IconButton>
									</Tooltip>
									</div>
									<img src={base.img} alt="Juice" />
									<h3>{base.name}</h3>
									<p>{base.calories} Calories</p>
									<p>${base.price.md.toFixed(2)}</p>
								</div>
								{/* <div className={base.name} onClick={onSelectBase}>
									<Card sx={{ maxWidth: 345 }}>
										<CardActionArea>
											<CardMedia component="img" image={watermelon} alt="Juice" />
											<CardContent>
												<Typography gutterBottom variant="h5" component="div">
													{base.name}
												</Typography>
												<Typography variant="body2" color="text.secondary">
													380 Calories
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</div> */}
							</Link>
						</Grid>
					)}
				</Grid>
			</Container>
		</div>
	);
};
