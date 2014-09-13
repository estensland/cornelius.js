window.cornelius = (function(){
  console.log('capitalism');
  
  var cornelius = {
    createTag: function(tag, content){
      hTag = tag + ">"
      return "<" + hTag + content + "</" + hTag;
    },
    
    h: function(num, content){
      return this.createTag('h'+num, content)
    }
  }
}());
