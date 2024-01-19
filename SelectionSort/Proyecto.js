function selectionSort(array) {

    // array.length - 1 porque el ultimo elemento no tiene con quien compararse.
    for(let i = 0; i < array.length - 1; i++){

        // Guardo el primer elemento del indice actual y el indice tambien.
        let menor = array[i];
        let indiceMenor = i;

        for(let j = i; j < array.length; j++){

            // En caso de encontrar un elemento menor, se guardara junto con su indice.
            if(array[j] < menor){
                menor = array[j];
                indiceMenor = j;
            }
        }

        // Al terminar, intercambio elementos, el numero menor se intercambiara con el numero del elemento
        // en el indice en i.
        const bubble = array[i];
        array[i] = array[indiceMenor];
        array[indiceMenor] = bubble;
    }

    return array;
}

console.log(selectionSort([1,4,2,8]));
