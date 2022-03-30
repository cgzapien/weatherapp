import { Box, Card, Paper, Typography } from "@mui/material";
import React from "react";
export default function Weather({weatherData}){
  return (
   <Box className="weatherBox">
    
      <div>
        <Typography variant="h3">{weatherData[0].location.name}</Typography>
        <Typography variant="h4">{Math.floor(weatherData[0].current.temp_f)}&#xb0;F</Typography>
        <img alt="weathericon" src={`${weatherData[0].current.condition.icon}`}/>
        <p>{weatherData[0].current.condition.text}</p>
      </div>
      <div className="currentWeather">
        <Typography variant="body2">Sunrise: <br/>{weatherData[0].forecast.forecastday[0].astro.sunrise}</Typography>
        <Typography variant="body2">Sunset: <br/>{weatherData[0].forecast.forecastday[0].astro.sunset}</Typography>
        <Typography variant="body2">Humidity: <br/>{weatherData[0].current.humidity} &#37;</Typography>
        <Typography variant="body2">Feels like: <br/>{Math.floor(weatherData[0].current.feelslike_f)}&#xb0;F</Typography>
      </div>
      <br/>
      <div className="forecast">
        {weatherData[0].forecast.forecastday.map(weather => {
          const date = new Date(weather.date_epoch * 1000)
          const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
          const dayNumber = date.getDate()
          const day = weekday[date.getUTCDay()]
          return (
            <div key={day} >
              <Typography >{day}<br/>{weather.date.slice(5)}</Typography>
              <img alt="weathericon" src={`${weather.day.condition.icon}`}/>
              <Typography>{Math.floor(weather.day.avgtemp_f)}&#xb0;F</Typography>
              <Typography >{weather.day.condition.text}</Typography>
            </div>
          )
        })}
      </div>
   </Box>
  )
}