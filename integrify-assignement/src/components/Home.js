import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryRow from './CountryRow';
import Pagination from './Pagination';
import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

    const theme = createTheme({
        palette: {
            primary: {
                main: '#FFFFFF',
            },
        },
    });
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
                {' '}
                <nav className=" navbar navbar-dark bg-primary">
                    <div className="container-fluid">
                        <a href="/" className="navbar-brand d-inline">
                            <FormatListBulletedIcon
                                sx={{ m: 1 }}
                                align="justify"
                            />
                            country
                        </a>
                        <ThemeProvider theme={theme}>
                            <OutlinedInput
                                color="primary"
                                sx={{ ml: 1 }}
                                size="small"
                                type="text"
                                value={input}
                                onChange={handleCountriesShow}
                                placeholder="Search by name"
                                startAdornment={
                                    <InputAdornment
                                        position="start"
                                        color="primary"
                                    >
                                        <SearchIcon color="primary" />
                                    </InputAdornment>
                                }
                            />
                        </ThemeProvider>
                    </div>
                </nav>
            </>

            <table className="table table-hover mx-2 my-4">
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
            <div className="wrapper">
                <Pagination
                    count={Number(countries.length)}
                    component="div"
                    rowsPerPage={rowsPerPage}
                    page={page}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </div>
        </div>
    );
};

export default Home;
