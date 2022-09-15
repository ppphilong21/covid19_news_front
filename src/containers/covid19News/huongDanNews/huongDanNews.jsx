import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

huongDanNews.propTypes = {
    huongDanNews: PropTypes.array.isRequired,
};

function huongDanNews(props) {
  
    const huongDanNews = props.huongDanNews;

    return (
       <>
         <div className="news-box">
                    <div className="title">
                        <Link to="/huongdan" className="title-bars title-name title-name--VN">Hướng dẫn</Link>      
                    </div>
                    {huongDanNews && huongDanNews.map((item) => {
                        return (
                            <div className="home-news--box news--line d-flex" key={item.id}>
                              <div className="home-news--img news-img--width">
                                  <a href={item.linkNews}>
                                    <img src={item.linkImage}/>
                                  </a>
                              </div>
                              <div className="home-news-title--box news-title--width  ">
                                  <a href={item.linkNews}>
                                      <div className="home-news-title home-news--space">
                                        {item.headingTitle}
                                      </div>
                                      <div className="home-news-sub ">
                                          {item.subTitle}
                                      </div>
                                  </a>
                              </div>
                          </div>
                        )
                    })} 
                  </div>
       </>
    );
}

export default huongDanNews;