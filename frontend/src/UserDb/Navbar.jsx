import React from 'react'
import { useState,useEffect } from 'react'
import { useStates } from '../States'

export const Navbar = () => {

    const{getAllMovies,searchvalue,setSearchvalue}=useStates();

    useEffect( ()=>{
        getAllMovies();
    },[searchvalue]);

  return (
    <div>
        <input type="text"  onChange={(e)=>setSearchvalue(e.target.value)} placeholder='search movie'/>
    </div>
  )
}
