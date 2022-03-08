import React from 'react';
import './Main.css';

import background from '../../background.jpeg';
import Signs from '../Signs/Signs';


export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>

      {signs.map((item) => (
        <Signs
          key={item.name} {...item} />
      ))}

    </main>
  );
}