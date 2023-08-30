import React from "react";
import { Container, TextField, Grid } from "@mui/material";
import "../styles/home.scss";

export const Home = () => {
	return (
		<main>
			<Container maxWidth="lg" className="centerIt">
				<Grid container>
					<Grid item sm={6}>
						<h2>Want to know more?</h2>
						<p>Learn about Apetitoso. Founded here in Coral Gables, FL, Apetitoso has plans to expand nationwide. See why we're different and our mission statement. </p>
						<a href="/about">See our story</a>
					</Grid>

					<Grid item className="banner menuPromo" sm={6}>
						<a href="/menu">
							<button className="btn-small" style={{padding: '11px 20px'}}>Pick your drink!</button>
						</a>
					</Grid>

					<Grid item className="banner emailSignup" xs={12}>
						<Grid container>
							<Grid item sm={6}>
								<h2>Want exclusive offers and discounts?</h2>
								<p> Sign up now to ge the latest Apetitoso information!</p>
								



								{/* MAIL CHIMP */}
								{/* <div id="mc_embed_shell">
									<div id="mc_embed_signup">
										<form action="https://hotmail.us21.list-manage.com/subscribe/post?u=184875d1eddc0aaf13c802a86&amp;id=61dc6e6513&amp;f_id=007fdfe6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
											<div id="mc_embed_signup_scroll">
												<div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
												<div className="mc-field-group"><label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label><input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" value=""/></div>
											<div id="mce-responses" className="clear foot">
												<div className="response" id="mce-error-response" style={{display: 'none'}}></div>
												<div className="response" id="mce-success-response" style={{display: 'none'}}></div>
											</div>
											<div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
												<input type="text" name="b_184875d1eddc0aaf13c802a86_61dc6e6513" tabIndex="-1" value="" />
											</div>
												<div className="optionalParent">
													<div className="clear foot">
														<input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
														<p style={{margin: '0px auto'}}>
															<a href="http://eepurl.com/iyHwFw" title="Mailchimp - email marketing made easy and fun">
																<span style={{display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px'}}>
																	<img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style={{width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center'}} />
																</span>
															</a>
														</p>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div> */}






								<form>
									<TextField size="small" label="Email" placeholder="xxxx@xxxxxx.com" variant="outlined" type="email"/>
									<button type="submit" className="btn-small" style={{padding: '11px 20px', marginLeft: '10px'}}>Submit</button>
								</form>
							</Grid>
							<Grid item sm={6} className="dude"></Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</main>
	);
};
