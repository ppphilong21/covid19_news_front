
import React from 'react';
import PropTypes from 'prop-types';

hoatDongNews.propTypes = {
    hoatDongNews: PropTypes.object,
};

function hoatDongNews(props) {
    console.log(props.hoatDongNews);
    const hoatDongNews = props.hoatDongNews;
    console.log(hoatDongNews);
    return (
       <>
         <div className="news-box news-box--left ">
                    <div className="title">
                        <a href="#" className="title-bars title-name title-name--VN">Hoạt động địa phương</a>      
                    </div>
                    {hoatDongNews && hoatDongNews.map((item) => {
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

export default hoatDongNews;


