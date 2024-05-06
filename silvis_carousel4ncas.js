// silvis_carousel4ncas.js by KASAMA Satoshi / Lawyer(IT,medical) in japan
// since 2024.5.6
// this script is made for use in NCAS
// requires jQuery, slick
// because NCAS already uses jQuery, you need to import slick in "chapter-info".
// e.g.
// <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
// <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
// <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

// メインプレゼンテーションを告知するカルーセル(div Element)を返す。 
function car_mp(name, category, date){
    var div = $("<div>",{class:"carousel_MainPresentation"});
    div.append($("<div>",{text:date+" Main Presentation"}));
    div.append($("<div>",{text:name}));
    div.append($("<div>",{text:category}));
    return div;
}