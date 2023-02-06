import React, { useEffect, useState, useParams } from 'react';

import axios from 'axios';

const CountryDetail = () => {
    const { name } = useParams();
    const [countryData, setCountryData] = useState([]);
    useEffect(() =>
        axios
            .get(`https://restcountries.com/v3.1/name/${name}`)
            .then((response) => {
                console.log(response.data);
                setCountryData(response.data);
            })
    );
    return (
        <div>
            <>this is the single country detail page</>
            <h1>{countryData.name.common}</h1>
            <h4>{countryData.capital}</h4>
        </div>
    );
};

export default CountryDetail;
