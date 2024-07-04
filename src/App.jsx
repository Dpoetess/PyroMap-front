/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      
    </>
  )
}

export default App
 */


import React from 'react';
import useAPI from './services/UseApi';
import Papa from 'papaparse';
import { worldArea_url } from './config/urls';

const App = () => {
  const { data, loading, error } = useAPI(worldArea_url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (data) {
    console.log('Parsed Data:', data);
  }

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {JSON.stringify(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;