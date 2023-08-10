import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./footer.scss";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const Footer = () => {

	const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

	return (
		<footer>
			<Container maxWidth="lg">
				<Grid container>
					<Grid item xs={6}>
						&copy; 2023 All rights reserved. &nbsp;
						<span onClick={handleClickOpen('paper')} className="link">Terms &amp; Conditions</span>
						{/* <Button >Terms &amp; Conditions</Button> */}
					</Grid>

					<Grid item xs={6} className="social">
						Connect with us: 
						<ul>
							<li><a href="http://google.com"><FacebookIcon></FacebookIcon></a></li>
							<li><a href="http://google.com"><TwitterIcon></TwitterIcon></a></li>
							<li><a href="http://google.com"><InstagramIcon></InstagramIcon></a></li>
						</ul>
					</Grid>
				</Grid>
			</Container>



			
      <Dialog open={open} onClose={handleClose} scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Terms &amp; Conditions</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef}
            tabIndex={-1}
          >
					<i>Last Updated: August 2023</i><br/><br/>

					These Terms apply to your access to, and use of, all or part of any website or mobile application of Apetitoso Corporation. These Terms do not alter in any way the terms or conditions of any other agreement you may have with Apetitoso for products, services or otherwise.<br/><br/>

					In the event there is any conflict or inconsistency between these Terms and any other terms of use that appear on the Sites, these Terms will govern. However, if you navigate away from the sites to a third-party site, you may be subject to alternative terms and conditions of use, as may be specified on such site, which will govern your use of that site.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
		</footer>
	);
};
