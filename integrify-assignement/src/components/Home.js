import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryRow from './CountryRow';

const Home = () => {
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
        <div>
            <table className="table table-hover mt-3">
                <thead>
                    <tr>
                        <th>Flag</th>
                        <th>Name</th>
                        <th>Region</th>
                        <th>Population</th>
                        <th>Language</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map((country) => (
                        <CountryRow country={country} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
