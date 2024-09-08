import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

import './style.css'
import { DataProvider } from './hooks/useData/data.provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DataProvider>
            <App />
        </DataProvider>
    </React.StrictMode>
);
