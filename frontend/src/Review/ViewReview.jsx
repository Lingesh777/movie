import React from 'react'
import { useEffect,useState } from 'react';
import "./VIewReview.css"
export const ViewReview = () => {

    const [reviews, setReviews] = useState([]);

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

  return (
    <div>
        {
            reviews.map((review)=>
            {
                return(
                    <>
                        <div className='reviewcontainer'>
                           <p>Moviename : {review.favmovie}</p>
                           <p>Rating : {review.rating}</p> 
                           <p>Comments : {review.yourcomments}</p>
                        </div>
                    </>
                );
            }
            
            
            
            )
        }
    </div>
  )
}
