import React, {useState, useEffect} from "react";
import axios from "axios";
import Weather from "./Weather"
import "./app.css"
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
export default function App(){
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [data, setData] = useState([])
  
  function handleLocation(){
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    })
    
  }
  
  useEffect(()=> {      
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&appid=627a4c28ee22bae543d7ff8be2663f20`)
        .then(res => setData(() => [res.data]))
        .catch(err => console.log(err))
  }, [lat, long])
  const CustomBtn = styled(Button)({
    backgroundColor: "#0063cc",
    border: "1px solid",
    fontSize: 16,
  })
  return (
    
      <Box className="appBox">
        {data[0] !== undefined ? 
        <Weather weatherData={data} />
        :
        <></>
        }
        <br/>
        <Button
        className="locationBtn"
        type="submit"
        onClick={handleLocation}
        variant="contained"
        
        >My Location</Button>
      </Box>

    
  )
}