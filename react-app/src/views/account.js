import React, { useContext } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { auth } from "../index";
import { useHistory } from 'react-router-dom';
import { menuContext } from "../Context";
import "../styles/account.scss";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import Switch from '@mui/material/Switch';
import { useMediaQuery } from "@mui/material";
const label = { inputProps: { 'aria-label': 'Switch demo' } };

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export const Account = () => {	

	const { user } = useContext(menuContext);
	const history = useHistory();

	const logItOut = () => {
		auth.signOut();
		history.push('/menu');
		// return <Redirect to={{ pathname: "/" }} />;
	}

	const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
	const smallScreen = useMediaQuery("(max-width: 899px)");

	return (
		<main className="account">
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid>
						<Box className="accountBox" sx={{ flexGrow: 1, display: 'flex' }} >
							<div className="accountTabs">
								<Tabs
									orientation={smallScreen ? "horizontal" : "vertical"} 
									variant="scrollable"
									value={value}
									onChange={handleChange}
									aria-label="My Account"
									sx={{ borderRight: 1, borderColor: 'divider' }}
								>
									<Tab label="Account" {...a11yProps(0)} />
									<Tab label="Payment" {...a11yProps(1)} />
									<Tab label="Rewards" {...a11yProps(2)} />
									<Tab label="Orders" {...a11yProps(3)} />
									<Tab label="Dietary" {...a11yProps(4)} />
									<Tab label="Logout" onClick={logItOut} />
								</Tabs>
							</div>
							<div className="accountPanel">
								<TabPanel value={value} index={0}>
									<h1>My account</h1>
									{/* <p><strong>Name:</strong></p>  */}
									{/* <input type="text" value={ user.name } /> */}
									<TextField id="standard-basic" fullWidth label="Name" value={ user.name } sx={{mb: 2}} /><br/>
									<TextField id="standard-basic" fullWidth label="Email" value={ user.email } sx={{mb: 2}} />
									{/* <p><strong>Email:</strong> { user.email }</p> */}
									<button>Save</button>
									<Button variant="text" sx={{mt: 2}}>Change password</Button>
									{/* <button onClick={logItOut}>Sign out</button> */}
								</TabPanel>
								<TabPanel value={value} index={1}>
									<h2>Payment Info</h2>
									<p className="cc"><strong>Visa</strong> ending in •••• 1234</p>
									<Button variant="text">Edit</Button> <br />
									<p className="cc"><strong>American Express </strong> ending in •••• 8899</p>
									<Button variant="text">Edit</Button>
								</TabPanel>
								<TabPanel value={value} index={2}>
									<h2>Rewards</h2>
									<p>Coming soon...</p>
								</TabPanel>
								<TabPanel value={value} index={3}>
									<h2>Orders</h2>
									<p>No previous orders.</p>
									<Link to="/menu">Start one now.</Link>
								</TabPanel>
								<TabPanel value={value} index={4}>
									<h2>Dietary Preferences</h2>
									<div className="tableContent">
										<ul>
											<li><label for="nuts">Nuts</label><Switch id="nuts" {...label} defaultChecked /></li>
											<li><label for="dairy">Dairy</label><Switch id="dairy" {...label} /></li>
											<li><label for="soy">Soy</label><Switch id="soy" {...label} /></li>
										</ul>
										<button>Save</button>
									</div>
									
								</TabPanel>
							</div>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</main>
	);
};
