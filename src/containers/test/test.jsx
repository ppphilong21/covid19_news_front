import React from 'react';
import PropTypes from 'prop-types';

test.propTypes = {
    banTinCovid19 : PropTypes.array.isRequired,
};

function test(props) {
    const banTinCovid19= props.banTinCovid19;
 
    return (
        <div className="col-lg-8 col-xs-12 col-sm-12 col-md-12">
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
    );
}

export default test;