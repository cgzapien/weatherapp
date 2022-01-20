import { Box, Card, Paper, Typography } from "@mui/material";
import React, {useState} from "react";

export default function Weather({weatherData}){
  console.log('weatherData: ', weatherData[0].timezone);
  
  
  
  return (
   <Box >
    <Paper elevation={0} className="weatherBox">
      <Typography>City {weatherData[0].timezone}</Typography>
      <Typography>City {}</Typography>
      <Typography>City {}</Typography>
    </Paper>
   </Box>
  )
}