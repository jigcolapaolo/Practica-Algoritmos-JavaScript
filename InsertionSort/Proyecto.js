function insertionSort(array) {
    
    for (let i = 1; i < array.length; i++) {
        // El indice 0 es el inicio del array ordenado, asi que se comienza toma el elemento de array[1]
        // para compararlo con el numero mas grande del array ordenado
        let bubble = array[i];
        // El elemento actual se guarda en una burbuja
        for (var j = i - 1; j >= 0 && array[j] > bubble; j--) {
            // Si es mas grande, ese numero se asigna al indice que le sigue, la primera iteracion
            // sobreescribe el elemento actual que se guardo en la variable burbuja
          array[j + 1] = array[j];
        //   Recorre el array hacia atras hasta que encuentre un numero menor o llegue al final.
        }
        // Durante las iteraciones del ciclo for, habran numeros duplicados. Cuando el ciclo termine,
        // se asigna el elemento actual en la variable burbuja en el indice de ultimo elemento duplicado.
        array[j + 1] = bubble;
      }

    return array;
}

console.log(insertionSort([7,3,5,1]));