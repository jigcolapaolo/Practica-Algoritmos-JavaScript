function binarySearch(searchList, value, arrayPath = []) {
    // Declaro el arrayPath en el parametro para que no se vuelva a inicializar en cada recursión,
    // guardara cada division a la mitad que se haga en el array hasta llegar al valor buscado.
    let mitad = Math.floor((searchList.length - 1) / 2);
  
    // Luego de saber cual es el numero a la mitad, guardo ese numero en el array.
    arrayPath.push(searchList[mitad]);
  
    // Si ese numero es el que estoy buscando, retorno el array con el numero buscado ya guardado.
    if(searchList[mitad] === value){
      return arrayPath;
      // Si no lo encuentro, al tener el array ordenado, pregunto si ese numero es mayor o menor al valor
      // buscado, para saber tengo en cuenta los numeros a la izquierda o a la derecha del numero en el medio
      // del array.
    }else if(searchList[mitad] > value){
      // Si es mayor, tambien valido si es el unico numero del array, en ese caso devuelvo el arrayPath,
      // en este punto se realizaron todas las divisiones del array y no se encontro el numero.
      if(mitad === 0){
        //No es necesario incluir esta condicion antes de comprobar si es menor o mayor, como el array
        //deberia estar ordenado, solo es necesario aplicarla si el numero en el medio es mayor.
        return arrayPath;
      }else{
        // Si hay mas de 1 elemento en el array, lo divido, creando otro array con los numeros a la 
        // izquierda del numero en el medio.
        arrayPath = binarySearch(searchList.slice(0, mitad), value, arrayPath);
      }
    }else{
      // Si no, el array creado sera con los numeros a la derecha del numero en el medio.
      arrayPath = binarySearch(searchList.slice(mitad + 1), value, arrayPath);
  
      // Cuando vuelva de cada recursion, actualizara el arrayPath con todos los numeros que se tuvieron
      // en cuenta al dividir los arrays para llegar al valor buscado
    }
  
    // Al haber hecho todas las recursiones posibles para encontrar el valor, comprobamos si en el 
    // arrayPath se encuentra el numero buscado al final, ya que deberia ser el ultimo valor agregado.
  
    // Si se encuentra ese valor, muestro la lista con los numeros que se usaron para llegar a ese valor.
    // Si no, mostrara que el valor no se encontro.
    if(arrayPath[arrayPath.length - 1] === value){
      return arrayPath;
    }else{
      return "Value Not Found";
    }
  }