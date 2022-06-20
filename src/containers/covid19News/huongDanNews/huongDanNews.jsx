import React from 'react';
import PropTypes from 'prop-types';

huongDanNews.propTypes = {
    huongDanNews: PropTypes.object,
};

function huongDanNews(props) {
    console.log(props.huongDanNews);
    const huongDanNews = props.huongDanNews;
    console.log(huongDanNews);
    return (
       <>
         <div className="news-box">
                    <div className="title">
                        <a href="#" className="title-bars title-name title-name--VN">Hướng dẫn</a>      
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