function swap(array, iSwap, i){
    const temp = array[iSwap];
    array[iSwap] = array[i];
    array[i] = temp;
  }
  
  // Para el array base, se establece que el inicio de la cadena (iMin) esta en el indice 0 y el fin de
  // la misma (iMax) esta en el indice array.length-1
  // Este metodo es recursivo, toma un array, estableciendo donde esta el inicio(iMin) y el fin (iMax)
  // del mismo, los cuales se determinan teniendo en cuenta el indice de un elemento pivote 
  function quickSort(array, iMin = 0, iMax = array.length - 1) {
  
    // La funcion ira dividiendo un array base en arrays mas pequeños, dejara de hacer recursiones
    // cuando llegue a un array de un solo elemento
    if(iMin < iMax){
      // El pivote siempre sera el ultimo elemento del array
      let pivot = array[iMax];
      // Se declara un indice que inicia siempre con este valor e ira avanzando por el array, segun la
      // condicion del bucle.
      let iSwap = iMin - 1;
    
      for(let i = iMin; i <= iMax; i++ ){
        // Este indice recorre todo el array, de inicio a fin
    
        // Si el elemento actual es menor o igual al pivote..
        if(array[i] <= pivot){
            
          iSwap++
    
          // Si el indice de intercambio es menor al indice del recorrido, hay que hacer un swap entre ambos
          // El menor se pondra antes
          if(iSwap < i){
            swap(array, iSwap, i);
          }
  
        }
        
      }
      // Si el iSwap no llego al final de la cadena, quiere decir que el pivote cambio de lugar.
      // El pivote, si cambia de lugar, solo lo hace al final del bucle ya que es el ultimo elemento del
      // array, por eso...si cambio de lugar, se encontraria en el indice iSwap, si no, seguiria al final
      // del array
      let iPivote = iSwap < iMax ? iSwap : iMax;
      
      // Al saber donde se encuentra el indice del pivote, divido el array en 2 y uso el indice pivote
      // para determinar donde finalizara el array de la izquierda..
      quickSort(array, iMin, iPivote - 1);
      // ..y donde iniciara el array de la derecha.
      quickSort(array, iPivote + 1, iMax);
    }
  
  
    return array;
  }

  
  console.log(quickSort([3,5,2,1,6,7,4]));