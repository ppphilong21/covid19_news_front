import React from 'react';
import PropTypes from 'prop-types';
import BanTinCovid19 from './banTinCovid19/banTinCovid19'
import ChiDao from './chiDaoChongDich/chiDaoChongDich';
import DuPhongDieuTri from './duPhongDieuTri/duPhongDieuTri';
import VaccineNews from './vaccineNews/vaccineNews';
import HoatDongNews from './hoatDongNews/hoatDongNews';
import HuongDanNews from './huongDanNews/huongDanNews';
import TinhHinhNews from './tinhHinhNews/tinhHinhNews';
import TinTucNews from './tinTucNews/tinTucNews';
import LienKetNews from './lienKetNews/lienKetNews'
import '../covid19News/covid19News.scss';
covid19News.propTypes = {
    covidNews: PropTypes.object.isRequired,
};
// covid19News.defaultProps = {
//     covidNews: {}
// }
const TYPE_ONE = 'ban tin covid-19';
const TYPE_TWO = 'chi dao chong dich';
const TYPE_THREE = 'Dự phòng - Điều trị';
const TYPE_FOUR = 'Vaccine - Tiêm chủng';
const TYPE_FIVE = 'Hoạt động địa phương';
const TYPE_SIX = 'Hướng dẫn';
const TYPE_EIGHT = 'Tin tức';
const TYPE_SEVEN = 'Tình hình thế giới';
const NEWS_NUMBER_3 = 3;
const NEWS_NUMBER_8 = 8;
function covid19News(props) {
 
    const covidNews = props.covidNews;
    const banTinCovid19 = [];
    const chiDao = [];
    const duPhongMainNews = [];
    const duPhongLastNews = [];
    const vaccineMainNews = [];
    const vaccineLastNews = [];
    const huongDanNews = [];
    const hoatDongNews = [];
    const tinhHinhMainNews = [];
    const tinhHinhLastNews = [];
    const tinTucNews = [];


    const covidNewsArr = (covidNewsArrType, typeNews ,numberCount, count) => {
      
      if (covidNews.CovidNewsAPI){
        covidNews.CovidNewsAPI.forEach((item) => {
          if (item.type === typeNews && (count < numberCount)) {
             
            covidNewsArrType.push({
              id: item.id,
              type: item.type,
              headingTitle: item.headingTitle,
              subTitle: item.subTitle,
              linkNews: item.linkNews,
              linkImage: item.linkImage
            });
            count++;
            
          }
        })
      }
      return covidNewsArrType;
    }
    covidNewsArr(banTinCovid19, TYPE_ONE, NEWS_NUMBER_3, 0);

    covidNewsArr(chiDao, TYPE_TWO, NEWS_NUMBER_3, 0);

    covidNewsArr(duPhongMainNews, TYPE_THREE, 1, 0);
    covidNewsArr(duPhongLastNews, TYPE_THREE, NEWS_NUMBER_3, 0);

    covidNewsArr(vaccineMainNews, TYPE_FOUR, 1, 0);
    covidNewsArr(vaccineLastNews, TYPE_FOUR, NEWS_NUMBER_3, 0);

    covidNewsArr(huongDanNews, TYPE_SIX, NEWS_NUMBER_3, 0);

    covidNewsArr(tinhHinhMainNews, TYPE_SEVEN, 1, 0);
    covidNewsArr(tinhHinhLastNews, TYPE_SEVEN, 3, 0);

    covidNewsArr(hoatDongNews, TYPE_FIVE, NEWS_NUMBER_3, 0);

    covidNewsArr(tinTucNews, TYPE_EIGHT, NEWS_NUMBER_8 ,0)

    return (
        <>
          <div className="home-news ">
            <div className="home-news--wrap">
              <div className="container container-line d-flex justify-content-between flex-md-row flex-column">
                  <BanTinCovid19 banTinCovid19 = {banTinCovid19}/>
                  <ChiDao chiDao = {chiDao}/>
                </div>
                <div className="container container-line d-flex justify-content-between flex-md-row flex-column">
                  <DuPhongDieuTri duPhongMainNews = {duPhongMainNews} duPhongLastNews = {duPhongLastNews} />
                </div>
                <div className="container container-line d-flex justify-content-between flex-md-row flex-column">
                  <VaccineNews vaccineMainNews = {vaccineMainNews} vaccineLastNews = {vaccineLastNews} />
                </div>
                <div className="container container-line ">
                  <div className =" news-space d-flex justify-content-between flex-md-row flex-column">
                    <HoatDongNews hoatDongNews = {hoatDongNews}/>
                    <HuongDanNews huongDanNews = {huongDanNews}/>
                  </div>
                </div>
                <div className="container container-line d-flex justify-content-between flex-md-row flex-column">
                  <TinhHinhNews tinhHinhMainNews = {tinhHinhMainNews} tinhHinhLastNews = {tinhHinhLastNews} />
                </div>
                <div className="container container-line d-flex justify-content-between flex-md-row flex-column">
                  <TinTucNews tinTucNews = {tinTucNews} />
                </div>
                <LienKetNews/>
            </div>
          </div>
        </>
    );
}

export default covid19News;