import React, { createContext, useState, useEffect } from 'react';
import { auth } from './index';

export const menuContext = createContext();

export default function ContextProvider(props) {

    const [user, setUser] = useState({});
		const [currentSelectedBase, setCurrentSelectedBase] = useState(null);

		const [myOrder, setMyOrder] = useState([]);

    useEffect(() => {

			auth.onAuthStateChanged(async (user) => {
				console.log('In the onAuthStateChanged function');

				if (user) {
					console.log('User is signed in')
					const res = await fetch(`${process.env.REACT_APP_FIREBASE_FUNCTIONS_HOST}/fourgeeks-final/us-central1/signUpOrSigninUser`, {
							method: 'post',
							body: JSON.stringify({ email: user.email, name: user.displayName }),
							headers: {
									'Content-Type': 'application/json'
							}
					});
					const data = await res.json();
					console.log('data', data);
					setUser(data.data);
				}
				else {
						console.log('User not signed in');
						setUser({});
				}
			})
    }, []);

    return (
			<menuContext.Provider value={{ user, setUser, currentSelectedBase, setCurrentSelectedBase, myOrder, setMyOrder }}>
				{props.children}
			</menuContext.Provider>
    )
}