templates=templates||{};templates.mobile=templates.mobile||{};templates.mobile.activity=templates.mobile.activity||{};templates.mobile.activity.searchBox=templates.mobile.activity.searchBox||{};(function(){var h=devhd.i18n.L,a=devhd.i18n.$L,e=[],f="",i=templates.mobile.activity.searchBox;function g(l){var k=arguments,j;for(j=1;j<k.length;j++){l.push(k[j])
}}function d(j){try{if(j==null){return""}if(typeof j!="string"){return j}if(typeof j.replace!="function"){return j}return j.replace(/\</g,"&lt;").replace(/\>/g,"&gt;")}catch(k){return""}}function c(j){if(j==null){return""}if(typeof j!="string"){return j}if(typeof j.replace!="function"){return j}return j.replace(/\&/g,"&amp;").replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\\/g,"\\\\").replace(/\"/g,"&quot;").replace(/[\f\r\t\n]/g," ").replace(/\</g,"&lt;").replace(/\>/g,"&gt;")
}function b(j){if(aString==null){return null}return aString.replace(/<\/?[^>]+>/gi,"")}i.css=function(k){var j=[];g(j,e[0],PANEL_W,e[1],feedlyTheme.se_searchbox_surrounding,e[2],feedlyTheme.se_color,e[3],LIST_BAR,e[4],family("regular"),e[5],PANEL_W-20,e[6],feedlyTheme.se_searchbox_back,e[7],svg(themable("mobile-icon-clear")),e[8],svg(themable("mobile-icon-searchbox")),e[9],feedlyTheme.se_searchbox_color,e[10],PANEL_W-20-20-10,e[11],feedlyTheme.se_searchbox_color,e[12],feedlyTheme.se_searchbox_back,e[13]);
if(ANDROID_TWO()==true){g(j,e[14])}else{g(j,e[15])}g(j,e[16],PANEL_W-20-2*7-20-5,e[17],feedlyTheme.se_searchbox_color,e[18],feedlyTheme.se_searchbox_placeholder,e[19]);return j.join(f)};i.layout=function(j,l){var k=[];g(k,e[20]);return k.join(f)};e=["\nbody\n{\nmargin : 0px;\npadding : 0px;\nwidth : ",";\noverflow : hidden;\nbackground : ",";\ncolor : ",";\n-webkit-touch-callout : none;\n-webkit-user-select : none;\n-webkit-tap-highlight-color : rgba( 255, 255, 255, 0 );\nline-height : ","px;\nfont-size : 16px;\n","\n}\n#frame\n{\nmargin : 10px;\nheight : 34px;\nwidth : ",";\noverflow : hidden;\nbackground-color : ",";\nborder-radius : 3px;\n}\n#clear\n{\nposition : absolute;\nright : 0px;\ntop : 0px;\nbackground : url( "," ) no-repeat;\n-webkit-background-size : 54px 54px;\nbackground-size : 54px 54px;\nwidth : 54px;\nheight : 54px;\nz-index : 100004;\n}\n#searchBox\n{\nheight : 34px;\nfont-size : 16px;\noverflow : hidden;\nbackground : url( "," ) 6px 7px no-repeat;\ncolor : ",";\n-webkit-background-size : 20px 20px;\nbackground-size : 20px 20px;\nline-height : 20px;\npadding-left : 24px;\nfont-family : sans-serif;\n}\n#searchBox.nonEmpty\n{\nbackground : none;\npadding-left : 0px;\n}\n#input\n{\nwidth : ","px;\npadding-left : 10px;\npadding-right : 0px;\nfont-size : 16px;\noverflow : hidden;\ncolor : ",";\nfont-family : sans-serif;\nborder-radius : 0px;\nborder : 0px;\nbackground-color : ",";\n-webkit-appearance : none; \n-webkit-user-modify : read-write-plaintext-only;\n-webkit-user-select : text;\n"," line-height : 34px;\nheight : 34px;\npadding-top : 0px;\npadding-bottom : 0px;\n"," padding-top : 17px;\npadding-bottom : 17px;\nline-height : 18px;\nheight : 18px;\n"," }\n#searchBox.nonEmpty #input\n{\nwidth : ","px; \n}\n#input:focus\n{\noutline : none;\ncolor : ",";\n}\n#input::-webkit-input-placeholder \n{\ncolor : ",";\n}\n#input:focus::-webkit-input-placeholder \n{\ncolor : rgba( 255, 255, 255, 0.6 );\n}\n",'\n<div id="clear" style="display:none"></div>\n<div id="frame">\n<form onsubmit="searchAndHideKeyboard(); return false;" method="post" style="margin-bottom:0px">\n<div id="searchBox">\n<input id="input" autocorrect="off" autocapitalize="off" type="search" placeholder="Search a topic or a blog" />\n</div>\n</form>\n</div>\n']
})();