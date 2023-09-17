import React, { useRef} from 'react';
import Slider from "@mui/material/Slider";
import Typography from '@material-ui/core/Typography';

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import classes from './hero.module.css'

const Hero = () => {
  const [type, setType] = useState("")
  const [place, setPlace] = useState("0")
  const [priceRange, setPriceRange] = useState([0, 300000]);
  const navigate = useNavigate()

  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange([e.target.value, 500000]);
    document.getElementById("priceRange").innerHTML = e.target.value;
  };
  
    
  
  // TODO here or somewhere home(fetching properties)

  const handleSearch = () => {
    // navigating to properties
    navigate(`/properties?type=${type}&place=${place}&priceRange=${priceRange}`)
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Let me find your dream place right now</h2>
        <h5>Search the best selection of luxury real estate</h5>
        <div className={classes.options}>
          <select onChange={(e) => setType(e.target.value)}>
            <option disabled>Select type</option>
            <option value="Andheri">Andheri</option>
            <option value="Bandra">Bandra</option>
            <option value="Chembur">Chembur</option>
            <option value="Parel">Parel</option>
            <option value="Vashi">Vashi</option>
          </select>
          
          <input type="range" min="0" max="500000" value={priceRange} onChange={(e) => handlePriceRangeChange([e.target.value, 500000])} />
          
          {/* <option disabled>Select Price Range</option>
            <option value="0">0-100,000</option>
            <option value="1">100,000-200,000</option>
            <option value="2">200,000-300,000</option>
            <option value="3">300,000-400,000</option>
            <option value="4">400,000-500,000</option> */}
          
          <input type="date" onChange={(e) => setDate(e.target.value)}></input>
          
          <select onChange={(e) => setPlace(e.target.value)}>
            <option disabled>Select Place</option>
            <option value="0">Appartment</option>
            <option value="1">Bunglow</option>
            <option value="2">Commercial</option>
          </select>
          <AiOutlineSearch className={classes.searchIcon} onClick={handleSearch} />
        </div>
      </div>
    </div>
  )
}

export default Hero