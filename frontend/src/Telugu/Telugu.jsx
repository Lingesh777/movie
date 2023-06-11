import React, { useState, useEffect } from "react";
import {AppBar,Toolbar,Button,Stack,Icon,Typography,Grid} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStates } from "../States";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import { Navbar } from "../UserDb/Navbar";


export const Telugu = () => {
  const { editMovie, setEditMovie, movies, setMovies, getAllMovies } =
    useStates();
  const navigate = useNavigate();

  useEffect(() => {
    getAllMovies();
  }, []);

  const Addreview = () => {
    navigate("/review");
  };

  const Logout = () => {
    navigate("/login");
  };

  const tamil = () => {
    navigate("/tamilmovies");
  };
  const kannada = () => {
    navigate("/kannadamovies");
  };
  const malayalam = () => {
    navigate("/malayalammovies");
  };
  const telugu=()=>{
    navigate("/telugu")
  }
  const Home =()=>{
    navigate("/user");
  };
  const Viewreview=()=>{
    navigate("/viewreviewuser")
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  return (
    <div className="tablebody">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div>
        <div className="navigationbar">
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static">
            <Toolbar>
              <Icon size="large" edge="start" color="inherit" aria-label="logo" style={{color:'aqua'}} onClick={Home} className="homeicon">
                <HomeIcon/>
              </Icon>
              <Icon size="large" edge="start" color="inherit" aria-label="logo" style={{color:'aqua',marginLeft:'20px'}}>
                <CameraRollIcon />
              </Icon>
              <Typography variant="h6" component="div" sx={{ flexGrow: 2 }} style={{color:'aqua'}}>
                Movie spooky
              </Typography>
              <div className="navatuser">
              <Navbar/>
              </div>
              <Stack direction="row" spacing={2}>
              <Button color="inherit" onClick={Viewreview} style={{color:'aqua'}}>
                 View Review
                </Button>
                <Button color="inherit" onClick={Addreview} style={{color:'aqua'}}>
                  Add Review
                </Button>
                <Button color="inherit" onClick={Logout} style={{color:'aqua'}}>
                  Logout
                </Button>
              </Stack>
            </Toolbar>
          </AppBar>
          </ThemeProvider>
        </div>
        <h3 style={{ textAlign: "center" }}>Movie Details</h3>
        <div className="langatlang">
        <Grid container spacing={2}>
        <Grid item><Button  variant='contained' color="success" className="language1" onClick={tamil}>Tamil</Button></Grid>
        <Grid item><Button  variant='contained' color="success"  className="language2" onClick={kannada}>Kannada</Button></Grid>
        <Grid item><Button  variant='contained' color="success"  className="language3" onClick={malayalam}>Malayalam</Button></Grid>
        <Grid item><Button  variant='contained'  className="language3" onClick={telugu}>Telugu</Button></Grid>
        </Grid>
        </div>

        <div className="table">
          <br />
          {movies.map((movie) => {
            if(movie.language==="Telugu")
            {
            return (
              <>
                <div className="moviebox">
                  <img className="movie-img" src={movie.url}></img>
                  <div className="moviedatas">
                   <p>Moviename : {movie.moviename}</p>
                   <p>Director : {movie.director}</p>
                   <p>Actor : {movie.actor}</p>
                   <p>Actress : {movie.actress}</p>
                   <p>Category : {movie.category}</p>
                   <p>Duration : {movie.duration}</p>
                   <p>Language : {movie.language}</p>
                  </div>
                </div>
              </>
            );
            }
          })}
        </div>
      </div>
    </div>
  );
};
