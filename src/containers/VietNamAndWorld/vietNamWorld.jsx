import React from "react";
import Notify from '../notify/notify'

import '../VietNamAndWorld/vietNamWorld.scss';

import PropTypes from 'prop-types';

vietNamWorld.propTypes = {
    covidDetails: PropTypes.object,
    historyCovidDetails: PropTypes.object,
};

function vietNamWorld(props) {
    const  covidDetails  = props.covidDetails;
    const  historyCovidDetails = props.historyCovidDetails;
    const  historyCovidCaseArr = [];
    const covidNumberDetailsArr = [];
    const covidNumberDeathDetailArr = [];

    if (historyCovidDetails.historyCovidCases){
        historyCovidDetails.historyCovidCases.forEach((item) => {
            historyCovidCaseArr.push(item.increaseCase);
        })
    }
    if (covidDetails.covidCases){
        covidDetails.covidCases.forEach((item) => {
            covidNumberDetailsArr.push(item.totalCaseNumber);
            covidNumberDeathDetailArr.push(item.caseDeath);
        })
    }
   let sumNumberDetails = (Arr) => {
        if (Arr.length != 0){
            return  Arr.reduce((accumulator, item) => Number(accumulator) + Number(item))
        }
   }

    return (
        <div classNameName="content VN-TG">
            <div className="container">
                <div className="content-body--details">
                    <div className="title">
                        <a href="#" className="title-bars title-name title-name--VN">Việt Nam</a>

                        <a href="#" className="title-name title-name--World">Thế giới</a>
                    
                    </div>

                    <div className="content-information--covid d-flex justify-content-between align-items-center">
                        <div className="content-information--width content-information--details number-covid" >
                            <div className="name-details">
                                Số Ca Nhiễm
                            </div>
                            <div className="number-details text-danger" >{sumNumberDetails(covidNumberDetailsArr)}</div>
                            <div className="time-details">24 giờ qua <span>+{sumNumberDetails(historyCovidCaseArr)}</span> </div>
                        </div>
                        <div className="content-information--width content-information--details number-success" >
                            <div className="name-details">
                                Khỏi
                            </div>
                            <div className="number-details" style={{color: "green"}} >9.553.193</div>
                        
                        </div>
                        <div className="content-information--width content-information--details number-death" >
                            <div className="name-details">
                                Tử vong
                            </div>
                            <div className="number-details" style={{color: "black"}} >{sumNumberDetails(covidNumberDeathDetailArr)}</div>
                            
                        </div>
                    </div>
                </div>

                <div className="content-article d-flex justify-content-between flex-sm-column flex-md-row flex-column">
                    <div className="col-md-8 col-sm-12 col-xs-12 content-article--details">
                        <div className="title">
                                <a href="#" className="title-bars title-name title-font--size ">Tình hình dịch cả nước</a>
                        </div>

                        <div className="article-wrap">
                            <table class="table table-hover table-wrap">
                                <thead className="table-headline">
                                    <tr>
                                        <th scope="col">Tỉnh/TP</th>
                                        <th scope="col" className="text-center">Tổng số ca</th>
                                        <th scope="col" className="text-center">24 giờ qua</th>
                                        <th scope="col" className="text-center">Tử vong</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                    {covidDetails.covidCases && covidDetails.covidCases.map((item, index) => {
                                        return(
                                            <tr className="table-details" key = {item.id}>
                                                <td>{item.city}</td>
                                                <td className="text-center">{item.totalCaseNumber}</td>
                                                <td className="table-details--numberPerDay text-center">{item.increaseCase}</td>
                                                <td className="text-center">{item.caseDeath}</td>
                                            </tr>
                                        )
                                        
                                    })}
                                    </tbody>
                                </table>
                        </div>
                    </div>

                    <div className="content-article--information col-md-4 col-sm-12 col-xs-12 mt-5 mt-md-0">
                        <div className="title">
                            <a href="#" className="title-bars title-name title-font--size ">Diễn biến dịch</a>
                        </div>
                        
                       <Notify historyCovidDetails = {historyCovidDetails}/>
                     


                        <div className="btn-details d-flex align-items-center">
                                <button className="btn more-details">
                                    Xem thêm
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default vietNamWorld;