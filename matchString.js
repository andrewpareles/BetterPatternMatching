
// end is exclusive and optional, doc.lastIndexOfBetween(BBB, 0, 1) only checks 1 spot
String.prototype.lastIndexOfBetween = function(str, start, end) {
  var sub = this.substring(start, end).lastIndexOf(str);
  if (sub == -1) return -1;
  else return sub + start;
}

function matchString(str, doc){
  //str = "AAA{a}BBB{b}CCC", doc = "QQQQQAAAaaaaaaaBBBbCCCQQQQ", docLoc = 5, acc = {"a": "valOfA", }){
  function matchStringInternal(str, docLoc, acc){
    // find first {
    var a1 = str.indexOf("{");
    
    var AAA = a1 == -1 ? str.substring(0) : str.substring(0, a1);

    if (AAA === doc.substr(docLoc, AAA.length)) {
      if (a1 == -1) return acc;
      else {    
        // find first }
        var a2 = str.indexOf("}");
        if (a2 == -1) throw new Error("Unmatched {}s");
        
        // name of variable
        var a = str.substring(a1 + 1, a2);

        // find second {
        var b1 = str.indexOf("{", a2 + 1);

        // if b1 is -1, search to end, omit 2nd argument
        var args = b1 == -1 ? [a2 + 1] : [a2 + 1, b1];

        var BBB = str.substring(...args);

        // last index of BBB before second {
        var b0 = doc.lastIndexOfBetween(BBB, ...args);
        
        // value of variable
        var a_val = doc.substring(a2 + 1, b0);
        
        //update acc
        acc[a] = a_val;
        
        return matchStringInternal(str.substring(AAA.length + a.length + 2), doc, docLoc + AAA.length + a.length + 2, acc);


      }
    } else throw new Error("Not a match");

  }
  
  docLoc = 0;

  matchStringInternal(str, docLoc, {});


}
