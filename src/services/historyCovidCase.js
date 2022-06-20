import axios from '../axios'

const handleHistoryCovidCaseAPI = (inputID) => {
    return axios.get(`http://localhost:8000/api/get-api-covidHistoryCase?id=${inputID}`);
}

export {handleHistoryCovidCaseAPI} ;