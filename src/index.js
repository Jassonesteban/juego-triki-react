import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Game from './juego/juego';
//import Inicio from './juego/Inicio';
import reportWebVitals from './reportWebVitals';
//import Menu from './components/menu';
import { Header } from './components/header';
import { Footer } from './components/footer';
//import AppRouter from './routes';
//import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
