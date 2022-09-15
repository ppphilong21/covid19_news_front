import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/img/logo.png';
import './footer.scss'
footer.propTypes = {
    
};

function footer(props) {
    return (
        <footer className="footer ">
        <div className="container d-flex justify-content-between align-items-center flex-lg-row flex-column">
            <div className=" footer-info d-flex">
              <div className="footer-img--logo d-md-block d-none">
                  <img src={logo}></img>
              </div>
              <div className="footer-details text-center ">
                  <div className="footer-details--content">
                      Quản lý nội dung: báo sức khỏe và đời sống - cơ quan ngôn luận của bộ y tế
                  </div>
                  <div className="footer-details--address">
                      Địa chỉ: Số 138A Giảng Võ - Quận Ba Đình - TP. Hà Nội
                  </div>
                  <div className="footer-details--phone">
                      Đường dây nóng: 19009095
                  </div>
                  <div className="footer-details--email">
                      Email: covid19@suckhoedoisong.vn
                  </div>
              </div>
            </div>
            <div className=" img-vscorp  mt-lg-0 mt-5">
                <img src="https://vccorp.mediacdn.vn/vccorp-s.png"></img>
            </div>
        </div>
    </footer>
    );
}

export default footer;