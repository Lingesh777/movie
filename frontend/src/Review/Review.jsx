import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast,ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import "./Review.css"
import { useStates } from '../States';


export const Review = () => {
  const[id,setId]=useState("");
  const[favmovie,setFavmovie]=useState("");
  const[rating,setRating]=useState("");
  const[yourcomments,setYourcomments]=useState("");
  const{reviews,setReviews,getAllReviews}=useStates();
  const AddReview=()=>{
      if(favmovie===''||rating===''||yourcomments==='')
      {
          toast.error("Enter all fields");
        }
        else
        {
            axios.post("http://localhost:8080/addreview",{
                  //  id:id,
                   favmovie:favmovie,
                   rating:rating,
                   yourcomments:yourcomments
                })
                .then((res)=>{
                    console.log(res);
                    getAllReviews();
                });
                toast.success("Review posted");
                setTimeout(() => {
                  
                  navigate("/user");
                }, 2000);
        }
    };
    const navigate=useNavigate();

    const gotoDb =() =>{
      navigate("/user");
    }
  return (
    
    <div>
      <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className='reviewatadd'>
        <div className='rbody'>
        <div className='textfields'>
            <div className="Moviename">
                <TextField
                    onChange={(e)=>setFavmovie(e.target.value)}
                    value={favmovie}
                    id='outlined-basic'
                    label='Favmovie'
                    variant='outlined'
                />
            </div>
            <div className="Actor">
                <TextField
                    onChange={(e)=>setRating(e.target.value)}
                    value={rating}
                    id='outlined-basic'
                    label='Rating'
                    variant='outlined'
                    // onKeyPress={(event)=>{
                    //     if(!/[0-9]/.test(event.key)){
                    //         event.preventDefault();
                    //     }
                    // }}
                />
            </div>
            <div className="Actress">
                <TextField
                    onChange={(e)=>setYourcomments(e.target.value)}
                    value={yourcomments}
                    id='outlined-basic'
                    label='Comments'
                    variant='outlined'
                />
            </div>
            <div className='addbutton'>
                <Button className="getbutton" variant='contained' color="error" onClick={gotoDb}>
                    Cancel
                </Button>
                <Button  variant='contained' color="success"  className='postatpost' onClick={AddReview}>
                    post
                </Button>
             </div>   
            </div>
            </div>
    </div>
    </div>
  );
};
