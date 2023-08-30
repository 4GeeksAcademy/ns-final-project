import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { menuContext } from "../Context.js";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import "../styles/menu.scss";
import loader from "../img/animated-fruit.gif";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
// import gf from '../img/gf.svg';
import emptyCup from '../img/empty-drink.png';

// import { bases } from '../Context';

export const Menu = () => {

	const [bases, setBases] = useState([]);
	const [others, setOthers] = useState([]);

	useEffect(() => {
		fetchBases();
		fetchOthers();
	}, [])

	const { setCurrentSelectedBase, setMyOrder, setCurrentSelectedOther } = useContext(menuContext);
	const onSelectBase = (e) => {
		const base = getBase(e);
		setCurrentSelectedBase(base);
	}
	const onSelectOther = (e) => {
		const other = getOther(e);
		setCurrentSelectedOther(other);
	}

	function getBase(e) {
		let baseName = e.target.classList[0];
		if (!baseName) {
			baseName = e.target.parentElement.classList[0];
		}
		const base = bases.find((base) => {
			// console.log(base.id, baseName, e.target, base.GF, base.price.md);
			return base.id === baseName;
		});
		return base;
	}
	function getOther(e) {
		let otherName = e.target.classList[0];
		if (!otherName) {
			otherName = e.target.parentElement.classList[0];
		}
		const other = others.find((other) => {
			console.log(other.id, otherName, e.target, other.GF, other.price.md);
			return other.id === otherName;
		});
		return other;
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
	const fetchOthers = async () => {
		try {
			const res = await fetch('http://127.0.0.1:5001/fourgeeks-final/us-central1/getOthers');
			const data = await res.json();
			document.querySelector('.loader').classList.add('hidden');

			setOthers(data.data);
			console.log(data.data);
		}
		catch (e) {
			console.error(e);
		}
	}

	return (
		<main>
			<img src={loader} alt="loader" className="loader" />
			<Container maxWidth="lg">
				<h2 style={{ marginBottom: '0', textAlign: 'center'}}>Juice Blends</h2>
				<Grid container spacing={2} style={{alignItems: 'stretch'}}>
					{bases.map((base) => 
						<Grid item xs={12} sm={6} md={3}>
							<div className="product blend tac" style={{border: `solid 2px rgba(${base.hex})`, background: `rgba(${base.hex}, .3)`}}>
								<div className={(base.GF === false) ? "gf-hidden" : "gf"}>
									<Tooltip title="Gluten-Free">
										<IconButton>
											<span className="gf-lg">GF</span>
											{/* <img src={gf} alt="Gluten Free" /> */}
										</IconButton>
									</Tooltip>
								</div>
								{ (base.img) ? <img className="spin" src={base.img} alt="Juice" /> : <img src={emptyCup} alt="Juice" />}
								<h3>{base.name}</h3>
								<p><strong>${base.price.md.toFixed(2)}</strong> &nbsp;| &nbsp;{base.calories} Calories</p>
								<p className="capIt">{(base.juices) ? base.juices.join(", ") : ''}</p>
								<div className="flex customizeLink">
									<Link to="/pdp" className={base.id} onClick={onSelectBase}>Customize</Link>
									<button className={base.id + ' btn-small'} onClick={addToCart}>+ Add</button>
								</div>
							</div>
						</Grid>
					)}
					</Grid>
				</Container>
				<Container maxWidth="lg">
					<h2 style={{ marginBottom: '0', textAlign: 'center'}}>Other</h2>
					<Grid container spacing={2} style={{alignItems: 'stretch'}}>
						<Grid item xs={12} sm={6} md={3}>
						{others.map((other) =>
							<div className="product tac" style={{border: `solid 2px rgba(${other.hex})`, background: `rgba(${other.hex}, .3)`}}>
							<div className={(other.GF === false) ? "gf-hidden" : "gf"}>
									<Tooltip title="Gluten-Free">
										<IconButton>
											<span className="gf-lg">GF</span>
										</IconButton>
									</Tooltip>
								</div>
								{ (other.img) ? <img className="spin" src={other.img} alt="Juice" /> : <img src={emptyCup} alt="Juice" />}
								<h3>{other.name}</h3>
								<p><strong>${other.price.md.toFixed(2)}</strong> &nbsp;| &nbsp;{other.calories} Calories</p>
								<div className="flex" style={{justifyContent: 'space-between'}}>
									<Link to="/pdp" className={other.id} onClick={onSelectOther}>Customize</Link>
									<button className={other.id + ' btn-small'} onClick={addToCart}>+ Add</button>
								</div>
							</div>
						)}
					</Grid>
				</Grid>
			</Container>
		</main>
	);
};
