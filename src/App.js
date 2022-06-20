import { useState, useEffect } from 'react';
import axios from 'axios';
import React, {Fragment} from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Bantin from './pages/bantin'
import Chidao from './pages/chidao'
import Duphong from './pages/duphong'
import Hoatdong from './pages/hoatdong'
import Huongdan from './pages/huongdan'
import Thegioi from './pages/thegioi'
import Tintuc from './pages/tintuc'
import Vaccine from './pages/vaccine'
import Test from './pages/test'
import LienKetNews from './containers/covid19News/lienKetNews/lienKetNews'
import Header from './containers/header/Header'
// import VietNamAndWorld from './containers/VietNamAndWorld/vietNamWorld'
// import Covid19News from './containers/covid19News/covid19News'
import {handleCovidCaseApi} from './services/covidcase'
import {handleHistoryCovidCaseAPI} from './services/historyCovidCase'
import {handleCovidNewsApi} from './services/covidNews'
import Footer from './containers/footer/footer'
//import { render } from 'react-dom';
function App() {
   
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
                    console.log('success');
                  }
                })
                await handleCovidNewsApi('ALL')
                .then(items => {
                  if(mounted) {
                    setCovidNews(items)
                    console.log('success');
                  }
                })
            return () => mounted = false;
          }
          fetchData();
          }, [])  
         
      return (
         <div className="App-Test">
         <Router>
            <Fragment>
              <Header/>
              <Routes>
                <Route path="/" element={<Test/>} exact="true"/>
                <Route
                    path="/bantin"
                    element={<Bantin covidNews = {covidNews} exact />} 
                />
                  
                <Route path="/chidao" element={<Chidao covidNews = {covidNews} exact/>}/>
                <Route path="/duphong" element={<Duphong covidNews = {covidNews} exact/>}/>
                <Route path="/vaccine" element={<Vaccine covidNews = {covidNews} exact/>}/>
                <Route path="/hoatdong" element={<Hoatdong covidNews = {covidNews} exact/>}/>
                <Route path="/huongdan" element={<Huongdan covidNews = {covidNews} exact/>}/>
                <Route path="/tintuc" element={<Tintuc covidNews = {covidNews} exact/>}/>
                <Route path="/thegioi" element={<Thegioi covidNews = {covidNews} exact/>}/>
              </Routes>
            </Fragment>
              {/* <VietNamAndWorld historyCovidDetails={historyCovidDetails} covidDetails={covidDetails}  />
              <Covid19News  covidNews={covidNews} /> */}
              {/* <LienKetNews /> */}
            <Footer/>
          </Router>
         
       
           
         </div>
        )
} 


export default App;
