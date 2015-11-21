// ==UserScript==
// @name        NamuWiki Unfold
// @namespace   http://e.xtendo.org
// @description Convenient NamuWiki reading by unfolding footnotes
// @include     https://namu.wiki/w/*
// @version     1
// @grant       none
// ==/UserScript==

function namuwiki_unfold() {
    $('.wiki-inner-content').attr('data-namuwiki-unfold', 'true');
    $('.wiki-fn-content').each(function(){
        var t = $(this);
        t.html(
            $(t.attr('href')).parent().html()
        );
        t.css(
            'cssText',
            'background:#EEE;padding:1px;border:1px solid #CCC;color:#666'
        );
        t.attr('data-href', t.attr('href'));
        t.removeAttr('href');
    });
}

function namuwiki_fold() {
    $('.wiki-inner-content').attr('data-namuwiki-unfold', 'false');
    $('.wiki-fn-content').each(function(){
        var t = $(this);
        t.css('cssText', '');
        t.html(t.find('a').first().text());
        t.attr('href', t.attr('data-href'));
        t.attr('name', 'r' + t.attr('data-href').substr(1));
    });
}

document.addEventListener('keydown', function(e) {
    if (e.shiftKey && e.keyCode == 51) {
        if ($('.wiki-inner-content').attr('data-namuwiki-unfold') == 'true') {
            namuwiki_fold();
        } else {
            namuwiki_unfold();
        }
    }
}, true);

$(document).on('pjax:end', function(){
    namuwiki_unfold();
})

namuwiki_unfold();
