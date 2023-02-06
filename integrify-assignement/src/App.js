import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import CountryRow from './components/CountryRow';
function App() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then((response) => {
                console.log('promise fulfilled');
                setCountries(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="App">
            {/* <Router> */}
            <Home countries={countries} />
            {/* <Routes>
                    <Route path="/countries/:name" element={CountryRow} />
                </Routes> */}
            {/* </Router> */}
        </div>
    );
}

export default App;
