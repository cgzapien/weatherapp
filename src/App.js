import React, {useState, useEffect} from "react";
import axios from "axios";
import Weather from "./Weather"
import "./app.css"
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
export default function App(){
  const [data, setData] = useState([])
  const [zipCode, setZipCode] = useState({
    zipcode: ""
  })
  const handleZipCodeChange = (e) => {
    const { name, value } = e.target
    setZipCode(prevState => ({
      ...prevState, [name]:value
    }))
  };
  const handleZipCode = (e) => {
    e.preventDefault()
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=0b5f9ec4960e4fcd9fe184625221901&q=${zipCode.zipcode}&days=7&aqi=no&alerts=no`)
    .then(res => {
      setData(() => [res.data])
    
    })
    .catch(err => console.log(err))
  }
  return (
    
      <Box className="appBox">
        <br/>
        {data[0] !== undefined ? 
        <Weather weatherData={data} />
        :
        <>
        <div className="locationContainer" >
          <br/>
          <Box component="form" onSubmit={handleZipCode} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <TextField
            onChange={handleZipCodeChange}
            placeholder="Enter Zip Code"
            name="zipcode"
            value={zipCode.zipcode}
            style={{WebkitAppearance: "none", margin: 0, textAlign: "center"}}
            inputProps={{
              maxLength: 5
            }}
            />
            <br/>
            <Button
            variant="contained"
            type="submit"
            >Enter Zip Code</Button>
          </Box>
        <br/>
        </div>
        </>
        }
        <br/>
      </Box>
    
  )
}