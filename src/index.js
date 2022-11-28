import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import store from "./redux/store"


const options = {

    // you can also just use 'bottom center'
    position: positions.BOTTOM_LEFT,
    timeout: 3000,
    offset: '3px',
    // you can also just use 'scale'
    transition: transitions.FADE,
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
        <Provider store={store}>
            <AlertProvider template={AlertTemplate} {...options} >
                <App />
            </AlertProvider>
        </Provider>

    </React.StrictMode>
  </BrowserRouter>
);
