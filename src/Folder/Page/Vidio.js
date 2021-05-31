import React,{useEffect, useState} from "react";
import { YoutubePlayer } from "reactjs-media";
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import axios from "axios";
import { BrowserRouter, Route, Switch ,Link} from 'react-router-dom';

export default function Vidio(props){
    const[size,setSize]=useState({
        h : window.screen.height ,w : "100%" 
    });

    const[vID,setVID]=useState("");

    const getValue = ()=>{
        try{
            const queryString = window.location.search;
           const urlParams = new URLSearchParams(queryString);
           const getUrlVale = urlParams.get('vId');
         
           setVID(getUrlVale);
           //window.location.reload();
         //   console.log(getUrlVale);
           // console.log(vID);
          } catch (e) {
            console.log(e);
          }
        }
    
    //laod time access
useEffect(()=>{
    getValue();
},[]);

    return(
        <div>
          <Button   href="/"
                style={{ width: "50px", 
                height: "50px", 
                position: "fixed", 
                 borderRadious: "50%",
                 backgroundColor:"none",
                 top:"0px",
                 left:"85%"
             }}
          >
                <ArrowBackIosIcon style={{ color:"red"}}/>
                back
            </Button>
          
           <YoutubePlayer
                src={"https://www.youtube.com/watch?v=" + vID }
                width={size.w}
                height={size.h}
                allowFullScreen 
                title="this name"

            /> 


           
        </div>);
}