import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import restCountriesService from '../services/restCountriesService.js';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useDispatch, useSelector } from 'react-redux';
import { GetCountry } from '../reducers/countryReducer.js';
const CountryDetail = () => {
    const { name } = useParams();

    const dispatch = useDispatch();

    const useCountry = (name) => {
        useEffect(() => {
            if (name !== '') {
                restCountriesService
                    .searchByName(name)
                    .then((country) => {
                        console.log('promise search country by name fulfilled');
                        dispatch(GetCountry(country));
                    })
                    .catch((error) => console.log(error));
            }
        }, [name]);
        const country = useSelector((state) => state);
        return country;
    };
    const country = useCountry(name);

    const fontStyle = { color: 'blue', fontWeight: 'bold' };
    if (!country) {
        return <div>not found...</div>;
    }

    return (
        <div className="container">
            <h1>{country[0].name.common}</h1>
            <h4>{country[0].capital}</h4>
            <img
                src={country[0].flags.svg}
                height="500"
                alt={`flag of ${country[0].name.common}`}
            />
            <p>
                The country belongs to{' '}
                <span style={fontStyle}> {country[0].region} </span> and{' '}
                <span style={fontStyle}>{country[0].subregion}</span>{' '}
                sub-region. Located at the{' '}
                <span style={fontStyle}>{country[0].latlng[0]}</span> °N and{' '}
                <span style={fontStyle}>{country[0].latlng[1]}</span> °W, this
                country has population of{' '}
                <span style={fontStyle}>{country[0].population}</span> and it
                has gained the independent, according to the CIA World Factbook.
            </p>
            <Link to="/">
                <ArrowBackIosIcon />{' '}
            </Link>
        </div>
    );
};

export default CountryDetail;
