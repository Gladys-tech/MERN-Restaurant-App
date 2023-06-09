import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" color="#8D4004" >
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          This is a CRUD Restaurant Application
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          By Gladys
        </Typography>
      </Box>
    </div>
  );
};

export default About;