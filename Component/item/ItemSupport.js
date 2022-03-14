import React, { Component } from "react";

export default  class ItemSupport extends Component {
    componentDidMount() {
        var supportLen = jQuery('.bn-promotion-support.kisa .support-con').length;
        if(supportLen > 0){
            var supportRandom = Math.floor(Math.random() * supportLen);
            jQuery('.bn-promotion-support.kisa .support-con').hide().eq(supportRandom).show();
        }
    }

    render() {
        return(
            <div className="bn-promotion-support kisa h21">
                <div className="support-con item1" style={{display: "none"}}>
                    <div className="support-tit">
                        <strong><em>한겨레와 함께</em> 걸어주세요</strong>
                    </div>
                    <div className="support-txt">
                        섬세하게 세상을 보고 <br />용기있게 기사를 쓰겠습니다.
                    </div>
                    <div className="support-btn">
                        <a className="btn" href="https://support.hani.co.kr/hani/support.hani">후원하기</a>
                        <a className="btn btn-w" href="https://support.hani.co.kr/introduce/" target="_blank">후원제 소개</a>
                    </div>
                </div>
                <div className="support-con item2">
                    <div className="support-tit">
                        <strong><em>좋은 언론을 향한 동행,</em><br />한겨레를 후원해 주세요</strong>
                    </div>
                    <div className="support-txt">
                        한겨레는 독자의 신뢰를 바탕으로 취재하고 보도합니다.
                    </div>
                    <div className="support-btn">
                        <a className="btn" href="https://support.hani.co.kr/hani/support.hani">후원하기</a>
                        <a className="btn btn-w" href="https://support.hani.co.kr/introduce/" target="_blank">후원제 소개</a>
                    </div>
                </div>
                <div className="support-con item3" style={{display: "none"}}>
                    <div className="support-tit">
                        <strong><em>당신의 가치를</em> 후원으로 얹어주세요</strong>
                    </div>
                    <div className="support-txt">
                        평화를 갈망하는 마음, 평등을 지향하는 마음,<br />환경을 염려하는 마음...
                    </div>
                    <div className="support-btn">
                        <a className="btn" href="https://support.hani.co.kr/hani/support.hani">후원하기</a>
                        <a className="btn btn-w" href="https://support.hani.co.kr/introduce/" target="_blank">후원제 소개</a>
                    </div>
                </div>
            </div>
        )
    }
}

