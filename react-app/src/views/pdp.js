import React, { useContext, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { menuContext } from "../Context";
import { Redirect, useHistory } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Button from '@mui/material/Button';


export const Pdp = (props) => {

	const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
	const history = useHistory();

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    // let selectState = document.getElementById('proteinAmt');
		// console.log(selectState);
		// selectState.val === '1';
		if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        Undo
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

	const [constants, setConstants] = useState([]);
	const { currentSelectedBase, setMyOrder } = useContext(menuContext);

	useEffect(() => {
		fetchConstants();

		if (currentSelectedBase) {
			setMyOrder(currentSelectedBase);
		}
	}, []);

	const { item } = props;


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

	// const navigate = useNavigate();

	const goToCheckout = (e) => {
		e.preventDefault();
		history.push('/checkout');
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

	// const postOrder = async () => {
	// 	try {
	// 		const setOrder = await fetch('http://127.0.0.1:5001/fourgeeks-final/us-central1/getConstants', {method:'POST', headers:{'Content-Type': 'application/json'}, body:JSON.stringify({})});
	// 	}
	// 	catch (e) {
	// 		console.error(e);
	// 	}
	// }



	let drinkPrice = document.getElementById('drinkVal');
	let imgSize = document.querySelector('.productShotCont');

	const calcPrice = (e) => {
		
		console.log(e.target.value, drinkPrice, imgSize);
		drinkPrice.innerHTML = e.target.value.toFixed(2);
		if (e.target.value === currentSelectedBase.price.md) {
			imgSize.classList.remove('lg');
			imgSize.classList.add('sm');
		}
		if (e.target.value === currentSelectedBase.price.xl) {
			imgSize.classList.add('lg');
			imgSize.classList.remove('sm');
		}
		if (e.target.value === currentSelectedBase.price.lg) {
			imgSize.classList.remove('sm', 'lg');
		}
	}

	const showProtein = (e) => {
		let prot = document.querySelector('.productShotCont');
		if ( e.target.value === 'None') {
			prot.classList.remove('protein');
		}
		else {
			prot.classList.add('protein');
			// drinkPrice.innerHTML = drinkPrice.innerHTML + 1;
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
							<a href="/menu" className="backTo"><ArrowBackIosIcon className="back" /> Back to menu</a>
						</div>
						{/* <img src={'./img/'+ currentSelectedBase.name + '-pdp.png'} alt="Juice" className="productShot" /> */}
						<div className="productShotCont"><img src={currentSelectedBase.imgLrg} alt="Juice" className="productShot" /></div>
					</Grid>

					<Grid item xs={4}>
						<h1>{currentSelectedBase.name}</h1>
						<form onSubmit={goToCheckout}>
							<h2 id="drinkPrice">$<span id="drinkVal">{currentSelectedBase.price.md.toFixed(2)}</span></h2>
							<div>
								<span onClick={handleClickOpen('paper')} className="styledBtn">Special Instructions</span>
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
										onChange={calcPrice}
									>
										<MenuItem selected value={currentSelectedBase.price.md}>Medium (${currentSelectedBase.price.md.toFixed(2)})</MenuItem>
										<MenuItem value={currentSelectedBase.price.lg}>Large (${currentSelectedBase.price.lg.toFixed(2)})</MenuItem>
										<MenuItem value={currentSelectedBase.price.xl}>X-Large (${currentSelectedBase.price.xl.toFixed(2)})</MenuItem>
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
										onChange={showProtein}
									>
										<MenuItem value={'None'}>None</MenuItem>
										<MenuItem value={'Whey'}>Whey (+$1.00)</MenuItem>
										<MenuItem value={'Soy'}>Soy (+$1.00)</MenuItem>
										<MenuItem value={'Plant'}>Plant-Based (+$1.00)</MenuItem>
									</Select>
								</FormControl>
							</div>

							{/* <div>
								<FormControl fullWidth sx={{mb: 2}}>
									<InputLabel id="proteinAmtLabel">Protein Amount</InputLabel>
									<Select
										labelId="proteinAmtLabel"
										id="proteinAmt"
										label="Protein Amount"
										style={{backgroundColor: "white"}}
									>
										<MenuItem value={1}>1 scoop</MenuItem>
										<MenuItem value={2}>2 scoops</MenuItem>
									</Select>
								</FormControl>
							</div> */}
							<button type="submit">Add to order</button>
						</form>
						{/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
						<Snackbar
							open={open}
							autoHideDuration={6000}
							onClose={handleClose}
							message="Order updated"
							action={action}
						/>
					</Grid>
				</Grid>
			</Container>

			<Dialog open={open} onClose={handleClose} scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Immunity Blast</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef}
            tabIndex={-1}
          >
            <textarea name="specialInstructions" id="specialInstructions" cols="30" rows="10" placeholder="Type your message here."></textarea>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={handleClose}>Cancel</Button>
					<Button variant="contained" onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
		</div>
	);
};
