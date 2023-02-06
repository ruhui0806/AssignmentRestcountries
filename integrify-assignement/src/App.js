import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';

function App() {
    return (
        <Router>
            <div>
                <Link to="/">home</Link>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/countries/:name" element={<CountryRow />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
