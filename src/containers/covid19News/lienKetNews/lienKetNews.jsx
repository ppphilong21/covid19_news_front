import React from 'react';
import PropTypes from 'prop-types';
import './lienKetNews.scss';
lienKetNews.propTypes = {
    
};

function lienKetNews(props) {
    return (
      
        <div className="container covid19-container ">
           <div className="col-12 news-space">
           <div className="title">
                <a href="#" className="title-bars title-name title-font--size">Liên kết</a>
            </div>
            <div className="news-wrapper d-flex flex-wrap news-space ">
                <div className=" d-flex flex-wrap ">
                    <div className="lienKet-box">
                        <div className="home-news--img">
                            <a href="#"><img src="https://static.mediacdn.vn/covid19.gov.vn/image/link6.jpg"></img></a>
                        </div>
                       
                    </div>
                    <div className="lienKet-box">
                        <div className="home-news--img">
                            <a href="#"><img src="https://static.mediacdn.vn/covid19.gov.vn/image/link1.jpg"></img></a>
                        </div>
                      
                    </div>
                    <div className="lienKet-box">
                        <div className="home-news--img">
                            <a href="#"><img src="https://static.mediacdn.vn/covid19.gov.vn/image/vccorp.png"></img></a>
                        </div>
                      
                    </div>
                    <div className="lienKet-box">
                        <div className="home-news--img">
                            <a href="#"><img src="https://static.mediacdn.vn/covid19.gov.vn/image/partner2.png"></img></a>
                        </div>
    
                    </div>

                </div>
            </div>
           </div>
        </div>
  
    );
}

export default lienKetNews;