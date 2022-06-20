import React from 'react';
import PropTypes from 'prop-types';
import './vaccineNews.scss'

vaccineNews.propTypes = {
    vaccineMainNews: PropTypes.object,
    vaccineLastNews: PropTypes.object,
};

function vaccineNews(props) {
    const vaccineMainNews = props.vaccineMainNews;
    const vaccineLastNews = props.vaccineLastNews;

    return (
        <div class="col-12 news-space">
        <div class="title">
            <a href="#" class="title-bars title-name title-name--VN">Vaccine - Tiêm chủng</a>      
        </div>
       
        <div class="news-wrapper d-flex justify-content-between flex-lg-row flex-column">
        { vaccineMainNews && vaccineMainNews.map((item) => {
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
          {console.log(vaccineLastNews)}
             <div class="news-box--wrap">
                {
                    vaccineLastNews && vaccineLastNews.map((item) => {
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

export default vaccineNews;