function updateInventory(arr1, arr2) {
    // Itera sobre cada elemento del primer inventario (arr1)
    for (let i = 0; i < arr1.length; i++) {
        let currentItem = arr1[i];

        // Busca si existe un artículo con el mismo nombre en el segundo inventario (arr2)
        let foundIndex = arr2.findIndex(item => item[1] === currentItem[1]);

        // Si encuentra un artículo con el mismo nombre en arr2
        if (foundIndex !== -1) {
            // Actualiza la cantidad del artículo en arr1 sumándole la cantidad de arr2
            currentItem[0] += arr2[foundIndex][0];
            
            // Elimina ese artículo del segundo inventario (arr2)
            arr2.splice(foundIndex, 1);
        }
    }

    // Concatena los dos inventarios y los ordena alfabéticamente por el nombre del artículo
    let updatedInventory = arr1.concat(arr2).sort((a, b) => a[1].localeCompare(b[1]));

    // Devuelve el inventario actualizado
    return updatedInventory;
}

// Ejemplo de uso
let currentInventory = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

let newInventory = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

var inventory = updateInventory(currentInventory, newInventory);

for(let item of inventory){
    let quantity = item[0];
    let category = item[1];
    console.log("[" + quantity + ", " + category + "]");
}