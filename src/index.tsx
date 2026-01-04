import React from 'react'
import './styles/index.css'
import App from "./app/App";
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

if (root) {
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}
