import React from 'react';
import PropTypes from 'prop-types';
import './duPhongDieuTri.scss'

duPhongDieuTri.propTypes = {
    duPhongMainNews: PropTypes.object,
    duPhongLastNews: PropTypes.object,
};

function duPhongDieuTri(props) {
    const duPhongMainNews = props.duPhongMainNews;
    const duPhongLastNews = props.duPhongLastNews;

   
    // <div class="news-wrapper d-flex justify-content-between flex-lg-row flex-column">
    // {   
    //             <div class="news-box--width">
    //                 <div class="home-news--img">
    //                     <a href={duPhongMainNews.linkNews}><img src={duPhongMainNews.linkImage}/></a>
    //                 </div>
    //                 <div class="home-news-title--box  ">
    //                     <a href={duPhongMainNews.linkNews}>
    //                         <div class="home-news-title home-news--space article--heading">
    //                         {duPhongMainNews.headingTitle}
    //                         </div>
    //                         <div class="home-news-sub article--heading">
    //                             {duPhongMainNews.subTitle}
    //                         </div>
    //                     </a>
    //                 </div>
    //             </div>
    // }
      

    //   <div class="news-box--wrap">
    //       <div class="vaccine-news--box news--line  d-flex">
    //           <div class="home-news--img box-img--width">
    //               <a href="#"><img src="./img/student-img.jpg"></img></a>
    //           </div>
    //           <div class="home-news-title--box box-title--width  ">
    //               <a href="#">
    //                   <div class="home-news-title home-news--space">
                       
    //                   </div>
                    
    //               </a>
    //           </div>
    //       </div>
    //     </div>
     
   
    // </div>
    return (
        <div class="col-12 news-space">
        <div class="title">
            <a href="#" class="title-bars title-name title-name--VN">Dự phòng - Điều trị</a>      
        </div>
       
        <div class="news-wrapper d-flex justify-content-between flex-lg-row flex-column">
        {   duPhongMainNews && duPhongMainNews.map((item) => {
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
          {console.log(duPhongLastNews)}
             <div class="news-box--wrap">
                {
                    duPhongLastNews && duPhongLastNews.map((item) => {
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

export default duPhongDieuTri;