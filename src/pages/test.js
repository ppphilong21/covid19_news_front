import { useState, useEffect } from 'react';

import React, {Fragment} from 'react';

import VietNamAndWorld from '../containers/VietNamAndWorld/vietNamWorld'
import Covid19News from '../containers/covid19News/covid19News'

import {handleCovidCaseApi} from '../services/covidcase'
import {handleHistoryCovidCaseAPI} from '../services/historyCovidCase'
import {handleCovidNewsApi} from '../services/covidNews'

//import { render } from 'react-dom';
function Test() {
   
   const [covidDetails, setCovidDetails] = useState({});
   const [historyCovidDetails, setHistoryCovidDetails] = useState({});
   const [covidNews, setCovidNews] = useState({});
   const TYPE_ONE = "ban tin covid19";
   useEffect( () => {
          async function fetchData(){
            let mounted = true;
            await handleCovidCaseApi('ALL')
              .then(items => {
                if(mounted) {
                  setCovidDetails(items)
                }
              })
              await handleHistoryCovidCaseAPI('ALL')
              .then(items => {
                  if(mounted) {
                    setHistoryCovidDetails(items)
                 
                  }
                })
                await handleCovidNewsApi('ALL')
                .then(items => {
                  if(mounted) {
                    setCovidNews(items)
                  
                  }
                })
            return () => mounted = false;
          }
          fetchData();
          }, [])  
         
      return (
         <div className="App">
              <VietNamAndWorld historyCovidDetails={historyCovidDetails} covidDetails={covidDetails}  />
              <Covid19News  covidNews={covidNews} />
         </div>
        )
} 


export default Test;
