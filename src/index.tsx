import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.css';
import App from './App';
import {HeadProvider, Link as LinkHead} from 'react-head'
// import dotenv from 'dotenv'
// dotenv.config()

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <HeadProvider>
          <LinkHead rel="preconnect" href="https://fonts.googleapis.com"/>
          <LinkHead rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
          <LinkHead href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800;900&display=swap"
                    rel="stylesheet"/>
        </HeadProvider>
        <App/>
    </React.StrictMode>
);
