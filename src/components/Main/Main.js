import React from 'react';
import './Main.css';
import { zodiac } from '../../Data';
import background from '../../background.jpeg';
import Signs from '../andy/Signs';


export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>

      {zodiac.map((item) => (
        <Signs
          key={item.name} name={item.name} dates={item.dates} />
      ))}

    </main>
  );
}