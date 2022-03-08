import React from 'react';
import './Main.css';

import background from '../../zodiac.jpeg';
import 


export default function main() {
  return (
    <main style={{ backgroundImage: `url(${background})`}>

      {signs.map((item) => (
        <signs
          key={item.name} {...item} 

        />
      ))}

    </main>
  );
}