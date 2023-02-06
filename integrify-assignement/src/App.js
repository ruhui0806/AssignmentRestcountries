import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
            <header className="App-header">
                {countries.map((country) => (
                    <div>{country.name.common}</div>
                ))}
            </header>
        </div>
    );
}

export default App;
