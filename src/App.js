import React, {useState, useEffect} from "react";
import axios from "axios";
import Weather from "./Weather"
import "./app.css"
import { Box } from "@mui/system";
import { Button } from "@mui/material";
export default function App(){
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [data, setData] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)
  function handleLocation(){
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    })
    setDataLoaded(true)
  }
  
  useEffect(()=> {      
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&appid=627a4c28ee22bae543d7ff8be2663f20`)
        .then(res => setData(() => [res.data]))
        .catch(err => console.log(err))
        
  }, [lat, long])
  
  return (
    
      <Box className="appBox">
        <br/>
        <div className="btnContainer">
          <Button
          onClick={handleLocation}
          variant="contained"
          >My Location</Button>
        </div>
        {data[0] !== undefined ? 
        <Weather weatherData={data} />
        :
        <></>
        }
        <br/>
      </Box>

    
  )
}