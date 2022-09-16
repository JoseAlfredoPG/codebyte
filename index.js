function LongestWord(sen) {
  var rex = /[a-z0-9]+/gi;
  let n = sen.match(rex);
  let anterior = 0;
  let indice = 0;

  n.map((item, index) => {
    if (item.length >anterior) {
      anterior = item.length;
      indice = index;
    }
  })

  return n[indice];

}


// keep this function call here 
console.log(QuestionsMarks("hello world"));

//***************Links de investigacion****************
// http://w3.unpocodetodo.info/utiles/regex-en-javascript.php