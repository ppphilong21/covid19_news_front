import React from 'react';
import PropTypes from 'prop-types';
import './tinhHinhNews.scss'

tinhHinhNews.propTypes = {
    tinhHinhMainNews: PropTypes.object,
    tinhHinhLastNews: PropTypes.object,
};

function tinhHinhNews(props) {
    const tinhHinhMainNews = props.tinhHinhMainNews;
    const tinhHinhLastNews = props.tinhHinhLastNews;

    return (
        <div class="col-12 news-space">
        <div class="title">
            <a href="#" class="title-bars title-name title-name--VN">Tình hình thế giới</a>      
        </div>
       
        <div class="news-wrapper d-flex justify-content-between flex-lg-row flex-column">
        { tinhHinhMainNews && tinhHinhMainNews.map((item) => {
            return (
                <div class="news-box--width">
                     <div class="home-news--img">
                        <a href={item.linkNews}><img src={item.linkImage}/></a>
                     </div>
                     <div class="home-news-title--box  ">
                       <a href={item.linkNews}>
                            <div class="home-news-title home-news--space article--heading">
                            {item.headingTitle}
                            </div>
                            <div class="home-news-sub article--heading">
                                 {item.subTitle}
                         </div>
                         </a>
                     </div>
                </div>
            )
        })
                
        }
          {console.log(tinhHinhLastNews)}
             <div class="news-box--wrap">
                {
                    tinhHinhLastNews && tinhHinhLastNews.map((item) => {
                        console.log(item.subTitle)
                        return (
                        
                    <div class="vaccine-news--box news--line  d-flex">
                        <div class="home-news--img box-img--width">
                            <a href={item.linkNews}><img src={item.linkImage}/></a>
                        </div>
                        <div class="home-news-title--box box-title--width  ">
                            <a href={item.linkNews}>
                                <div class="home-news-title home-news--space">
                                        {item.headingTitle}
                                </div>
                                <div class="home-news-sub article--heading">
                                        {item.subTitle}
                                </div>
                            </a>
                        </div>
                    </div>
                
                        )
                    })
                    
                }
             </div>
          
         
       
        </div>
      

   
     
      </div>
    );
}

export default tinhHinhNews;