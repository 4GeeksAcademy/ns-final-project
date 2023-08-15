
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const cors = require('cors')({ origin: true });
const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { getAuth } = require('firebase-admin/auth');

const admin = initializeApp({ projectId: 'fourgeeks-final' });
const auth = getAuth(admin);
const firestore = getFirestore(admin);

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((req, res) => {
  cors(req, res, () => {
    logger.info("Hello logs!", {structuredData: true});
    res.send("Hello from Firebase!");
  })
});

exports.getUsers = onRequest((req, res) => {
  cors(req, res, async () => {

    const users = await auth.listUsers();
    console.log(users);

    res.send(users);
  })
});

exports.getBases = onRequest((req, res) => {
  cors(req, res, async () => {

		const response = {
			status: 200,
			data: {},
			msg: 'Successfully retrieved bases'
		};

		try {

			const snapshot = await firestore.collection('Juices').get();

			const bases = [];

			snapshot.forEach((snap) => {
				
				const data = snap.data();
				bases.push(data);
			});

			response.data = bases;
		}
		catch (e) {
			response.status = 500;
			response.msg = e.message;
		}

    res.status(response.status).send(response);
  })
});

exports.getConstants = onRequest((req, res) => {
  cors(req, res, async () => {

		const response = {
			status: 200,
			data: {},
			msg: 'Successfully retrieved constants'
		};

		try {

			const snapshot = await firestore.collection('Constants').get();

			const constants = [];

			snapshot.forEach((snap) => {
				
				const data = snap.data();
				constants.push(data);
			});
			
			response.data = constants;
		}
		catch (e) {
			response.status = 500;
			response.msg = e.message;
		}

    res.status(response.status).send(response);
  })
});

exports.signUpOrSigninUser = onRequest((req, res) => {
  cors(req, res, async () => {

    const { email, name } = req.body;

    console.log(email);
    
    const response = {
      msg: '',
      data: {},
      status: 200
    };

    if (!email) {

      response.msg = 'No email passed';
      response.status = 500;
    }

    if (email) {
      try {
        const documentSnapshot = await firestore.collection("user").doc(email).get();
  
        const data = documentSnapshot.data();
  
        // if user signing up they don't exist in database yet
        if (!data) {
  
          console.log('registering user...')
					console.log(name)
          const user = {
            email,
						name,
            created_at: new Date().toISOString()
          }
  
          await firestore.collection("user").doc(email).set(user);
  
          response.data = user;
          response.msg = 'Successfully signed up user';
        }
        else {
          response.data = data;
          response.msg = 'Successfully signed in user'
        }
        
      }
      catch (e) {
  
        response.msg = e.message;
        response.status = 500;
      }
    }


    res.status(response.status).send(response);
  });
});




exports.insertOrder = onRequest((req, res) => {
  cors(req, res, async () => {

    const { order } = req.body;

    console.log(order);
    
    const response = {
      msg: 'Successful order inserted',
      data: {},
      status: 200
    };

    if (!order) {
      response.msg = 'No order passed';
      response.status = 500;
    }

    if ( response.status === 200) {
      try {
				const randomId = await firestore.collection("Orders").doc().id;
        const res = await firestore.collection("Orders").doc(randomId).set(order);

				response.data = {
					...order,
					orderId: randomId
				}

				console.log(randomId);
        
      }
      catch (e) {
        response.msg = e.message;
        response.status = 500;
      }
    }

    res.status(response.status).send(response);
  });
});
