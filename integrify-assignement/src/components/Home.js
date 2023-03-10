import React, { useState, useEffect } from 'react';
import CountryRow from './CountryRow';
import Pagination from './Pagination';
import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import restCountriesService from '../services/restCountriesService.js';
const Home = () => {
    const [countries, setCountries] = useState([]);
    const [input, setInput] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        restCountriesService
            .getAll()
            .then((countries) => setCountries(countries));
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

    const countriesToshow =
        input === ''
            ? [...countries].sort((a, b) =>
                  a.name.common.localeCompare(b.name.common)
              )
            : countries.filter((country) => {
                  return (
                      country.name.common
                          .toLowerCase()
                          .includes(input.toLowerCase()) === true
                  );
              });
    console.log('countriesToshow: ', countriesToshow.length);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div>
            <div>
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
                                id="input-adornment"
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
            </div>

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
                    {countriesToshow.length > rowsPerPage
                        ? countriesToshow
                              .slice(
                                  page * rowsPerPage,
                                  page * rowsPerPage + rowsPerPage
                              )
                              .map((country) => (
                                  <CountryRow
                                      country={country}
                                      key={country.name.common}
                                  />
                              ))
                        : countriesToshow.map((country) => (
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
