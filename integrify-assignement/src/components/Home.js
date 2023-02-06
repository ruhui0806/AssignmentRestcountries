import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryRow from './CountryRow';
import Pagination from './Pagination';

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [input, setInput] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
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

    let sortedCountries = [...countries].sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
    );
    const countriesToshow =
        input === ''
            ? sortedCountries
            : sortedCountries.filter((country) => {
                  return (
                      country.name.common
                          .toLowerCase()
                          .includes(input.toLowerCase()) === true
                  );
              });

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {countriesToshow
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((country) => (
                            <CountryRow
                                country={country}
                                key={country.name.common}
                            />
                        ))}
                </tbody>
            </table>
            <Pagination
                count={Number(countries.length)}
                component="div"
                rowsPerPage={rowsPerPage}
                page={page}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    );
};

export default Home;
