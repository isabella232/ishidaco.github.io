/*
  This js file is for individual users to modify the scripts for their personal site,
  or for the implementation of features specifically for their site. Anything that
  is an official part of the theme (ex. Pull Requests) should be included in main.js
  and follow the formatting and style given.
*/
WebFontConfig = {
  google: { families: ['Ubuntu:400,700', 'Source+Sans+Pro:400,700', 'Noto+Sans+JP:400,700'] },
  active: function () {
    sessionStorage.fonts = true;
  }
};

(function (d) {
  var wf = d.createElement('script'), s = d.scripts[0];
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
  wf.async = 'true';
  s.parentNode.insertBefore(wf, s);
})(document);
