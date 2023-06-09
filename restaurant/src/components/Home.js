import { Button, Typography, Box,  } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const Home = () => {

 
  return (
    <div style={{backgroundImage: "URL('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", backgroundSize: "cover", height: "100vh"}}>
      
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/restaurants"
          sx={{ marginTop: 15, background: "#8D4004" }}
          variant="contained"
        >
          <Typography variant="h3">View All Restaurants</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;