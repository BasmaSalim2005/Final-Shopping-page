// main.jsx
import React from 'https://unpkg.com/react@18/umd/react.production.min.js'; // Load React from CDN
import ReactDOM from 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js'; // Load ReactDOM from CDN
import App from './App.jsx';
import './index.css';
import { Provider } from 'https://unpkg.com/react-redux@8/umd/react-redux.min.js'; // Load React-Redux from CDN
import store from './store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
