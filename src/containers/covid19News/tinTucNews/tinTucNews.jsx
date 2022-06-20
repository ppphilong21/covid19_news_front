import React from 'react';
import PropTypes from 'prop-types';
import './tinTucNews.scss'
tinTucNews.propTypes = {
    tinTucNews: PropTypes.object,
};

function tinTucNews(props) {
    const tinTucNews = props.tinTucNews;
    return (
        <div class="col-12 news-space">
        <div class="title">
            <a href="#" class="title-bars title-name title-name--VN">Tin Tức</a>      
        </div>
        <div class="news-wrapper d-flex flex-wrap  ">
          <div class=" d-flex flex-wrap ">
            {tinTucNews && tinTucNews.map((item) => {
                return ( 
                    <div class="tintuc-box" key={item.id}>
                    <div class="home-news--img">
                        <a href={item.linkNews}><img src={item.linkImage} alt/></a>
                    </div>
                    <div class="home-news-title--box  ">
                        <a href={item.linkNews}>
                            <div class="home-news-title home-news--space article--heading">
                            {item.headingTitle}
                            </div>
                        </a>
                    </div>
                </div>)
            })}
          </div>
        </div>
      </div>
    );
}

export default tinTucNews;