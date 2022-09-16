function QuestionsMarks(str) {
  let arr = str.split('');
  let res = false;
  let num = [];
  let contador = 0;
  
  arr.map(e => {
    if (!isNaN(e) && contador < 3) {
      num.push(e); contador = 0;
      if (num.length == 2 && (Number(num[0])+ Number(num[1])) == 10) {
        res = false;
      }
    }
    if (e == "?") { contador++; }
    if ((!isNaN(e)) && contador == 3 && (Number(e) + Number(num[0])) == 10) {
      res = true;
      num.push(e);
      num.shift();
      contador = 0;
    }
  })

  return res;
}


// keep this function call here 
console.log(QuestionsMarks("9???1???9??1???9"));

//***************Links de investigacion****************
//https://www.delftstack.com/es/howto/javascript/check-if-string-is-number-javascript/
//https://www.delftstack.com/es/howto/javascript/convert-string-to-number-javascript/#utilice-la-funci%25C3%25B3n-number-para-convertir-una-cadena-en-un-n%25C3%25BAmero-en-javascript
//https://www.javascripttutorial.net/javascript-array-shift/