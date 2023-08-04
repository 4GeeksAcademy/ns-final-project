import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { menuContext } from "../Context.js";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import rasberry from "../img/rasberry.png";
import watermelon from "../img/watermelon.png";
import blueberry from "../img/blueberry.png";
import "../menu.scss";

// Card Component
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { bases } from '../Context';

export const Menu = () => {
	const { setCurrentSelectedBase } = useContext(menuContext);
	const onSelectBase = (e) => {
		const baseName = e.target.classList[0];
		const base = bases.find((base) => {
			console.log(base.name, baseName);
			return base.name === baseName
		});
		setCurrentSelectedBase(base);

		// console.log(e.target);
	}

	return (
		<div>
			
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					{bases.map((base) => 
						<Grid item xs={4}>
							<Link to="/pdp" className="product">
								<div className={base.name} onClick={onSelectBase}>{base.name}</div>
								<div className={base.name} onClick={onSelectBase}>
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
								</div>
							</Link>
						</Grid>
					)}
				</Grid>
			</Container>
		</div>
	);
};
