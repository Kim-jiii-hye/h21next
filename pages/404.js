import Seo from "../Component/Seo";

const NotFound = () => {
    // return <p>404페이지 입니다</p>;
    return (
        <>
            <Seo />
            <div id="viewMain">
                <div className="main0">
                    <div className="main1">
                        <p>에러 페이지 입니다. 주소를 확인해주세요</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NotFound;