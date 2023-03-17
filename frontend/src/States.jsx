import React from 'react'
import { useState,createContext,useContext } from 'react';
const Context=createContext();

export const States = ({children}) => {
    const[editMovie,setEditMovie]=useState();
  const [movies, setMovies] = useState([]);

    const getAllMovies = () => {
      fetch("http://localhost:8080/getmovie")
        .then((res) => res.json())
        .then((result) => {
          setMovies(result);
          console.log(result);
        });
    };
  return (
    <Context.Provider value={{editMovie,setEditMovie,getAllMovies,movies, setMovies
      }}>
        {children}
    </Context.Provider>
  );
};

export const useStates = () =>useContext(Context);