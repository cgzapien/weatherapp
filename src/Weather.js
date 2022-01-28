import { Box, Card, Paper, Typography } from "@mui/material";
import React from "react";
export default function Weather({weatherData}){
  const sunrise = new Date(weatherData[0].current.sunrise * 1000).toLocaleTimeString("en-US")
  const sunset = new Date(weatherData[0].current.sunset * 1000).toLocaleTimeString("en-US")
  return (
   <Box className="weatherBox">
    
      <div>
        <Typography variant="h3">{weatherData[0].timezone.slice(8)}</Typography>
        <Typography variant="h4">{Math.floor(weatherData[0].current.temp)}&#xb0;F</Typography>
        <img alt="weathericon" src={`https://openweathermap.org/img/wn/${weatherData[0].current.weather[0].icon}@2x.png`}/>
        {/* <p>{weatherData[0].current.weather[0].description}</p> */}
      </div>
      <div className="currentWeather">
        <Typography variant="body2">Sunrise: {sunrise}</Typography>
        <Typography variant="body2">Sunset: {sunset}</Typography>
        <Typography variant="body2">Humidity: {weatherData[0].current.humidity} &#37;</Typography>
        <Typography variant="body2">Feels like: {Math.floor(weatherData[0].current.feels_like)}&#xb0;F</Typography>
      </div>
      <br/>
      <div className="forecast">
        {weatherData[0].daily.map(weather => {
          const date = new Date(weather.dt * 1000)
          const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
          const dayNumber = date.getDate()
          const day = weekday[date.getDay()]
          return (
            <div>
              <Typography key={day}>{day} {dayNumber}</Typography>
              <Typography>{Math.floor(weather.temp.day)}&#xb0;F</Typography>
              {weather.weather.map(sky => {
                return (
                  <>
                    <img key={sky.main} alt="weathericon" src={`https://openweathermap.org/img/wn/${sky.icon}@2x.png`}/>
                    <Typography >{sky.main}</Typography>
                  </>
                )
              })}
            </div>
          )
        })}
      </div>
   </Box>
  )
}