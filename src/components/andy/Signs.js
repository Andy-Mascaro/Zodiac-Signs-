import React from 'react';
import './Signs.css';



export default function Sings(props) {
  return (
    <div className="signs" >  
      <img alt={props.name} src={`${process.env.PUBLIC_URL}./signs/${props.name}.png`}/> <span className="name">{props.name}</span>
      <span>{props.dates}</span>
     
     
    </div>    
  );
}