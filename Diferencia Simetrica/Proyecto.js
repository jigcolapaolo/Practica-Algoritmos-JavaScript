//La funcion puede tomar multiples arrays.
function sym(...arrays) {
    //Comprueba que haya al menos 2 arrays.
    if (!arrays || arrays.length < 2) {
      throw new Error("Debe haber minimo 2 arrays.");
    }
  
    //Realizo la primer diferencia simetrica entre el primer y segundo array
    let result = symmetricDifference(arrays[0], arrays[1]);
  
    //Si hay mas de 2 arrays, empiezo por el indice en 2 (Tercer array) y realizo la diferencia simetrica
    //entre ese array y el resultado anterior.
    for (let i = 2; i < arrays.length; i++) {
      result = symmetricDifference(result, arrays[i]);
    }
  
    return [...new Set(result)];
  }
  
  function symmetricDifference(array1, array2) {
    //Crea un nuevo array en donde los elementos de array1 no se encuentren en array2
    //y viceversa. Luego se concatenan ambos formando el array final.
    return [...new Set([...array1.filter(e => !array2.includes(e)), ...array2.filter(e => !array1.includes(e))])];
  }
  
  console.log(sym([3, 3, 3, 2, 5],[2, 1, 5, 7],[3, 4, 6, 6],[1, 2, 3],[5, 3, 9, 8],[1]));