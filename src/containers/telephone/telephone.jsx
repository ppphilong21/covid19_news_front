import React from 'react';
import PropTypes from 'prop-types';
import './telephone.scss'
telephone.propTypes = {
    
};

function telephone(props) {
    return (
        <div className="contact-article col-lg-4  d-lg-block d-none">
        <div className="col-12 hot-line d-flex">
       
         <a href="#" className="numbers-phone">
             <img src="https://static.mediacdn.vn/covid19.gov.vn/image/hotline.png"></img>
         </a>
        </div>
        <div className="col-12 mt-3 phone-list">
             <div className="hospital-phone--list">
                 Danh sách số điện thoại các bệnh viện
             </div>
             <ul className="hospital-numbers">
                 <li className="numbers-details d-flex justify-content-between align-items-center">
                     <div className="hospital-name col-6">Bệnh viện Bạch Mai</div>
                     <div className="hospital-phone col-5">09669 85 1616</div>
                 </li>
                 <li className="numbers-details d-flex justify-content-between align-items-center">
                     <div className="hospital-name col-6">Bệnh viện Bệnh Nhiệt đới Trung ương</div>
                     <div className="hospital-phone col-5">0969 24 1616</div>
                 </li>
                 <li className="numbers-details d-flex justify-content-between align-items-center">
                     <div className="hospital-name col-6">Bệnh viện Nhi Trung ương</div>
                     <div className="hospital-phone col-5">0372 88 4712</div>
                 </li>
                 <li className="numbers-details d-flex justify-content-between align-items-center">
                     <div className="hospital-name col-6">Bệnh viện Phổi Trung ương</div>
                     <div className="hospital-phone col-5">0967 94 1616</div>
                 </li>
                 <li className="numbers-details d-flex justify-content-between align-items-center">
                     <div className="hospital-name col-6">Bệnh viện Việt Nam - Thủy Điển - Uông Bí</div>
                     <div className="hospital-phone col-5">0913 39 4495</div>
                 </li>
                 <li className="numbers-details d-flex justify-content-between align-items-center">
                     <div className="hospital-name col-6">Bệnh viện Đa khoa Trung ương Huế</div>
                     <div className="hospital-phone col-5">0907 73 6736</div>
                 </li>
                 <li className="numbers-details d-flex justify-content-between align-items-center">
                     <div className="hospital-name col-6">Bệnh viện Xanh Pôn Hà Nội</div>
                     <div className="hospital-phone col-5">0982 41 4127</div>
                 </li>
                 <li className="numbers-details d-flex justify-content-between align-items-center">
                     <div className="hospital-name col-6">Bệnh viện Bệnh Nhiệt đới TP. Hồ Chí Minh</div>
                     <div className="hospital-phone col-5">0967 34 1010</div>
                 </li>
                 <li className="numbers-details d-flex justify-content-between align-items-center">
                     <div className="hospital-name col-6">Bệnh viện Nhi đồng 1</div>
                     <div className="hospital-phone col-5">0913 11 7965</div>
                 </li>
                 <li className="numbers-details d-flex justify-content-between align-items-center">
                     <div className="hospital-name col-6">Bệnh viện Bệnh nhiệt đới Khánh Hòa</div>
                     <div className="hospital-phone col-5">0913 46 4257</div>
                 </li>
             </ul>
        </div>
     </div>
    );
}

export default telephone;