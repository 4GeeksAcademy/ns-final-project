import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { menuContext } from "../Context.js";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import "../styles/menu.scss";
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

	const { setCurrentSelectedBase, setMyOrder } = useContext(menuContext);
	const onSelectBase = (e) => {
		const base = getBase(e);
		setCurrentSelectedBase(base);
	}

	function getBase(e) {
		let baseName = e.target.classList[0];
		if (!baseName) {
			baseName = e.target.parentElement.classList[0];
		}
		const base = bases.find((base) => {
			console.log(base.id, baseName, e.target, base.GF, base.price.md);
			return base.id === baseName;
		});
		return base;
	}

	const addToCart = (e) => {
		const base = getBase(e);
		setMyOrder((prevState) => {
			return [...prevState, { ...base, defaultBase: true }]
		});
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
		<main>
			<Container maxWidth="lg">
				<h1 style={{ marginBottom: '0', textAlign: 'center'}}>Select your juice</h1>
				<img src={loader} alt="loader" className="loader" />
				<Grid container spacing={2}>
					{bases.map((base) => 
						<Grid item xs={12} sm={6} md={3}>
							<div className="product tac" style={{background: base.hex}}>
								<div>
									<div className={(base.GF === false) ? "gf-hidden" : "gf"}>
										<Tooltip title="Gluten-Free">
											<IconButton>
												<span className="gf-lg">GF</span>
											</IconButton>
										</Tooltip>
									</div>
									<img src={base.img} alt="Juice" />
									<h2>{base.name}</h2>
									<p><strong>${base.price.md.toFixed(2)}</strong> &nbsp;| &nbsp;{base.calories} Calories</p>
									<p className="capIt">{base.juices.join(", ")}</p>
									<div className="flex" style={{justifyContent: 'space-between'}}>
										<Link to="/pdp" className={base.id} onClick={onSelectBase}>Customize</Link>
										<button className={base.id + ' btn-small'} onClick={addToCart}>+ Add</button>
									</div>
								</div>
							</div>
						</Grid>
					)}
				</Grid>
			</Container>
		</main>
	);
};
