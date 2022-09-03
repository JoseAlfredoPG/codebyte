function FindIntersection(strArr) {
    let a = strArr[0].split(',');
    let b = strArr[1].split(',');
    let resultado='';
    a.map(e => {
      b.map(f => {
        if (e.trim() === f.trim())
          resultado += f;
      })
    })

    if(resultado)
   {return resultado.trim().split(' ').join(',');}


   return false;
   
  }
  
  // keep this function call here 
  console.log(FindIntersection(["1, 2, 3, 4, 5", "6, 7, 8, 9, 10"]));