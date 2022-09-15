import React from 'react';
import PropTypes from 'prop-types';

notify.propTypes = {
    historyCovidDetails: PropTypes.object.isRequired,
};

let sumNumberDetails = (Arr) => {
    if (Arr.length != 0){
        return  Arr.reduce((accumulator, item) => Number(accumulator) + Number(item))
    }
}

function notify(props) {
    const historyCovidCaseArr = [];
    const historyCovidDetails = props.historyCovidDetails;
    if (historyCovidDetails.historyCovidCases){
        historyCovidDetails.historyCovidCases.forEach((item) => {
            historyCovidCaseArr.push(item.increaseCase);
        })
    }
    return (
        <div className="article-wrap">
                            <div className="article-information--wrap">
                                <div className="information-content">
                                    <div className="information-content--details">
                                        <p className="time">
                                            06/08/2022
                                        </p>
                                        <div className="notice">-
                                            THÔNG BÁO VỀ {sumNumberDetails(historyCovidCaseArr)} CA MẮC MỚI
                                        </div>
                                        <div className="details">
                                            <p className="details-heading">
                                                Qua 24h vừa qua, trên Hệ thống Quốc gia quản lý ca bệnh COVID-19 ghi nhận 11.160 ca nhiễm mới, trong đó 0 ca nhập cảnh và 11.160 ca ghi nhận trong nước (giảm 869 ca so với ngày trước đó) tại 59 tỉnh, thành phố (có 8.015 ca trong cộng đồng).
                                            </p>
                                            <div className="details-body">
                                                Các tỉnh, thành phố ghi nhận ca bệnh như sau: {historyCovidDetails.historyCovidCases && historyCovidDetails.historyCovidCases.map((item, index) => {
                                    return(
                                        <span  key = {item.id}>
                                        {item.city} ({item.increaseCase}), &nbsp;
                                        </span>
                                    )
                                    
                                })}
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
    );
}

export default notify;