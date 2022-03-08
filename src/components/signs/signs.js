import React from 'react';
import './Signs.css';



export default function Sings(props) {
  return (
    <div className="signs" style={{ left: props.left, top: props.top }}>  
      <img alt={props.name} src={`${process.env.PUBLIC_URL}/signs/${props.type}.svg`}/> <span className="name">{props.name}</span>
      <span>{props.dates}</span>
     
     
    </div>    
  )
}