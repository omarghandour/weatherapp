import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import swDev from './swDev'

// const requestNotificationPermission = async()=>{
//   const permission = await Notification.requestPermission();

//   if (permission !== 'granted'){
//     throw new Error("Notification permission is not granted!")
//   }else{
//     new Notification("Hello friend", {
//       body: 'This is a test ',
//       data: {
//           Hi: "hi"
//       },
//       icon: '../public/images/logo.png'
//   })
//   }
//   }
// // const registerSW = async()=>{
// // const registration = await navigator.serviceWorker.register('serviceworker.js');
// // return registration;
// // }
// const checkPermission = () =>{
//   if(!('serviceWorker' in navigator)){
//     throw new Error("No support for service worker!")
//   }
//   if(!('Notification' in window)){
//     throw new Error("No support for notification API")
//   }
// }
ReactDOM.render(<App />, document.getElementById('root'));
// checkPermission()
// requestNotificationPermission()
swDev();