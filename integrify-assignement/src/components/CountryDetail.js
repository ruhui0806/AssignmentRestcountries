import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CountryDetail = () => {
    const { name } = useParams();

    // console.log('this name: ', name);

    const useCountry = (name) => {
        const [country, setCountry] = useState(null);

        useEffect(() => {
            if (name !== '') {
                axios
                    .get(`https://restcountries.com/v3.1/name/${name}`)
                    .then((response) => {
                        console.log('promise fulfilled');
                        setCountry(response.data);
                    })
                    .catch((error) => console.log(error));
            }
        }, [name]);
        // console.log(country);
        return country;
    };
    const country = useCountry(name);

    const fontStyle = { color: 'blue', fontWeight: 'bold' };
    if (!country) {
        return <div>not found...</div>;
    }

    return (
        <div>
            <h1>{country[0].name.common}</h1>
            <h4>{country[0].capital}</h4>
            <img
                src={country[0].flags.svg}
                height="100"
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
        </div>
    );
};

export default CountryDetail;
