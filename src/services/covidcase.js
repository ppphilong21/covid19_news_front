
import axios from '../axios'

const handleCovidCaseApi = (inputID) => {
      return axios.get(`http://localhost:8000/api/get-api-covidCase?id=${inputID}`);
}
  
export {handleCovidCaseApi} ;


