// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //   apiKey: "AIzaSyD9DA5N0USDG-UNl5hWp1hvc7DegcerGqg",
// //   authDomain: "pwa-ex-1d95d.firebaseapp.com",
// //   projectId: "pwa-ex-1d95d",
// //   storageBucket: "pwa-ex-1d95d.appspot.com",
// //   messagingSenderId: "566664143125",
// //   appId: "1:566664143125:web:c0567d6c8ab0fed6c5091c",
// //   measurementId: "G-M9CE6CC6DP"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// import firebase from "firebase/app";
// import "firebase/messaging";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD9DA5N0USDG-UNl5hWp1hvc7DegcerGqg",
//   authDomain: "pwa-ex-1d95d.firebaseapp.com",
//   // databaseURL: "FROM FIREBASE CONSOLE",
//   projectId: "pwa-ex-1d95d",
//   storageBucket: "pwa-ex-1d95d.appspot.com",
//   messagingSenderId: "566664143125",
//   appId: "1:566664143125:web:c0567d6c8ab0fed6c5091c",
//   measurementId: "G-M9CE6CC6DP",
// };

// firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

// // const { REACT_APP_VAPID_KEY } = process.env;
// const publicKey = process.env.REACT_APP_VAPID_KEY;

// export const getToken = async (setTokenFound) => {
//   let currentToken = "";

//   try {
//     currentToken = await messaging.getToken({ vapidKey: publicKey });
//     if (currentToken) {
//       setTokenFound(true);
//     } else {
//       setTokenFound(false);
//     }
//   } catch (error) {
//     console.log("An error occurred while retrieving token. ", error);
//   }

//   return currentToken;
// };

// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     messaging.onMessage((payload) => {
//       resolve(payload);
//     });
//   });