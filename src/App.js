import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {CssBaseline, Switch, ThemeProvider} from "@mui/material";
import { useDefaultTheme } from './theme';
import DevicesPage from "./components/DevicesPage";

function App() {
    const theme = useDefaultTheme(); // uses JS function from theme.js
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router basename={'/'}>
                <div className="app" >
                    <div className="content" >
                        <Routes>
                            <Route path='/' element={<DevicesPage />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
