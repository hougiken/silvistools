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
    /*
    var mps = [
        car_mp("島田 泰弘","行政書士(農地,開発)","6/5"),
        car_mp("藤生 志津","ミネラルウォーター","6/12"),
        car_mp("加賀谷 勝","PCトラブル","6/19")
    ];
    */
    // <div id="carousel1" mps="[[氏名,カテゴリー,日付文字列]+]">の形で作る。
    var mp_values = eval($("#carousel1").attr("mps")); //JSON.parse()にするか悩ましい。JSON.parseだとsingle quote (')不可なので、mps='[["山田太郎","捕手","4/1"]]'は良いけどmps="[['山田太郎','捕手','4/1']]"は不可
    var mps = [];
    for(var i=0; i<mp_values.length; i++){
        var v = mp_values[i];
        mps.push(car_mp(v[0],v[1],v[2]));
    }
    // 直近の人は先頭に
	$("#carousel1").prepend(mps[0]);
    // 翌々週以降の人は後ろから
    for(var i=0; i<mps.length; i++){
        $("#carousel1").append(mps[mps.length-i-1]);
    }

    // 定例会動画カルーセルのURL等を設定
    var car_video = document.getElementById("car_video");
    car_video.addEventListener("click",function(event){
        if( confirm("動画再生パスワード"+this.getAttribute("pass")+"をクリップボードにコピーして動画を開く。" )){
            navigator.clipboard.writeText(this.getAttribute("pass"));
            window.open(this.getAttribute("url"));
        }
    });

    // カルーセルを起動する。
	$(".silvis_carousel").slick({
        "dots":true,
        "slidesToShow":3,
        "slidesToScroll": 3,
        "centerMode":true,
        "autoplay":true
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