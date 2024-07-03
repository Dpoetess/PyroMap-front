/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    </>
  )
}

export default App
 */


import React from 'react';
import useAPI from './services/UseApi';
import { worldArea_url } from './config/urls';


const App = () => {
  const { data, loading, error } = useAPI(worldArea_url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data from API</h1>
      <pre>{data}</pre>
    </div>
  );
};

export default App;