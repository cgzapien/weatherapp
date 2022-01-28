import React, {useState, useEffect} from "react";
import axios from "axios";
import Weather from "./Weather"
import "./app.css"
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
export default function App(){
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [data, setData] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)
  function handleLocation(){
    // navigator.geolocation.getCurrentPosition((position) => {
    //   setLat(position.coords.latitude)
    //   setLong(position.coords.longitude)
    // })
    setDataLoaded(true)
    var options = {
      enableHighAccuracy: true,
      maximumAge: 0
    };
    
    function success(pos) {
      var crd = pos.coords;
      setLat(crd.latitude)
      setLong(crd.longitude)
      // console.log('Your current position is:');
      // console.log(`Latitude : ${crd.latitude}`);
      // console.log(`Longitude: ${crd.longitude}`);
      // console.log(`More or less ${crd.accuracy} meters.`);
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);
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
        <br/>
        {data[0] !== undefined ? 
        <Weather weatherData={data} />
        :
        <>
        <Typography variant="body1" style={{textAlign: "center"}}>&#8593; Click the button to find your location &#8593;</Typography>
        </>
        }
        <br/>
      </Box>

    
  )
}