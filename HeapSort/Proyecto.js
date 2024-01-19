function permAlone(str) {
    // Función auxiliar para intercambiar elementos en un array
    function swap(arr, i, j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  
    // Función auxiliar para verificar si hay letras consecutivas repetidas en una permutación
    function hasConsecutiveRepeats(arr) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
          return true;
        }
      }
      return false;
    }
  
    // Función recursiva para generar permutaciones
    function generatePermutations(arr, n) {
      // Seguira de largo a generatePermutations hasta que la longitud del array sea 1
      if (n === 1) {
        if (!hasConsecutiveRepeats(arr)) {
          count++;
        }
        return;
      }
  
      for (let i = 0; i < n; i++) {
        //Función recursiva, ingresara varias veces hasta haber generado todas las permutaciones posibles
        generatePermutations(arr, n - 1);
        //Si es par..
        if (n % 2 === 0) {
          swap(arr, i, n - 1);
        } else {
          //Si es impar..
          swap(arr, 0, n - 1);
        }
      }
    }
  
    // Convierte la cadena en un array para facilitar la manipulación
    const strArr = str.split('');
    // Inicializa el contador
    let count = 0;
    // Genera permutaciones y verifica si tienen letras consecutivas repetidas
    generatePermutations(strArr, strArr.length);
  
    return count;
  }
  
  // Ingresar un string, realizara todas las permutaciones posibles y devolvera en cuantas de ellas
//   no hay elementos repetidos consecutivos.
  console.log(permAlone('aabcc'));
  