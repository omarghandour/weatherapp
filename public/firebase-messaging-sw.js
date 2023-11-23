// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyD9DA5N0USDG-UNl5hWp1hvc7DegcerGqg",
  authDomain: "pwa-ex-1d95d.firebaseapp.com",
  // databaseURL: "FROM FIREBASE CONSOLE",
  projectId: "pwa-ex-1d95d",
  storageBucket: "pwa-ex-1d95d.appspot.com",
  messagingSenderId: "566664143125",
  appId: "1:566664143125:web:c0567d6c8ab0fed6c5091c",
  measurementId: "G-M9CE6CC6DP",
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png",
  };

  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});