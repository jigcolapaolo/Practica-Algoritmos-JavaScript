function bubbleSort(array) {
  
    let swap;
        // array.length - 1 para que no pueda llegar al penultimo elemento y compare el mismo numero en el
        // bucle interno
      for(let i = 0; i < array.length - 1; i++){
        
        // Si esta variable se mantiene en falso, quiere decir que no se tuvieron que ordenar mas elementos.
        swap = false;
  
        // array.length - 1 - i para reducir la cantidad de comparaciones, sin que tenga en cuenta
        // los elementos del final del array que ya estan ordenados.
        for(let j = 0; j < array.length - 1 - i; j++){
  
          if(array[j] > array[j + 1]){
  
            const bubble = array[j];
            array[j] = array[j + 1];
            array[j + 1] = bubble;
  
            swap = true;
          }
        }
  
        // Si swap esta en false, termina el bucle, el array ya esta ordenado.
        if(!swap){
          break;
        }
  
      }
  
  
    return array;
  }
  
  console.log(bubbleSort([5,2,3]));