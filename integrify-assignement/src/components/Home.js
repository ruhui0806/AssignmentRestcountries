import React from 'react';
import CountryRow from './CountryRow';

const Home = ({ countries }) => {
    return (
        <div>
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
                    {countries.map((country) => (
                        <CountryRow country={country} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
