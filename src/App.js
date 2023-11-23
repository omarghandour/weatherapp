import React, { useEffect, useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css';
// import firebase from './firebase';
// import { onMessageListener } from './firebaseInit';
// import Notifications from './components/notifications/Notifications';
// import ReactNotificationComponent from './components/notifications/ReactNotification';
const App = () => {
    const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });

  console.log(show, notification);

  // onMessageListener()
  //   .then((payload) => {
  //     setShow(true);
  //     setNotification({
  //       title: payload.notification.title,
  //       body: payload.notification.body,
  //     });
  //     console.log(payload);
  //   })
  //   .catch((err) => console.log("failed: ", err));






    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);

            setWeather(data);
            setQuery('');
        }
    }
    // useEffect(()=>{
    //     const msg = firebase.messaging();
    //     msg.requestPermission().then(()=>{
    //       return msg.getToken();
    //     }).then((data)=>{
    //       console.warn("token",data)
    //     })
    //   })
    return (
        <div className="main-container">
            <input type="text"className="search"placeholder="Search..."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
            {/* {show ? (
        <ReactNotificationComponent
          title={notification.title}
          body={notification.body}
        />
      ) : (
        <></>
      )} */}
      {/* <Notifications /> */}

        </div>
    );
}

export default App;