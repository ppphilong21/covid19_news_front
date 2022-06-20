import React from 'react';
import PropTypes from 'prop-types';
import Test from '../containers/test/test'
import Telephone from '../containers/telephone/telephone'


Chidao.propTypes = {
    covidNews: PropTypes.object,
};

const TYPE_ONE = 'Tình hình thế giới';

function Chidao(props) {
 
    const covidNews = props.covidNews;

    const banTinCovid19 = [];
    console.log(covidNews);

    const covidNewsArr = (covidNewsArrType, typeNews ) => {
      
      if (covidNews.CovidNewsAPI){
        covidNews.CovidNewsAPI.forEach((item) => {
          if (item.type === typeNews ) {
             
            covidNewsArrType.push({
              id: item.id,
              type: item.type,
              headingTitle: item.headingTitle,
              subTitle: item.subTitle,
              linkNews: item.linkNews,
              linkImage: item.linkImage
            });
          }
        })
      }
      return covidNewsArrType;
    }
    covidNewsArr(banTinCovid19, TYPE_ONE);
    

    return (
      <>
        <div className="title container mt-4">
                            <a href="#" className="title-bars title-name title-name--VN">Tình hình thế giới</a>      
              </div>
         <div className="container d-flex mt-3">
          
                <Test banTinCovid19 = {banTinCovid19}/>
                <Telephone/>
         </div>
      </>
        
    );
}

export default Chidao;