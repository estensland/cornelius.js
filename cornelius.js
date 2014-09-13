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

    h: function(num, content){
      return this.createTag('h'+num, content, options);
    },

    div: function(num, content, options){
      return this.createTag('h'+num, content, options);
    },
  };

  return cornelius;
}());