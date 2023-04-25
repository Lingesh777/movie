import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  Icon,
  Typography,
} from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import "./Home.css";

export const Home = () => {
  const navigate = useNavigate();
  const Login = () => {
    navigate("/login");
  };
  const Signup = () => {
    navigate("/signup");
  };

  return (
    <div className="homediv">
      <div className="navigationbar">
        <AppBar position="static">
          <Toolbar>
            <Icon size="large" edge="start" color="inherit" aria-label="logo">
              <CameraRollIcon />
            </Icon>
            <Typography variant="h6" component="div" sx={{ flexGrow: 2 }} style={{marginLeft:'10px'}}>
              Movie spooky
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button color="inherit" onClick={Login}>
                Login
              </Button>
              <Button color="inherit" onClick={Signup}>
                Signup
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </div>
      <div className="homedatas">
        <div className="homedatas_text">
          <h2 className="title" style={{fontFamily:'sans-serif',fontSize:'40px' ,color:'white'}}>CinePhile</h2>
          <h2 className="title1" style={{fontFamily:'sans-serif',fontSize:'35px',color:'white'}}>Art of Exhilarating</h2>
          <h2 className="title2" style={{fontFamily:'sans-serif',fontSize:'35px',color:'white'}}>Deep dive in cinematic universe</h2>
          <Button className="homebtn" variant="contained" color="success" onClick={Login}>Get Started</Button>
        </div>
        <img
          className="homeimage"
          src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/netflix.jpg"
        ></img>
      </div>
      < div className="homemovie">
        <img className="hm1" src="http://onlookersmedia.in/wp-content/uploads/2020/11/location-stills-eeswaran-simbu-nidhi-aggarwal-2.jpg"></img>
        <img className="hm1" src="https://wallpapers.com/images/featured/fef7dwlq90bme1pz.jpg"></img>
        <img className="hm1" src="https://i.pinimg.com/736x/89/b6/a6/89b6a6180d49b4eb696d129d75689da4.jpg"></img>
        <img className="hm1" src="https://moviegalleri.net/wp-content/gallery/don-images/Don-Movie-Images-HD-06dcc7d.jpg"></img>
        <img className="hm1" src="https://m.media-amazon.com/images/M/MV5BMjU4MTRkZWItNzA2ZC00NjBiLThiYTgtM2E0Y2M5NGU0NTNhXkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_.jpg"></img>
      </div>

    </div>
  );
};
