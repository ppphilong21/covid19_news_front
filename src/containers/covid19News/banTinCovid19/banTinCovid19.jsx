import React from 'react';
import PropTypes from 'prop-types';

banTinCovid19.propTypes = {
    banTinCovid19: PropTypes.object,
};

function banTinCovid19(props) {
    console.log(props.banTinCovid19);
    const banTinCovid19 = props.banTinCovid19;
    console.log(banTinCovid19);
    return (
       <>
         <div className="news-box news-box--left ">
                    <div className="title">
                        <a href="#" className="title-bars title-name title-name--VN">Bản tin Covid-19</a>      
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