import React, { useState, useEffect } from "react";
import './Db.css'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStates } from "../States";
import Button from "@mui/material/Button"

export const Db = () => {

  const {editMovie,setEditMovie,movies, setMovies,getAllMovies} =useStates();
  const navigate=useNavigate();
  
  useEffect(() => {
    getAllMovies();
  }, []);

const deleteMovie = (moviename) =>{
  console.log(moviename);
  axios.delete(`http://localhost:8080/deletemovie/${moviename}`).then((res)=>{
    getAllMovies();
  });
};

const updateMovie = () =>{
  navigate("/edit");
}

const AddMovie =() =>{
  navigate("/add")
}
const Addreview =() =>{
  navigate("/review")
}


  return(
    <div className="tablebody">
      <div>
        <h3 style={{textAlign:'center'}} >Movie Details</h3>
            {/* <div style={{textAlign:'right',marginRight:'12%',paddingBottom:'30px'}}  onClick={()=>{AddMovie()}}>
              <button style={{color:'white',backgroundColor:'green'}} className='addicon'>+ Add Movie +</button>
            </div> */}
          
        <div className='table'>
          <table>
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
          </tr>
          <br/>
        { movies.map((movie) => {
          return (
            <tr>
            <td> {movie.moviename} </td>
            <td> {movie.director} </td>
            <td> {movie.actor} </td>
            <td> {movie.actress} </td>
            <td> {movie.duration} </td>
            <td> {movie.category} </td>
            <td> {movie.language} </td>
            <td>
            <div className='editicon' onClick={()=>{updateMovie();setEditMovie(movie)}}>
              <ModeEditOutlineOutlinedIcon />
            </div>
            </td>
            <td>
            <div className='removeicons' onClick={()=> deleteMovie(movie.moviename)}>
              <RemoveCircleOutlineIcon />
            </div>
            </td>
            </tr>
          )    
      })}
      </table>
      </div>
      </div>
      <div className="reviewbutton">
      <Button className="addrbutton" variant='contained' color="primary" onClick={Addreview}>
                     Add Review
                </Button>
      {/* </div>
      <div className="addmoviebutton"> */}
                <Button className="addmbutton" variant='contained' color="success" onClick={AddMovie}>
                    Add Movie
                </Button>
            </div>
       {/* <div style={{textAlign:'right',marginRight:'12%',paddingBottom:'3px',paddingTop:'8px'}}  onClick={()=>{Addreview()}}>
       <button style={{color:'white',backgroundColor:'blue'}} className='reviewicon'>+ Add Review +</button>
     </div> */}
      </div>
  )
};
