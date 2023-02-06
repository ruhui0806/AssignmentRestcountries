import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import CountryRow from './components/CountryRow';
import CountryDetail from './components/CountryDetail';

function App() {
    return (
        <Router>
            <div>
                <Link to="/">home</Link>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:name" element={<CountryDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
