import React from "react";
import {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

import '../header/header.scss';
import logo from '../../assets/img/logo.png';
// import subMenu from './subMenu.js';
import {GrSearch, GrClose} from 'react-icons/gr';
import {FaBars} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';

function Header(){

    const [today, setToday] = useState(null);
    useEffect(() => {
      const currentDate = new Date();

      const days = ["Chủ nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"];
      const currentDay = days[currentDate.getDay()];
      const date = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      function addZero(date) {
          if (date < 10){
              date = '0' + date;
          }
      }

      
      addZero(date); 
      addZero(month); 
      
      const newToday = `${currentDay}, ${date} / ${month} / ${year}`;
 
      setToday(newToday);

    }, [today])

  /* if (window.innerWidth < 768){
     subMenu();
   }*/
    const TRUE = true;
    const [sidebar, setSidebar] = useState(false);
    const showSideBar = () => setSidebar(!sidebar);

    return(
      <>
          <header id="header">
        <div className="header-top">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="date-time" > {today} </div>
            <div className="date-time--replace">
              <FaBars className={sidebar ? 'menu-bars icon hide' : 'menu-bars icon'} onClick={showSideBar} />
              <GrClose className={sidebar ? 'menu-close icon show' : 'menu-close icon'} onClick={showSideBar} ></GrClose>
            </div>
            <div className="header-top--contact d-flex justify-content-between align-items-center">
              <div className="header-top--search">
                <input type="text" placeholder="Enter something..." className="header-top--input" />
                <GrSearch className={sidebar ? 'search-icon icon' : 'search-icon icon'} onClick={showSideBar} ></GrSearch>
              </div>
              <div className="header-top--telephone">
                <p>Đường dây nóng: 19009095</p>
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle">
          <div className="container d-flex">
            <div className="header-middle--img">
              <img src={logo} alt="" />
            </div>
            <div className="header-middle-title">
              CỔNG THÔNG TIN CỦA BỘ Y TẾ VỀ ĐẠI DỊCH COVID-19
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <div className="header-bottom--menu">
              <ul>
                <Link className="nav-link" to="/">
                    <li className="header-botton--item"><AiFillHome/></li>
                </Link>
                
                <Link className="nav-link" to="/bantin">
                    <li className="header-botton--item">Bản tin Covid-19</li>
                </Link>

                <Link className="nav-link" to="/chidao">
                    <li className="header-botton--item">Chỉ đạo chống dịch</li>
                </Link>

                <Link className="nav-link" to="/duphong">
                    <li className="header-botton--item">Dự phòng - Điều trị</li>
                </Link>

                <Link className="nav-link" to="/vaccine">
                    <li className="header-botton--item">Vaccine - Tiêm chủng</li>
                </Link>

                <Link className="nav-link" to="/hoatdong">
                    <li className="header-botton--item">Hoạt động địa phương</li>
                </Link>

                <Link className="nav-link" to="/huongdan">
                    <li className="header-botton--item">Hướng dẫn</li>
                </Link>

                <Link className="nav-link" to="/tintuc">
                    <li className="header-botton--item">Tin tức</li>
                </Link>

                <Link className="nav-link" to="/thegioi">
                    <li className="header-botton--item">Tình hình thế giới</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className={sidebar ? 'header-sub--responsive show' : 'header-sub--responsive'}>
          <div className="container">
            <div className="header-sub--wrap">
              <div className="header-sub--search d-flex align-items-center">
                <input type="text" placeholder="Enter something..." className="header-top--input" />
                <GrSearch ></GrSearch>
              </div>
              <ul>
                <Link className="nav-link" to="/">
                    <li className="header-botton--item"><AiFillHome/></li>
                </Link>
                
                <Link className="nav-link" to="/bantin">
                    <li className="header-botton--item">Bản tin Covid-19</li>
                </Link>

                <Link className="nav-link" to="/chidao">
                    <li className="header-botton--item">Chỉ đạo chống dịch</li>
                </Link>

                <Link className="nav-link" to="/duphong">
                    <li className="header-botton--item">Dự phòng - Điều trị</li>
                </Link>

                <Link className="nav-link" to="/vaccine">
                    <li className="header-botton--item">Vaccine - Tiêm chủng</li>
                </Link>

                <Link className="nav-link" to="/hoatdong">
                    <li className="header-botton--item">Hoạt động địa phương</li>
                </Link>

                <Link className="nav-link" to="/huongdan">
                    <li className="header-botton--item">Hướng dẫn</li>
                </Link>

                <Link className="nav-link" to="/tintuc">
                    <li className="header-botton--item">Tin tức</li>
                </Link>

                <Link className="nav-link" to="/thegioi">
                    <li className="header-botton--item">Tình hình thế giới</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
       
      </header>
      </>
    );

}

export default Header;