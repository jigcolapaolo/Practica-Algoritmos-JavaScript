function pairwise(arr, total){

    let arrayIndices = []
    let sumaIndices = 0;
  
    for(let i = 0; i < arr.length - 1; i++){
  
      for(let j = i+1; j < arr.length; j++){
  
          // Si el contenido de arr[i] y arr[j] es igual a total y esos indices no fueron utilizados
            // anteriormente, entonces suma los indices
        if((arr[i] + arr[j]) === total && !arrayIndices.includes(i) && !arrayIndices.includes(j)){
          sumaIndices += i + j
  
          // Guardo los indices utilizados
          arrayIndices.push(i,j);
  
          // Salgo del bucle y cambio al siguiente indice
          break;
        }
      }
    }
  
    return sumaIndices;
  }
  
  //Devuelve la suma de los indices del par de numeros que son iguales al parametro total.
  console.log(pairwise([0, 0, 0, 0, 1, 1], 1));
    