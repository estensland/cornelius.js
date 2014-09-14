window.cornelius = (function(){
  var corHelpiers = {
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
    },

    select: function(input, func){
      returnArray = [];
      for (var i=0, ii = input.length; i < ii; i ++) {
        if (func(input[i])){
          returnArray.push(input[i]);
        }
      }
      return returnArray;
    },

    reject: function(input, func){
      returnArray = [];
      for (var i=0, ii = input.length; i < ii; i ++) {
        if (!func(input[i])){
          returnArray.push(input[i]);
        }
      }
      return returnArray;
    }
  };

  var cornelius = {
    createTag: function(tag, content, options){
      var newTag = document.createElement(tag);
      cornelius.applyAttributesToTag(newTag, options);
      newTag.innerText = content;
      return newTag;
    },

    applyAttributesToTag: function(newTag, options){
      corHelpiers.each(options, function(key, value){
        newTag.setAttribute(key,value);
      });
    },

    createTagAsString: function(tag, content, options){
      attributes = corHelpiers.map(options, function(key, value){
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

    attachTag: function(tag, location){
      if (location === undefined){
        return document.body.appendChild(tag);
      }
      else {
        location.appendChild(tag);
      }
    },

    // Individually Listed Tags:
    a: function(content, options){
      return this.createTag('a', content, options);
    },

    abbr: function(content, options){
      return this.createTag('abbr', content, options);
    },

    address: function(content, options){
      return this.createTag('address', content, options);
    },

    area: function(content, options){
      return this.createTag('area', content, options);
    },

    article: function(content, options){
      return this.createTag('article', content, options);
    },

    aside: function(content, options){
      return this.createTag('aside', content, options);
    },

    audio: function(content, options){
      return this.createTag('audio', content, options);
    },

    b: function(content, options){
      return this.createTag('b', content, options);
    },

    base: function(content, options){
      return this.createTag('base', content, options);
    },

    bdi: function(content, options){
      return this.createTag('bdi', content, options);
    },

    bdo: function(content, options){
      return this.createTag('bdo', content, options);
    },

    blockquote: function(content, options){
      return this.createTag('blockquote', content, options);
    },

    body: function(content, options){
      return this.createTag('body', content, options);
    },

    br: function(content, options){
      return this.createTag('br', content, options);
    },

    button: function(content, options){
      return this.createTag('button', content, options);
    },

    canvas: function(content, options){
      return this.createTag('canvas', content, options);
    },

    caption: function(content, options){
      return this.createTag('caption', content, options);
    },

    cite: function(content, options){
      return this.createTag('cite', content, options);
    },

    code: function(content, options){
      return this.createTag('code', content, options);
    },

    col: function(content, options){
      return this.createTag('col', content, options);
    },

    colgroup: function(content, options){
      return this.createTag('colgroup', content, options);
    },

    comment: function(content, options){
      return this.createTag('!--...--', content, options);
    },

    datalist: function(content, options){
      return this.createTag('datalist', content, options);
    },

    dd: function(content, options){
      return this.createTag('dd', content, options);
    },

    del: function(content, options){
      return this.createTag('del', content, options);
    },

    details: function(content, options){
      return this.createTag('details', content, options);
    },

    dfn: function(content, options){
      return this.createTag('dfn', content, options);
    },

    dialog: function(content, options){
      return this.createTag('dialog', content, options);
    },

    div: function(content, options){
      return this.createTag('div', content, options);
    },

    dl: function(content, options){
      return this.createTag('dl', content, options);
    },

    doctype: function(content, options){
      return this.createTag('!DOCTYPE', content, options);
    },

    dt: function(content, options){
      return this.createTag('dt', content, options);
    },

    em: function(content, options){
      return this.createTag('em', content, options);
    },

    embed: function(content, options){
      return this.createTag('embed', content, options);
    },

    fieldset: function(content, options){
      return this.createTag('fieldset', content, options);
    },

    figcaption: function(content, options){
      return this.createTag('figcaption', content, options);
    },

    figure: function(content, options){
      return this.createTag('figure', content, options);
    },

    footer: function(content, options){
      return this.createTag('footer', content, options);
    },

    form: function(content, options){
      return this.createTag('form', content, options);
    },

    h: function(num, content, options){
      return this.createTag('h'+num, content, options);
    },

    head: function(content, options){
      return this.createTag('head', content, options);
    },

    header: function(content, options){
      return this.createTag('header', content, options);
    },

    hr: function(content, options){
      return this.createTag('hr', content, options);
    },

    html: function(content, options){
      return this.createTag('html', content, options);
    },

    i: function(content, options){
      return this.createTag('i', content, options);
    },

    iframe: function(content, options){
      return this.createTag('iframe', content, options);
    },

    img: function(content, options){
      return this.createTag('img', content, options);
    },

    input: function(content, options){
      return this.createTag('input', content, options);
    },

    ins: function(content, options){
      return this.createTag('ins', content, options);
    },

    kbd: function(content, options){
      return this.createTag('kbd', content, options);
    },

    keygen: function(content, options){
      return this.createTag('keygen', content, options);
    },

    label: function(content, options){
      return this.createTag('label', content, options);
    },

    legend: function(content, options){
      return this.createTag('legend', content, options);
    },

    li: function(content, options){
      return this.createTag('li', content, options);
    },

    link: function(content, options){
      return this.createTag('link', content, options);
    },

    main: function(content, options){
      return this.createTag('main', content, options);
    },

    map: function(content, options){
      return this.createTag('map', content, options);
    },

    mark: function(content, options){
      return this.createTag('mark', content, options);
    },

    menu: function(content, options){
      return this.createTag('menu', content, options);
    },

    menuitem: function(content, options){
      return this.createTag('menuitem', content, options);
    },

    meta: function(content, options){
      return this.createTag('meta', content, options);
    },

    meter: function(content, options){
      return this.createTag('meter', content, options);
    },

    nav: function(content, options){
      return this.createTag('nav', content, options);
    },

    noscript: function(content, options){
      return this.createTag('noscript', content, options);
    },

    object: function(content, options){
      return this.createTag('object', content, options);
    },

    ol: function(content, options){
      return this.createTag('ol', content, options);
    },

    optgroup: function(content, options){
      return this.createTag('optgroup', content, options);
    },

    option: function(content, options){
      return this.createTag('option', content, options);
    },

    output: function(content, options){
      return this.createTag('output', content, options);
    },

    p: function(content, options){
      return this.createTag('p', content, options);
    },

    param: function(content, options){
      return this.createTag('param', content, options);
    },

    pre: function(content, options){
      return this.createTag('pre', content, options);
    },

    progress: function(content, options){
      return this.createTag('progress', content, options);
    },

    q: function(content, options){
      return this.createTag('q', content, options);
    },

    rp: function(content, options){
      return this.createTag('rp', content, options);
    },

    rt: function(content, options){
      return this.createTag('rt', content, options);
    },

    ruby: function(content, options){
      return this.createTag('ruby', content, options);
    },

    s: function(content, options){
      return this.createTag('s', content, options);
    },

    samp: function(content, options){
      return this.createTag('samp', content, options);
    },

    script: function(content, options){
      return this.createTag('script', content, options);
    },

    section: function(content, options){
      return this.createTag('section', content, options);
    },

    select: function(content, options){
      return this.createTag('select', content, options);
    },

    small: function(content, options){
      return this.createTag('small', content, options);
    },

    source: function(content, options){
      return this.createTag('source', content, options);
    },

    span: function(content, options){
      return this.createTag('span', content, options);
    },

    strong: function(content, options){
      return this.createTag('strong', content, options);
    },

    style: function(content, options){
      return this.createTag('style', content, options);
    },

    sub: function(content, options){
      return this.createTag('sub', content, options);
    },

    summary: function(content, options){
      return this.createTag('summary', content, options);
    },

    sup: function(content, options){
      return this.createTag('sup', content, options);
    },

    table: function(content, options){
      return this.createTag('table', content, options);
    },

    tbody: function(content, options){
      return this.createTag('tbody', content, options);
    },

    td: function(content, options){
      return this.createTag('td', content, options);
    },

    textarea: function(content, options){
      return this.createTag('textarea', content, options);
    },

    tfoot: function(content, options){
      return this.createTag('tfoot', content, options);
    },

    th: function(content, options){
      return this.createTag('th', content, options);
    },

    thead: function(content, options){
      return this.createTag('thead', content, options);
    },

    time: function(content, options){
      return this.createTag('time', content, options);
    },

    title: function(content, options){
      return this.createTag('title', content, options);
    },

    tr: function(content, options){
      return this.createTag('tr', content, options);
    },

    track: function(content, options){
      return this.createTag('track', content, options);
    },

    u: function(content, options){
      return this.createTag('u', content, options);
    },

    ul: function(content, options){
      return this.createTag('ul', content, options);
    },

    var: function(content, options){
      return this.createTag('var', content, options);
    },

    video: function(content, options){
      return this.createTag('video', content, options);
    },

    wbr: function(content, options){
      return this.createTag('wbr', content, options);
    },
  };

  return cornelius;
}());