import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useStates } from '../States'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import './Edit.css'
import { toast,ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function Edit(){
     const navigate=useNavigate();
     const[url,setUrl]=useState("");
    const[moviename,setMoviename]=useState("");
    const[actor,setActor]=useState("");
    const[actress,setActress]=useState("");
    const[director,setDirector]=useState("");
    const[duration,setDuration]=useState("");
    const[category,setCategory]=useState("");
    const[language,setLanguage]=useState("");
    const {editMovie,getAllMovies} =useStates();
    useEffect(()=>{
        setUrl(editMovie?.url);
        setMoviename(editMovie?.moviename);
        setActor(editMovie?.actor);
        setActress(editMovie?.actress);
        setDirector(editMovie?.director);
        setDuration(editMovie?.duration);
        setCategory(editMovie?.category);
        setLanguage(editMovie?.language);
    },[editMovie]);
    const Moviedetails=(moviename)=>{
        axios.put(`http://localhost:8080/updatemovie/${moviename}`,{
            url:url,
            moviename:moviename,
            actor:actor,
            actress:actress,
            director:director,
            duration:duration,
            category:category,
            language:language
        })
        .then((res)=>{
            console.log(res);
            getAllMovies();
        });
        toast.success(moviename+" movie updated");
            setTimeout(()=>{
                navigate("/movie")
            },2000);
    };

    const gotoDb=()=>{
        navigate("/movie");
    }

    return(
        <div className='editbody'>
            <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className="textfields">
        <div className="url">
                <TextField
                    onChange={(e)=>setUrl(e.target.value)}
                    value={url}
                    id='outlined-basic'
                    label='Image url'
                    variant='outlined'
                />
            </div>
            <div className="Moviename">
                <TextField
                    onChange={(e)=>setMoviename(e.target.value)}
                    value={moviename}
                    id='outlined-basic'
                    label='Moviename'
                    variant='outlined'
                />
            </div>
            <div className="Actor">
                <TextField
                    onChange={(e)=>setActor(e.target.value)}
                    value={actor}
                    id='outlined-basic'
                    label='Actor'
                    variant='outlined'
                />
            </div>
            <div className="Actress">
                <TextField
                    onChange={(e)=>setActress(e.target.value)}
                    value={actress}
                    id='outlined-basic'
                    label='Actress'
                    variant='outlined'
                />
            </div>
            <div className="Director">
                <TextField
                    onChange={(e)=>setDirector(e.target.value)}
                    value={director}
                    id='outlined-basic'
                    label='Director'
                    variant='outlined'
                />
            </div>
            <div className="Duration">
                <TextField
                    onChange={(e)=>setDuration(e.target.value)}
                    value={duration}
                    id='outlined-basic'
                    label='Duration'
                    variant='outlined'
                />
            </div>
            <div className="Category">
                <TextField
                    onChange={(e)=>setCategory(e.target.value)}
                    value={category}
                    id='outlined-basic'
                    label='Category'
                    variant='outlined'
                />
            </div>
            <div className="Language">
                <TextField
                    onChange={(e)=>setLanguage(e.target.value)}
                    value={language}
                    id='outlined-basic'
                    label='Language'
                    variant='outlined'
                />
            </div>
            
            <div className='editbutton'>
                <Button className="getbutton" variant='contained' color="error" onClick={gotoDb}>
                    Cancel
                </Button>  
                <Button  variant='contained' color="success" className='editatedit' onClick={()=>Moviedetails(editMovie.moviename)}>
                    Update
                </Button>
            </div>
            </div>
                
        </div>
    );
};

export default Edit;


