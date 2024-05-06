// silvis_carousel4ncas.js by KASAMA Satoshi / Lawyer(IT,medical) in japan
// since 2024.5.6
// this script is made for use in NCAS
// requires jQuery, slick
// because NCAS already uses jQuery, you need to import slick in "chapter-info".
// e.g.
// <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
// <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
// <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

// イニシャライズ
$(document).ready(function(){
    // メインプレゼンテーション告知を作る。
	$("#carousel1").prepend(car_mp("小松 真美子","オフィス施工","5/8"));
	$("#carousel1").append(car_mp("三輪 智士","フラワーバルーン","5/15"));
	$("#carousel1").append(car_mp("松本 一矢","3Dアクセ","5/22"));

    // 定例会動画カルーセルのURL等を設定
    var car_video = document.getElementById("car_video");
    car_video.addEventListener("click",function(event){
        if( confirm("動画再生パスワード"+this.getAttribute("url")+"をクリップボードにコピーして動画を開く。" ){
            navigator.clipboard.writeText(this.getAttribute("pass"));
            window.open(this.getAttribute("url"));
        }
    });

    // カルーセルを起動する。
	$(".silvis_carousel").slick({
        "dots":true,
        "slidesToShow":3,
        "slidesToScroll": 3,
        "centerMode":true
    });
});



// メインプレゼンテーションを告知するカルーセル(div Element)を返す。 
function car_mp(name, category, date){
    var div = $("<div>",{class:"carousel_MainPresentation"});
    div.append($("<div>",{text:date+" Main Presentation"}));
    div.append($("<div>",{text:name}));
    div.append($("<div>",{text:category}));
    return div;
}