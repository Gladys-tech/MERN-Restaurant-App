import {
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  
  const AddRestaurant = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      name: "",
      description: "",
      price: "",
      location: "",
  
      image: "",
    });
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      // console.log(e.target.name, "Value", e.target.value);
    };
  
    const sendRequest = async () => {
      await axios
        .post("http://localhost:5000/restaurants", {
          name: String(inputs.name),
          location: String(inputs.location),
          description: String(inputs.description),
          image: String(inputs.image),
          available: Boolean(checked),
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs, checked);
      sendRequest().then(() => history("/restaurants"));
    };


  
    return (
    
      <div>
      <h1 style={{margin: '0px',textAlign: 'center', color:"#8D4004"}}>ADD YOUR RESTAURANT</h1>

      <form onSubmit={handleSubmit} style={{marginBottom: "30px", marginTop: "0px"}}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxHeight='350px'
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >
          <FormLabel>Name <span style={{color: "red"}}>*</span></FormLabel>
          <TextField
            value={inputs.name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="name"
            placeholder="name of the restaurant"
            required
          />
          <FormLabel>Location<span style={{color: "red"}}>*</span></FormLabel>
          <TextField
            value={inputs.location}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="location"
            placeholder="your restaurant's location"
            required
          />
          <FormLabel >Description<span style={{color: "red"}}>*</span></FormLabel>
          <TextField
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="description"
            placeholder="Not more than 20 words"
            required
          />
          
          <FormLabel >Image<span style={{color: "red"}}>*</span></FormLabel>
          
          <TextField
            value={inputs.image}
            onChange={handleChange}
            // type="file"
            margin="normal"
            fullWidth
            variant="outlined"
            name="image"
            placeholder="paste your image url e.g https://images.pexels.com/....."
            required
          />
          <FormControlLabel
            control={
              <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
            }
            label="opened" 
            required
          />
  
          <Button variant="contained" type="submit" style={{backgroundColor:"#8D4004"}}>
            Add Restaurant
          </Button>
        </Box>
      </form>
      </div>
    );
  };
  
  export default AddRestaurant;