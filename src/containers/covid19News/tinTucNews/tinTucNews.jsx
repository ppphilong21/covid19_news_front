import React from 'react';
import PropTypes from 'prop-types';
import './tinTucNews.scss'
import { Link } from "react-router-dom";
tinTucNews.propTypes = {
    tinTucNews: PropTypes.array.isRequired,
};

function tinTucNews(props) {
    const tinTucNews = props.tinTucNews;
    return (
        <div className="col-12 news-space">
        <div className="title">
            <Link to="/tintuc" className="title-bars title-name title-name--VN">Tin Tức</Link>      
        </div>
        <div className="news-wrapper d-flex flex-wrap  ">
          <div className=" d-flex flex-wrap ">
            {tinTucNews && tinTucNews.map((item) => {
                return ( 
                    <div className="tintuc-box" key={item.id}>
                    <div className="home-news--img">
                        <a href={item.linkNews}><img src={item.linkImage}/></a>
                    </div>
                    <div className="home-news-title--box  ">
                        <a href={item.linkNews}>
                            <div className="home-news-title home-news--space article--heading">
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