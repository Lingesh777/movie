import React, { useState, useEffect } from "react";
import "./Db.css";
import {AppBar,Toolbar,Button,Stack,Icon,Typography,} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStates } from "../States";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import { ThemeProvider, createTheme } from '@mui/material/styles';


export const Db = () => {
  const { editMovie, setEditMovie, movies, setMovies, getAllMovies } =
    useStates();
  const navigate = useNavigate();

  useEffect(() => {
    getAllMovies();
  }, []);

  const deleteMovie = (moviename) => {
    console.log(moviename);
    axios
      .delete(`http://localhost:8080/deletemovie/${moviename}`)
      .then((res) => {
        getAllMovies();
        toast.success(moviename + " movie deleted");
      });
  };

  const updateMovie = () => {
    navigate("/edit");
  };

  const AddMovie = () => {
    navigate("/add");
  };
  const Addreview = () => {
    navigate("/review");
  };

  const Logout = () => {
    navigate("/login");
  };

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
              <Icon size="large" edge="start" color="inherit" aria-label="logo" style={{color:'aqua'}}>
                <CameraRollIcon />
              </Icon>
              <Typography variant="h6" component="div" sx={{ flexGrow: 2 }} style={{color:'aqua'}}>
                Movie spooky
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button color="inherit" onClick={AddMovie} style={{color:'aqua'}}>Add Movies</Button>
                <Button color="inherit" onClick={Addreview} style={{color:'aqua'}}>
                  Review
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
        {/* <div style={{textAlign:'right',marginRight:'12%',paddingBottom:'30px'}}  onClick={()=>{AddMovie()}}>
              <button style={{color:'white',backgroundColor:'green'}} className='addicon'>+ Add Movie +</button>
            </div> */}

        {/* <form>
<label>
        Language
             <select >
            <option value="tamil" >Tamil</option>
            <option value="malayalam">Malayalam</option>
            <option value="telugu">Telugu</option>
          </select>
        </label>
</form> */}

        <div className="table">
          {/* <table>
          <tr>
            <th>Movie Name</th>
            <th>Movie Director</th>
            <th>Movie Actor</th>
            <th>Movie Actress</th>
            <th>Movie Duration</th>
            <th>Movie Category</th>
            <th>Movie Language</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr> */}
          <br />
          {movies.map((movie) => {
            return (
              <>
                <div className="moviebox">
                  <img className="movie-img" src={movie.url}></img>
                  <div className="moviedatas">
                  <div className="editicon" onClick={() => {
                      updateMovie();
                      setEditMovie(movie);
                    }}>
                    <ModeEditOutlineOutlinedIcon />
                  </div>
                  <div className="removeicons" onClick={() => deleteMovie(movie.moviename)}>
                    <RemoveCircleOutlineIcon />
                  </div>
                   <p>Moviename : {movie.moviename}</p>
                   <p>Director : {movie.director}</p>
                   <p>Actor : {movie.actor}</p>
                   <p>Actress : {movie.actress}</p>
                   <p>Category : {movie.category}</p>
                   <p>Duration : {movie.duration}</p>
                   <p>Language : {movie.language}</p>
                  </div>
                  {/* <div
                    className="editicon"
                    onClick={() => {
                      updateMovie();
                      setEditMovie(movie);
                    }}
                  >
                    <ModeEditOutlineOutlinedIcon />
                  </div>
                  <div
                    className="removeicons"
                    onClick={() => deleteMovie(movie.moviename)}
                  >
                    <RemoveCircleOutlineIcon />
                  </div> */}
                </div>
              </>
            );
          })}
          {/* </table> */}
        </div>
      </div>
      <div className="reviewbutton">
        <Button
          className="addrbutton"
          variant="contained"
          color="primary"
          onClick={Addreview}
        >
          Add Review
        </Button>
        {/* </div>
      <div className="addmoviebutton"> */}
        <Button
          className="addmbutton"
          variant="contained"
          color="success"
          onClick={AddMovie}
        >
          Add Movie
        </Button>
      </div>
      {/* <div style={{textAlign:'right',marginRight:'12%',paddingBottom:'3px',paddingTop:'8px'}}  onClick={()=>{Addreview()}}>
       <button style={{color:'white',backgroundColor:'blue'}} className='reviewicon'>+ Add Review +</button>
     </div> */}
    </div>
  );
};
