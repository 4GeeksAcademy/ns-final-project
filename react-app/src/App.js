import './App.scss';
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from './index';
// import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
// import Root from './Root';

import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

const provider = new GoogleAuthProvider();

// provider.setCustomParameters({
//   redirect_uri: 'https://elvishernandez-didactic-carnival-x5jgw56wqqwf9pvj-9099.preview.app.github.dev/'
// })

// const theme = createTheme({
//   palette: {
//     secondary: {
//       main: '#ff0000'
//     }
//   }
// });

function App() {

  // const { setUser } = useContext(Context);
  return (
		<ThemeProvider theme={theme}>
			<div className="App">
				{/* <MuiThemeProvider theme={theme}>
					<Root />
				</MuiThemeProvider> */}
				{/* <button onClick={() => auth.signOut()}>Sign out</button> */}
			</div>
		</ThemeProvider>
  );
}

export default App;
