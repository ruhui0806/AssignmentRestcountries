import React from 'react';
import { Link } from 'react-router-dom';

const CountryRow = ({ country }) => {
    const languages = country.languages;
    // console.log(languages);
    const entries = languages
        ? Object.keys(languages).map((key) => languages[key])
        : [];
    // console.log('entries:', entries);
    return (
        <tr>
            <td>
                <img
                    src={country.flags.png}
                    alt={`the flag of the country ${country.name.common}`}
                />
            </td>
            <td>{country.name.common}</td>
            <td>{country.region}</td>
            <td>{country.population}</td>
            <td>
                <ul>
                    {entries.map((entry, index) => (
                        <li key={index}>{entry}</li>
                    ))}
                </ul>
            </td>
            <td>
                <Link to={`/${country.name.common}`} className="page-link">
                    >
                </Link>
            </td>
        </tr>
    );
};

export default CountryRow;
