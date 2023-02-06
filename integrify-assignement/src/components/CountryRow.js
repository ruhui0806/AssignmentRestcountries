import React from 'react';
import { Link } from 'react-router-dom';

const CountryRow = ({ country }) => {
    return (
        <tr>
            <td>
                <img
                    src={country.flags.png}
                    alt="Flag of the current country"
                />
            </td>
            <td>{country.name.common}</td>
            <td>{country.region}</td>
            <td>{country.population}</td>
            <td>
                <ul>
                    {/* {Object.keys(country.languages).map((key) => (
                        <li key={key}> {country.languages[key]} </li>
                    ))} */}
                    <li>1</li>
                    <li>2</li>
                </ul>
            </td>
            <td>
                >
                {/* <Link
                    to={`/countries/${country.name.common}`}
                    className="page-link "
                >
                    ">"
                </Link> */}
            </td>
        </tr>
    );
};

export default CountryRow;
