const countryReducer = (state = [], action) => {
    switch (action.type) {
        case 'ALL_COUNTRIES':
            return action.payload;
        case 'GET_A_COUNTRY':
            return state;
        default:
            return state;
    }
};
export const AllCountries = (data) => {
    return {
        type: 'ALL_COUNTRIES',
        payload: data,
    };
};

export const GetCountry = (data) => {
    return {
        type: 'GET_A_COUNTRY',
        payload: data,
    };
};
export default countryReducer;
<<<<<<< HEAD
=======


>>>>>>> refs/remotes/origin/b7-redux
