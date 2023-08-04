import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export const Account = () => {	

	return (
		<div>
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item>
						<h1>Hi, Nick</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum cursus diam ut pulvinar. Fusce mauris ex, volutpat ut congue vitae, viverra sit amet arcu. Duis porta dolor vitae eros interdum, vel rhoncus purus eleifend. Mauris vel felis accumsan, tempus tortor id, ultrices lectus. Proin quis turpis pulvinar, egestas urna ut, pulvinar nibh. Nulla facilisi. Vestibulum sodales urna sit amet dolor placerat, consequat consectetur mi condimentum. Donec at arcu et dui scelerisque egestas. Ut arcu est, ultricies in lorem nec, gravida sodales mauris. Sed viverra mauris vitae dignissim rutrum. Vestibulum eu varius metus. Integer libero sapien, maximus in porta nec, tincidunt nec massa. Ut justo ligula, dictum ut tortor a, convallis varius augue.</p>

						<p>Nam molestie turpis in felis pulvinar dignissim. Curabitur posuere sollicitudin justo. Fusce scelerisque elementum accumsan. Sed vel ipsum scelerisque, viverra tellus ac, fermentum felis. Nullam vitae tincidunt neque. Duis ac rhoncus felis. Curabitur aliquam sem turpis, sit amet congue sapien viverra pharetra. Aenean mollis molestie libero. Etiam malesuada mauris tempus nisi bibendum, eu pellentesque mi condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eleifend eros sodales, ultrices urna sit amet, dignissim elit. Maecenas vitae scelerisque velit. Donec sapien elit, blandit vel leo vel, fermentum feugiat ex. Phasellus malesuada massa libero, et dignissim augue vulputate a.</p>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};
