import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Layout } from './Components/LayoutArea/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { interceptor } from './Utils/interceptor';
import { MiniThemeContext, siteMiniTheme } from './Utils/MiniTheme';
import { ThemeProvider } from '@mui/material';
import { muiTheme } from './Utils/MuiTheme';

// Create axios interceptor:
interceptor.createInterceptor();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider theme={muiTheme}>
                <MiniThemeContext.Provider value={siteMiniTheme}>
                    <Layout />
                </MiniThemeContext.Provider>
            </ThemeProvider>
        </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
