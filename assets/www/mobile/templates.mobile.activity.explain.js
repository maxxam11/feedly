templates=templates||{};templates.mobile=templates.mobile||{};templates.mobile.activity=templates.mobile.activity||{};templates.mobile.activity.explain=templates.mobile.activity.explain||{};(function(){var h=devhd.i18n.L,a=devhd.i18n.$L,e=[],f="",i=templates.mobile.activity.explain;function g(l){var k=arguments,j;for(j=1;j<k.length;j++){l.push(k[j])
}}function d(j){try{if(j==null){return""}if(typeof j!="string"){return j}if(typeof j.replace!="function"){return j}return j.replace(/\</g,"&lt;").replace(/\>/g,"&gt;")}catch(k){return""}}function c(j){if(j==null){return""}if(typeof j!="string"){return j}if(typeof j.replace!="function"){return j}return j.replace(/\&/g,"&amp;").replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\\/g,"\\\\").replace(/\"/g,"&quot;").replace(/[\f\r\t\n]/g," ").replace(/\</g,"&lt;").replace(/\>/g,"&gt;")
}function b(j){if(aString==null){return null}return aString.replace(/<\/?[^>]+>/gi,"")}i.css=function(k){var j=[];g(j,e[0],LETTER_SPACING,e[1],3*PAD,e[2],usvg("mobile-login-google"),e[3],usvg("mobile-login-facebook"),e[4],Math.min(Math.floor((PANEL_W-2*PAD-2*3)/3)-2,88),e[5],usvg("mobile-login-twitter"),e[6],usvg("mobile-login-windows"),e[7],usvg("mobile-login-evernote"),e[8]);
return j.join(f)};i.layout=function(){var j=[];var l=Math.floor(PANEL_W-2*PAD,400);var k="Continue";if(mode=="signin"){k="Login"}g(j,e[9],usvg("mobile-login-feedly-logo"),e[10],l,e[11],image("mobile-login-devices"),e[12],l,e[13],Math.floor(l/400*200),e[14],PAD,e[15],l,e[16]);if(mode=="signin"){g(j,e[17])}else{g(j,e[18])}g(j,e[19],k,e[20],k,e[21]);return j.join(f)
};e=[" \nbody \n{ \npadding : 0px; \nmargin : 0px; \nfont-family : sans-serif; \nfont-size : 13px; \nline-height : 1.4em; \nbackground-color : white; \n} \n#intro \n{ \nbackground-color : white; \nheight : 100%; \ncolor : #666666; \nfont-size : 16px; \n} \n#feedlyLogo \n{ \npadding-bottom : 5px; \nborder-bottom : 1px solid rgba( 0, 0, 0, 0.3 ); \n} \n#feedlyBanner \n{ \nfont-size : 20px; \nfont-weight : bold; \nletter-spacing : ","; \nline-height : 1.3em; \ntext-align : center; \ncolor : #494949; \nmargin-bottom : ","px; \n} \n.button \n{ \nmargin-bottom : 10px; \nborder-radius : 3px; \nbackground-repeat : no-repeat; \ncursor : pointer; \ntext-decoration : none; \n} \n.button.primary \n{ \ncolor : white; \nfont-size : 16px; \nline-height : 56px; \nmargin-bottom : 10px; \npadding-left : 56px; \nbackground-position : 14px 14px; \nbackground-size : 28px 28px; \nbackground-repeat : no-repeat; \ncursor : pointer; \ndisplay : block; \ntext-decoration : none; \nmax-width : 224px; \nmargin-left : auto; \nmargin-right : auto; \ndisplay : block; \n-webkit-font-smoothing : antialiased; \n} \n.or \n{ \ncolor : #999; \ntext-align : center; \nfont-size : 14px; \npadding-top : 10px; \npadding-bottom : 18px; \n} \n.button.google \n{ \nbackground-color : #488ae9; \nbackground-image : url('","'); \n} \n.button.google:hover \n{ \nbackground-color : #3c76c9; \n} \n.button.facebook \n{ \nbackground-color : #4963A4; \nbackground-image : url('","'); \n} \n.button.facebook:hover \n{ \nbackground-color : #3A4F82; \n} \n.button.secondary \n{ \nborder : 1px solid #EAEAEA; \nborder-radius : 3px; \nwidth : ","px; \nheight : 54px; \nbackground-size : 28px 28px; \nbackground-repeat : no-repeat; \nbackground-position : center center; \ndisplay : inline-block; \n} \n.button.secondary:hover \n{ \nborder : 1px solid #CCC; \n} \n.button.twitter \n{ \nbackground-image : url('","'); \nmargin-right : 3px; \n} \n.button.microsoft \n{ \nbackground-image : url('","'); \nmargin-right : 3px; \n} \n.button.evernote \n{ \nbackground-image : url('","'); \n} \n",'\n<img src="','" style="display:block; padding-left:15px; padding-top:15px" width="80" height="23" /> \n<div style="max-width:','px; margin-left: auto; margin-right:auto"> \n<img src="','" width="','" height="','" style="margin-top:',"px; width:",'px; display:block; margin-left: auto; margin-right:auto" /> \n<div id="feedlyBanner"> \n'," Welcome back.<br> \nLogin to access your feedly. \n"," Create an account and<br> \naccess your feedly everywhere. \n",' </div> \n<a class="button primary google" onclick="go( \'Google\' )"">',' with <b>Google</b></a> \n<a class="button primary facebook" onclick="go( \'Facebook\' )"">',' with <b>Facebook</b></a> \n<div class="or">or</div> \n<div style="margin-left:auto; margin-right:auto; clear:both"> \n<a class="button secondary twitter" onclick="go( \'Twitter\' )" \n></a><a class="button secondary microsoft" onclick="go( \'WindowsLive\' )" \n></a><a class="button secondary evernote" onclick="go( \'Evernote\' )"></a> \n</div> \n</div> \n']
})();