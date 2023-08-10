import React, { createContext, useState, useEffect } from 'react';

import { auth } from './index'

export const menuContext = createContext();

// export const sweetMamboBase = {
// 	name: 'Sweet Mambo',
// 	id: 'sweetMambo',
// 	juices: ['cucumber', 'ginger', 'lime'],
// 	img: '../img/watermelon.png',
// 	calories: '380',
// 	cost: '5.50'
// }
// export const beachDayBase = {
// 	name: 'Beach Day',
// 	id: 'beachDay',
// 	juices: ['watermelon', 'pineapple', 'ginger', 'lime'],
// 	img: 'img/blueberry.png',
// 	calories: '410',
// 	cost: '4.50'
// }
// export const immunityBase = {
// 	name: 'Immunity',
// 	id: 'immunity',
// 	juices: ['carrot', 'apple', 'lemon', 'ginger'],
// 	img: '../img/rasberry.png',
// 	calories: '395',
// 	cost: '5.00'
// }
// export const bases = [sweetMamboBase, beachDayBase, immunityBase];

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
        <menuContext.Provider value={{ user, setUser, currentSelectedBase, setCurrentSelectedBase }}>
            {props.children}
        </menuContext.Provider>
    )
}