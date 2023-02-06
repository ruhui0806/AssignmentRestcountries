import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryRow from './CountryRow';

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [input, setInput] = useState('');
    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then((response) => {
                console.log('promise fulfilled');
                setCountries(response.data);
            })
            .catch((error) => console.log(error));
    }, []);
    const handleCountriesShow = (event) => {
        setInput(event.target.value);
        console.log(event.target.value);
    };
    const countriesToshow =
        input === ''
            ? countries
            : countries.filter((country) => {
                  return (
                      country.name.common
                          .toLowerCase()
                          .includes(input.toLowerCase()) === true
                  );
              });
    return (
        <div>
            <>
                Search by country name{' '}
                <input
                    type="text"
                    value={input}
                    onChange={handleCountriesShow}
                    placeholder="Search by country name"
                />{' '}
            </>
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
                    {countriesToshow.map((country) => (
                        <CountryRow
                            country={country}
                            key={country.name.common}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
