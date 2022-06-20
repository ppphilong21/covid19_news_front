
import axios from '../axios'

const handleCovidNewsApi = (inputID) => {
      return axios.get(`http://localhost:8000/api/get-api-covid-news?id=${inputID}`);
}
  
export {handleCovidNewsApi} ;


