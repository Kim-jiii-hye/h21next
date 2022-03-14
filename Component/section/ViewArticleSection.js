import ItemSupport from "../item/ItemSupport"
import ViewArticleToolbox from "./ViewArticleToolbox"

export default function ViewArticleSection({ bodydata, img }) {
    let bodydataRes;
    function stringToImg(i, num){
        bodydataRes = i.replace(`[%%IMAGE${num}%%]`, `<div class="image0"><div class="image1" style={maxWidth:"659px;"}><div class="image2"><img src=${img[num-1].url} /></div><div class="desc">${img[num-1].desc}</div></div>`);
        if(img.length == num){
            return bodydataRes;
        }
        num++;
        return stringToImg(bodydataRes, num);
    }
    stringToImg(bodydata, 1);

    return (
        <article>
            <div className="article_tools">
                <ViewArticleToolbox />
            </div>
            <div className="article_body" style={{ fontSize: '16px' }}>
                <div className="text" dangerouslySetInnerHTML={{ __html: bodydataRes }}>
                </div>
                <ItemSupport />
            </div>
        </article>
    )
}