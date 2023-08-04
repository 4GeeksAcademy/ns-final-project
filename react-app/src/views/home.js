import React from "react";
// import { Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export const Home = () => {
	return (
		<>
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item>
						<h1>Home Page</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum cursus diam ut pulvinar. Fusce mauris ex, volutpat ut congue vitae, viverra sit amet arcu. Duis porta dolor vitae eros interdum, vel rhoncus purus eleifend. Mauris vel felis accumsan, tempus tortor id, ultrices lectus. Proin quis turpis pulvinar, egestas urna ut, pulvinar nibh. Nulla facilisi. Vestibulum sodales urna sit amet dolor placerat, consequat consectetur mi condimentum. Donec at arcu et dui scelerisque egestas. Ut arcu est, ultricies in lorem nec, gravida sodales mauris. Sed viverra mauris vitae dignissim rutrum. Vestibulum eu varius metus. Integer libero sapien, maximus in porta nec, tincidunt nec massa. Ut justo ligula, dictum ut tortor a, convallis varius augue.</p>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};
