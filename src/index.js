import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Components/Main'
import Header from './Components/Header'

function Page () {
  return (
    <div>
      
      <Header />
      <Main />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);

