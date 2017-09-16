// ==UserScript==
// @name        NamuWiki Unfold
// @namespace   http://e.xtendo.org
// @description Convenient NamuWiki reading by unfolding footnotes
// @include     https://namu.wiki/w/*
// @version     2
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
    $('.wiki-fn-content').hover(function(){
        $(this).css('text-decoration', 'none');
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

function hintUglyLinks() {
    let contents = $('.wiki-link-internal').parent().contents();
    let internalLinkChecker = (elem) => {
        return (
            elem &&
            elem.nodeName === 'A' &&
            elem.classList.contains('wiki-link-internal') &&
            elem.querySelector('img') === null
        );
    };
    let buffer = [];
    for (let i = 0; i < contents.length; i += 1) {
        let content = contents[i];
        if (internalLinkChecker(content)) {
            if (content.parentNode.querySelectorAll('a.wiki-link-internal') < 2) {
                continue;
            }

            if (internalLinkChecker(contents[i+1])) {
                buffer.push(content.title);
            }
            else if (internalLinkChecker(contents[i-1])){
                buffer.push(content.title);
                let newElem = $('<span>');
                newElem.addClass('namu-hint-ugly-links');
                newElem.css(
                    'cssText',
                    'background:#EEE;padding:1px;border:1px solid #CCC;color:#666'
                );
                newElem.text(buffer.join(', '));
                newElem.insertAfter($(content));
                buffer = [];
            }
        }
    }
}

function removeHints() {
    $('span.namu-hint-ugly-links').remove();
}

function fold() {
    namuwiki_fold();
    removeHints();
}

function unfold() {
    namuwiki_unfold();
    hintUglyLinks();
}

document.addEventListener('keydown', function(e) {
    if (e.shiftKey && e.keyCode == 51) {
        if ($('.wiki-inner-content').attr('data-namuwiki-unfold') == 'true') {
            fold();
        } else {
            unfold();
        }
    }
}, true);

$(document).on('pjax:end', function(){
    unfold();
});

unfold();
