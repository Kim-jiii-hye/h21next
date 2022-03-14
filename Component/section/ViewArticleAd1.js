export default function ViewArticleAd1() {
    return (
        <section id="section_sub_ad" className="sub_ad">
            <h4 className="hidden">����</h4>
            <div className="visual-ad">
                <div className="ad600">
                    <script type="text/javascript"
                        src="//adservice.hani.co.kr/RealMedia/ads/adstream_jx.ads/magazine/@Bottom1?kisano=<?=$section_data;?>"></script>
                </div>
                <div className="ad320">
                    <script type="text/javascript"
                        src="//adservice.hani.co.kr/RealMedia/ads/adstream_jx.ads/magazine/@Top3?section=h21&kisano=<?=$section_data;?>"></script>
                </div>
            </div>
        </section>
    )
}


