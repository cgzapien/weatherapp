import { Box, Card, Paper, Typography } from "@mui/material";
import React from "react";
export default function Weather({weatherData}){
  console.log('weatherData: ', weatherData);
  const sunrise = new Date(weatherData[0].current.sunrise * 1000).toLocaleTimeString("en-US")
  const sunset = new Date(weatherData[0].current.sunset * 1000).toLocaleTimeString("en-US")
 
  return (
   <Box className="weatherBox">
    
      <div>
        <img alt="weathericon" src={`https://openweathermap.org/img/wn/${weatherData[0].current.weather[0].icon}@2x.png`}/>
        <p>{weatherData[0].current.weather[0].description}</p>
      </div>
      <div>
        <Typography>City: {weatherData[0].timezone.slice(8)}</Typography>
        <Typography>Current Temp: {Math.floor(weatherData[0].current.temp)}&#xb0;F</Typography>
        {/* <Typography>Feels like: {Math.floor(weatherData[0].current.feels_like)}&#xb0;F</Typography> */}
        <Typography>Sunrise: {sunrise}</Typography>
        <Typography>Sunset: {sunset}</Typography>
      </div>
      <div className="forecast">
        {weatherData[0].daily.map(weather => {
          const date = new Date(weather.dt * 1000)
          const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
          const day = weekday[date.getDay()]
          console.log()
          return (
            <div>
              <Typography>{day}</Typography>
              <Typography>{weather.weather.map(sky => {
                return (
                  <>
                    <img alt="weathericon" src={`https://openweathermap.org/img/wn/${sky.icon}@2x.png`}/>
                    <Typography>{sky.main}</Typography>
                  </>
                )
              })}</Typography>
            </div>
          )
        })}
      </div>
   </Box>
  )
}