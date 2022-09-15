function CodelandUsernameValidation(str) {
  let resultado = false;
  var expre = new RegExp("^[A-Z a-z][0-9A-Za-z/_]{2,23}[0-9A-Za-z]{1}$")

  if ( expre.test(str)) {
    resultado=true;
  }
  return resultado;
}
  
  // keep this function call here 
  console.log(CodelandUsernameValidation("uh"));

  // ********* Links de investigacion *************
  // http://w3.unpocodetodo.info/utiles/regex-en-javascript.php
  // https://code.tutsplus.com/es/tutorials/8-regular-expressions-you-should-know--net-6149
  // https://www.adictosaltrabajo.com/2015/01/29/regexsam/