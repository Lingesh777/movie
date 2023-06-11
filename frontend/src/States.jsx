import React from 'react'
import { useState,createContext,useContext } from 'react';
const Context=createContext();

export const States = ({children}) => {
    const[editMovie,setEditMovie]=useState();
  const [movies, setMovies] = useState([]);
  const[searchvalue,setSearchvalue]=useState("");
  const[reviews,setReviews]=useState("");

    const getAllMovies = () => {
      if(searchvalue==='')
      {
      fetch("http://localhost:8080/getmovie")
        .then((res) => res.json())
        .then((result) => {
          setMovies(result);
          console.log(result);
        });
      }
      else{
        fetch(`http://localhost:8080/getmovie/${searchvalue}`)
        .then((res) => res.json())
        .then((result) => {
          setMovies(result);
          console.log(result);
        });
      }
    };

    const getAllReviews = () => {
      fetch("http://localhost:8080/getreview")
        .then((res) => res.json())
        .then((result) => {
          setReviews(result);
          console.log(result);
        });
    };

  return (
    <Context.Provider value={{editMovie,setEditMovie,getAllMovies,movies, setMovies,searchvalue,setSearchvalue,reviews,setReviews,getAllReviews
      }}>
        {children}
    </Context.Provider>
  );
};

export const useStates = () =>useContext(Context);