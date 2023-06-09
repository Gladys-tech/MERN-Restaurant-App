import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import DeckOutlinedIcon from '@mui/icons-material/DeckOutlined';
import { NavLink } from "react-router-dom";
const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#8D4004" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "#FDA172", paddingLeft: "150px"}}>
            <Typography>
              <DeckOutlinedIcon/>
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add Restaurant" style={{fontWeight: "bolder"}}/>
            <Tab LinkComponent={NavLink} to="/restaurants" label="Restaurants" style={{fontWeight: "bolder"}} />
            <Tab LinkComponent={NavLink} to="/about" label="About Us" style={{fontWeight: "bolder"}}/>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;