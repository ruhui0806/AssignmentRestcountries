import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CountryRow = ({ country }) => {
    const languages = country.languages;

    const languageList = languages
        ? Object.keys(languages).map((key) => languages[key])
        : [];

    return (
        <tr>
            <td>
                <img
                    src={country.flags.png}
                    alt={`the flag of the country ${country.name.common}`}
                    height={'70'}
                    width={'90'}
                />
            </td>
            <td>{country.name.common}</td>
            <td>{country.region}</td>
            <td>{country.population}</td>
            <td>
                <ul>
                    {languageList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </td>
            <td>
                <Link to={`/${country.name.common}`} className="page-link">
                    <i>
                        {' '}
                        <KeyboardArrowRightIcon className="arrowBtn" />
                    </i>
                </Link>
            </td>
        </tr>
    );
};

export default CountryRow;
