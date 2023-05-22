import React from 'react'
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./VIewReview.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export const ViewReview = () => {

    const [reviews, setReviews] = useState([]);
    const navigate=useNavigate();

    const getAllReviews = () => {
      fetch("http://localhost:8080/getreview")
        .then((res) => res.json())
        .then((result) => {
          setReviews(result);
          console.log(result);
        });
    };
    useEffect(() => {
        getAllReviews();
      }, []);

     const goback=()=>{
        navigate("/movie")
      }

  return (
    <div>
      <div className='reviewback' onClick={()=>goback()}>
       <ArrowBackIcon/>
       </div>
        {
            reviews.map((review)=>
            {
                return(
                    <>
                        <div className='reviewcontainer'>
                           <p style={{color:"aqua"}}>Moviename : {review.favmovie}</p>
                           <p style={{color:"aqua"}}>Rating : {review.rating}</p> 
                           <p style={{color:"aqua"}}>Comments : {review.yourcomments}</p>
                        </div>
                    </>
                );
            }
            
            
            
            )
        }
    </div>
  )
}
