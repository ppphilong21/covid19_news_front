import React from 'react';
import PropTypes from 'prop-types';
import './vaccineNews.scss'
import { Link } from "react-router-dom";

vaccineNews.propTypes = {
    vaccineMainNews: PropTypes.array.isRequired,
    vaccineLastNews: PropTypes.array.isRequired,
};

function vaccineNews(props) {
    const vaccineMainNews = props.vaccineMainNews;
    const vaccineLastNews = props.vaccineLastNews;

    return (
        <div className="col-12 news-space">
        <div className="title">
            <Link to="/vaccine" className="title-bars title-name title-name--VN">Vaccine - Tiêm chủng</Link>      
        </div>
       
        <div className="news-wrapper d-flex justify-content-between flex-lg-row flex-column">
        { vaccineMainNews && vaccineMainNews.map((item) => {
            return (
                <div className="news-box--width" key={item.id}>
                     <div className="home-news--img">
                        <a href={item.linkNews}><img src={item.linkImage}/></a>
                     </div>
                     <div className="home-news-title--box  ">
                       <a href={item.linkNews}>
                            <div className="home-news-title home-news--space article--heading">
                            {item.headingTitle}
                            </div>
                            <div className="home-news-sub article--heading">
                                 {item.subTitle}
                         </div>
                         </a>
                     </div>
                </div>
            )
        })
                
        }
          
             <div className="news-box--wrap">
                {
                    vaccineLastNews && vaccineLastNews.map((item) => {
                       
                        return (
                        
                    <div key={item.id} className="vaccine-news--box news--line  d-flex">
                        <div className="home-news--img box-img--width">
                            <a href={item.linkNews}><img src={item.linkImage}/></a>
                        </div>
                        <div className="home-news-title--box box-title--width  ">
                            <a href={item.linkNews}>
                                <div className="home-news-title home-news--space">
                                        {item.headingTitle}
                                </div>
                                <div className="home-news-sub article--heading">
                                        {item.subTitle}
                                </div>
                            </a>
                        </div>
                    </div>
                
                        )
                    })
                    
                }
             </div>
          
         
       
        </div>
      

   
     
      </div>
    );
}

export default vaccineNews;