import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

banTinCovid19.propTypes = {
    banTinCovid19: PropTypes.array.isRequired,
};

function banTinCovid19(props) {
  
    const banTinCovid19 = props.banTinCovid19;

    return (
       <>
         <div className="news-box news-box--left ">
                    <div className="title">
                    <Link className="title-bars title-name title-name--VN" to="/bantin">
                        Bản tin Covid-19
                    </Link>
                       
                    </div>
                    {banTinCovid19 && banTinCovid19.map((item) => {
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

export default banTinCovid19;