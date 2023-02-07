import axios from 'axios';

const getAll = () => {
    const req = axios.get('https://restcountries.com/v3.1/all');
    return req.then((res) => res.data);
};

const searchByName = async (name) => {
    const req = axios.get(`https://restcountries.com/v3.1/name/${name}`);
    return req.then((res) => res.data);
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, searchByName };
