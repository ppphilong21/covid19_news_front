import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

chiDao.propTypes = {
    chiDao : PropTypes.array.isRequired,
};

function chiDao(props) {
    const chiDao = props.chiDao;

    return (
        <div className="news-box ">
            <div className="title">
                <Link  className="title-bars title-name title-name--VN" to="/chidao">Chỉ đạo chống dịch</Link>      
            </div>
            {chiDao && chiDao.map((item) =>{
                return (
                    <div className="home-news--box news--line d-flex" key={item.id}>
                        <div className="home-news--img news-img--width">
                            <a href={item.linkNews}><img src={item.linkImage}></img></a>
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

export default chiDao;