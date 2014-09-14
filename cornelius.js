window.cornelius = (function(){
  var corHelpers = {
    // These are adapted from github.com/estensland/MeadHall/Heorot-JS
    each: function(input, func){
      if (input instanceof Array){
        for (var i=0, ii = input.length; i < ii; i ++) {
          func(input[i]);
        }
      }
      else if (input instanceof Object){
        for (var key in input) {
          if (input.hasOwnProperty(key) && key !== 'heorotKind') {
            func(key, input[key]);
          }
        }
      }
      return input;
    },

    map: function(input, func){
      returnArray = [];

      if (input instanceof Array){
        for (var i=0, ii = input.length; i < ii; i ++) {
          returnArray.push(func(input[i]));
        }
      }
      else if (input instanceof Object){
        for (var key in input) {
          if (input.hasOwnProperty(key) && key !== 'heorotKind') {
            returnArray.push(func(key, input[key]));
          }
        }
      }
      return returnArray;
    }
  };

  var cornelius = {
    nest: function(){
      var parent = arguments[0];
      corHelpers.each(arguments[1], function(i){
        parent.appendChild(i);
      });
    },

    createTag: function(tag, content, options, parent){
      var newTag = document.createElement(tag);
      cornelius.applyAttributesToTag(newTag, options);
      newTag.innerText = content;
      if (parent === undefined){
        return document.body.appendChild(newTag);
      }
      else {
        return parent.appendChild(newTag);
      }
      return document.body.append(newTag);
    },

    applyAttributesToTag: function(newTag, options){
      corHelpers.each(options, function(key, value){
        newTag.setAttribute(key,value);
      });
    },

    createTagAsString: function(tag, content, options){
      attributes = corHelpers.map(options, function(key, value){
        return key + "='" + value +"'";
      });

      var openTag = "<" + tag;
      if (attributes.length > 1){
        openTag = openTag + " " + attributes.join(' ') + ">";
      }
      else{
        openTag = openTag + ">";
      }
      return openTag + content + "</" + tag + '>';
    },

    // Individually Listed Tags:
    a: function(content, options, parent){
      return this.createTag('a', content, options, parent);
    },

    abbr: function(content, options, parent){
      return this.createTag('abbr', content, options, parent);
    },

    address: function(content, options, parent){
      return this.createTag('address', content, options, parent);
    },

    area: function(content, options, parent){
      return this.createTag('area', content, options, parent);
    },

    article: function(content, options, parent){
      return this.createTag('article', content, options, parent);
    },

    aside: function(content, options, parent){
      return this.createTag('aside', content, options, parent);
    },

    audio: function(content, options, parent){
      return this.createTag('audio', content, options, parent);
    },

    b: function(content, options, parent){
      return this.createTag('b', content, options, parent);
    },

    base: function(content, options, parent){
      return this.createTag('base', content, options, parent);
    },

    bdi: function(content, options, parent){
      return this.createTag('bdi', content, options, parent);
    },

    bdo: function(content, options, parent){
      return this.createTag('bdo', content, options, parent);
    },

    blockquote: function(content, options, parent){
      return this.createTag('blockquote', content, options, parent);
    },

    body: function(content, options, parent){
      return this.createTag('body', content, options, parent);
    },

    br: function(content, options, parent){
      return this.createTag('br', content, options, parent);
    },

    button: function(content, options, parent){
      return this.createTag('button', content, options, parent);
    },

    canvas: function(content, options, parent){
      return this.createTag('canvas', content, options, parent);
    },

    caption: function(content, options, parent){
      return this.createTag('caption', content, options, parent);
    },

    cite: function(content, options, parent){
      return this.createTag('cite', content, options, parent);
    },

    code: function(content, options, parent){
      return this.createTag('code', content, options, parent);
    },

    col: function(content, options, parent){
      return this.createTag('col', content, options, parent);
    },

    colgroup: function(content, options, parent){
      return this.createTag('colgroup', content, options, parent);
    },

    comment: function(content, options, parent){
      return this.createTag('!--...--', content, options, parent);
    },

    datalist: function(content, options, parent){
      return this.createTag('datalist', content, options, parent);
    },

    dd: function(content, options, parent){
      return this.createTag('dd', content, options, parent);
    },

    del: function(content, options, parent){
      return this.createTag('del', content, options, parent);
    },

    details: function(content, options, parent){
      return this.createTag('details', content, options, parent);
    },

    dfn: function(content, options, parent){
      return this.createTag('dfn', content, options, parent);
    },

    dialog: function(content, options, parent){
      return this.createTag('dialog', content, options, parent);
    },

    div: function(content, options, parent){
      return this.createTag('div', content, options, parent);
    },

    dl: function(content, options, parent){
      return this.createTag('dl', content, options, parent);
    },

    doctype: function(content, options, parent){
      return this.createTag('!DOCTYPE', content, options, parent);
    },

    dt: function(content, options, parent){
      return this.createTag('dt', content, options, parent);
    },

    em: function(content, options, parent){
      return this.createTag('em', content, options, parent);
    },

    embed: function(content, options, parent){
      return this.createTag('embed', content, options, parent);
    },

    fieldset: function(content, options, parent){
      return this.createTag('fieldset', content, options, parent);
    },

    figcaption: function(content, options, parent){
      return this.createTag('figcaption', content, options, parent);
    },

    figure: function(content, options, parent){
      return this.createTag('figure', content, options, parent);
    },

    footer: function(content, options, parent){
      return this.createTag('footer', content, options, parent);
    },

    form: function(content, options, parent){
      return this.createTag('form', content, options, parent);
    },

    h: function(num, content, options, parent){
      return this.createTag('h'+num, content, options, parent);
    },

    head: function(content, options, parent){
      return this.createTag('head', content, options, parent);
    },

    header: function(content, options, parent){
      return this.createTag('header', content, options, parent);
    },

    hr: function(content, options, parent){
      return this.createTag('hr', content, options, parent);
    },

    html: function(content, options, parent){
      return this.createTag('html', content, options, parent);
    },

    i: function(content, options, parent){
      return this.createTag('i', content, options, parent);
    },

    iframe: function(content, options, parent){
      return this.createTag('iframe', content, options, parent);
    },

    img: function(content, options, parent){
      return this.createTag('img', content, options, parent);
    },

    input: function(content, options, parent){
      return this.createTag('input', content, options, parent);
    },

    ins: function(content, options, parent){
      return this.createTag('ins', content, options, parent);
    },

    kbd: function(content, options, parent){
      return this.createTag('kbd', content, options, parent);
    },

    keygen: function(content, options, parent){
      return this.createTag('keygen', content, options, parent);
    },

    label: function(content, options, parent){
      return this.createTag('label', content, options, parent);
    },

    legend: function(content, options, parent){
      return this.createTag('legend', content, options, parent);
    },

    li: function(content, options, parent){
      return this.createTag('li', content, options, parent);
    },

    link: function(content, options, parent){
      return this.createTag('link', content, options, parent);
    },

    main: function(content, options, parent){
      return this.createTag('main', content, options, parent);
    },

    map: function(content, options, parent){
      return this.createTag('map', content, options, parent);
    },

    mark: function(content, options, parent){
      return this.createTag('mark', content, options, parent);
    },

    menu: function(content, options, parent){
      return this.createTag('menu', content, options, parent);
    },

    menuitem: function(content, options, parent){
      return this.createTag('menuitem', content, options, parent);
    },

    meta: function(content, options, parent){
      return this.createTag('meta', content, options, parent);
    },

    meter: function(content, options, parent){
      return this.createTag('meter', content, options, parent);
    },

    nav: function(content, options, parent){
      return this.createTag('nav', content, options, parent);
    },

    noscript: function(content, options, parent){
      return this.createTag('noscript', content, options, parent);
    },

    object: function(content, options, parent){
      return this.createTag('object', content, options, parent);
    },

    ol: function(content, options, parent){
      return this.createTag('ol', content, options, parent);
    },

    optgroup: function(content, options, parent){
      return this.createTag('optgroup', content, options, parent);
    },

    option: function(content, options, parent){
      return this.createTag('option', content, options, parent);
    },

    output: function(content, options, parent){
      return this.createTag('output', content, options, parent);
    },

    p: function(content, options, parent){
      return this.createTag('p', content, options, parent);
    },

    param: function(content, options, parent){
      return this.createTag('param', content, options, parent);
    },

    pre: function(content, options, parent){
      return this.createTag('pre', content, options, parent);
    },

    progress: function(content, options, parent){
      return this.createTag('progress', content, options, parent);
    },

    q: function(content, options, parent){
      return this.createTag('q', content, options, parent);
    },

    rp: function(content, options, parent){
      return this.createTag('rp', content, options, parent);
    },

    rt: function(content, options, parent){
      return this.createTag('rt', content, options, parent);
    },

    ruby: function(content, options, parent){
      return this.createTag('ruby', content, options, parent);
    },

    s: function(content, options, parent){
      return this.createTag('s', content, options, parent);
    },

    samp: function(content, options, parent){
      return this.createTag('samp', content, options, parent);
    },

    script: function(content, options, parent){
      return this.createTag('script', content, options, parent);
    },

    section: function(content, options, parent){
      return this.createTag('section', content, options, parent);
    },

    select: function(content, options, parent){
      return this.createTag('select', content, options, parent);
    },

    small: function(content, options, parent){
      return this.createTag('small', content, options, parent);
    },

    source: function(content, options, parent){
      return this.createTag('source', content, options, parent);
    },

    span: function(content, options, parent){
      return this.createTag('span', content, options, parent);
    },

    strong: function(content, options, parent){
      return this.createTag('strong', content, options, parent);
    },

    style: function(content, options, parent){
      return this.createTag('style', content, options, parent);
    },

    sub: function(content, options, parent){
      return this.createTag('sub', content, options, parent);
    },

    summary: function(content, options, parent){
      return this.createTag('summary', content, options, parent);
    },

    sup: function(content, options, parent){
      return this.createTag('sup', content, options, parent);
    },

    table: function(content, options, parent){
      return this.createTag('table', content, options, parent);
    },

    tbody: function(content, options, parent){
      return this.createTag('tbody', content, options, parent);
    },

    td: function(content, options, parent){
      return this.createTag('td', content, options, parent);
    },

    textarea: function(content, options, parent){
      return this.createTag('textarea', content, options, parent);
    },

    tfoot: function(content, options, parent){
      return this.createTag('tfoot', content, options, parent);
    },

    th: function(content, options, parent){
      return this.createTag('th', content, options, parent);
    },

    thead: function(content, options, parent){
      return this.createTag('thead', content, options, parent);
    },

    time: function(content, options, parent){
      return this.createTag('time', content, options, parent);
    },

    title: function(content, options, parent){
      return this.createTag('title', content, options, parent);
    },

    tr: function(content, options, parent){
      return this.createTag('tr', content, options, parent);
    },

    track: function(content, options, parent){
      return this.createTag('track', content, options, parent);
    },

    u: function(content, options, parent){
      return this.createTag('u', content, options, parent);
    },

    ul: function(content, options, parent){
      return this.createTag('ul', content, options, parent);
    },

    var: function(content, options, parent){
      return this.createTag('var', content, options, parent);
    },

    video: function(content, options, parent){
      return this.createTag('video', content, options, parent);
    },

    wbr: function(content, options, parent){
      return this.createTag('wbr', content, options, parent);
    },
  };

  return cornelius;
}());