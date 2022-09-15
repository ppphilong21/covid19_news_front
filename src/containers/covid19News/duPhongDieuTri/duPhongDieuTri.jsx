import React from 'react';
import PropTypes from 'prop-types';
import './duPhongDieuTri.scss'
import { Link } from "react-router-dom";

duPhongDieuTri.propTypes = {
    duPhongMainNews: PropTypes.array.isRequired,
    duPhongLastNews: PropTypes.array.isRequired,
};

function duPhongDieuTri(props) {
    const duPhongMainNews = props.duPhongMainNews;
    const duPhongLastNews = props.duPhongLastNews;
    
    return (
        <div className="col-12 news-space">
        <div className="title">
            <Link to="/duphong" className="title-bars title-name title-name--VN">Dự phòng - Điều trị</Link>      
        </div>
       
        <div className="news-wrapper d-flex justify-content-between flex-lg-row flex-column">
        {   duPhongMainNews && duPhongMainNews.map((item) => {
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
                    duPhongLastNews && duPhongLastNews.map((item) => {
                       
                        return (
                        
                    <div className="vaccine-news--box news--line  d-flex" key={item.id}>
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

export default duPhongDieuTri;