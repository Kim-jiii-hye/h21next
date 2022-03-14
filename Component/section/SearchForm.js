import { useState } from "react";

export default function SearchForm() {
    return (
        <div id="search_form">
            <div className="open_search">
                <a href="http://search.hani.co.kr/Search" title="검색" target="_blank" data-is-opened="F" >
                    <img src={"//img.hani.co.kr/section-image/15/h21/image/button_search1.png"} alt="검색" />
                </a>
            </div>

            <div className="form_search" style={{ height: 0, opacity: 0 }}>
                <div className="form0">
                    <div className="form1">
                        <form name="frmsearch" method="post" action="http://search.hani.co.kr/Search">
                            <input type="hidden" name="command" value="query" />
                            <input type="hidden" name="media" value="magazine" />
                            <input type="text" name="keyword" value="" title="검색어" className="text" />
                            <input type="image" src={"//img.hani.co.kr/section-image/15/h21/image/button_search3.png"} className="button" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

