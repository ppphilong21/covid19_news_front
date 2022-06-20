import React from 'react';
import PropTypes from 'prop-types';

chiDao.propTypes = {
    chiDao : PropTypes.object,
};

function chiDao(props) {
    const chiDao = props.chiDao;
    console.log(chiDao);
    return (
        <div class="news-box ">
            <div class="title">
                <a href="#" class="title-bars title-name title-name--VN">Chỉ đạo chống dịch</a>      
            </div>
            {chiDao && chiDao.map((item) =>{
                return (
                    <div class="home-news--box news--line d-flex">
                        <div class="home-news--img news-img--width">
                            <a href={item.linkNews}><img src={item.linkImage} alt=""></img></a>
                        </div>
                        <div class="home-news-title--box news-title--width  ">
                            <a href={item.linkNews}>
                                <div class="home-news-title home-news--space">
                                    {item.headingTitle}
                                </div>
                                <div class="home-news-sub ">
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