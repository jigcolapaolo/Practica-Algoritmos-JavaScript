function mergeSort(array) {
  
    function merge(array1, array2){
  
      let mergedArray = [];
  
      let i = 0;
      let j = 0;
  
      // Para entrar al while, ambos indices deben ser menores al length de sus arrays correspondientes.
      // Una vez dentro comparan elementos de ambos indices y el menor se agrega al mergedArray
      while(i < array1.length && j < array2.length){
  
        if(array1[i] > array2[j]){
          mergedArray.push(array2[j]);
          j++;
  
        }else{
          mergedArray.push(array1[i]);
          i++;
        }
      }
  
      // Cuando llega a estos while, habra algun array que no se termino de recorrer, dependiendo de cual
      // sea, entrara a un while o al otro, recorriendo todos los elementos que ya estan ordenados y 
      // agregandolos al mergedArray.
      while(i < array1.length)mergedArray.push(array1[i++]);
  
      while(j < array2.length)mergedArray.push(array2[j++]);
      
  
      return mergedArray;
    }
  
    // La funcion recibe un array, comprueba si solo tiene un elemento, si lo tiene, retorna el array
    if(array.length === 1){
        return array;
    }
  
    // Si tiene mas de un elemento, busco el elemento que esta en la mitad, redondeo
    let iMitad = Math.floor(array.length / 2);
  
    // A partir del array recibido, creo 2 subarrays teniendo en cuenta el elemento que estaba en la mitad
    let left = mergeSort(array.slice(0, iMitad));
    let right = mergeSort(array.slice(iMitad));
  
    // Una vez que termino de dividir el array hasta que solo queden arrays de 1 elemento, empiezo a
    // comparar 2 arrays para unirlos en 1 array ordenado de menor a mayor con merge.
  
    return merge(left, right);
  
}

console.log(mergeSort([5,3,8,7,1,4]));