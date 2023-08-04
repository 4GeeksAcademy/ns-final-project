import React, { createContext, useState, useEffect } from 'react';

import { auth } from './index'

export const menuContext = createContext();

export const watermelonBase = {
	name: 'Watermelon',
	sugar: 1,
	size: 'large',
	cost: '5.5',
	img: '../img/watermelon.png',
	calories: '380',
	protein: {
		type: 'whey',
		amt: 2
	}
}
export const blueberryBase = {
	name: 'Blueberry',
	sugar: 1,
	size: 'large',
	img: '../img/blueberry.png',
	calories: '410',
	cost: '4.5',
	protein: {
		type: 'whey',
		amt: 2
	}
}
export const rasberryBase = {
	name: 'Rasberry',
	sugar: 1,
	img: '../img/rasberry.png',
	calories: '395',
	size: 'large',
	cost: '5.0',
	protein: {
		type: 'whey',
		amt: 2
	}
}
export const bases = [watermelonBase, blueberryBase, rasberryBase];

export default function ContextProvider(props) {

    const [user, setUser] = useState({});
		const [currentSelectedBase, setCurrentSelectedBase] = useState(null);
		 

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
        <menuContext.Provider value={{ user, currentSelectedBase, setCurrentSelectedBase }}>
            {props.children}
        </menuContext.Provider>
    )
}