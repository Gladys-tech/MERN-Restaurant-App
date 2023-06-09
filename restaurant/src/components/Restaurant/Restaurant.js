import { Button} from "@mui/material";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Restaurant.css";
const Restaurant = (props) => {
  const history = useNavigate();
  const { _id, name, location, description, image } = props.restaurant;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/restaurants/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/restaurants"));
  };

    
  return (
    
    <div className="card" style={{height: "450px", borderRadius: "10px"}} >
      <img src={image} alt={name} style={{height: "150px"}}/>
      <article> {location}</article>
      <h3>{name}</h3>
      <i>description:</i>
      <p>{description}</p>
      <Button LinkComponent={Link} to={`/restaurants/${_id}`} >
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} >
        Delete
      </Button>
    </div>
  );
};


export default Restaurant;