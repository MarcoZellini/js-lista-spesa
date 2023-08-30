/* 
    Consegna:
        Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
*/

//Definisco gli elementi di cui ho bisogno
const bodyElement = document.querySelector('body');
const ulElement = document.createElement('ul');
const shoppingList = [];
let i;

//Inserisco degli elementi all'interno della lista
shoppingList.push('Frutta');
shoppingList.push('Pasta');
shoppingList.push('Verdura');
shoppingList.push('Sale');
shoppingList.push('Pepe');
shoppingList.push('Olio');
shoppingList.push('Vino');
shoppingList.push('Acqua');
console.log(shoppingList);

//Aggiungo gli elementi necessari alla DOM
bodyElement.append(ulElement);

//Stampo in pagina il contenuto della lista
i = 0;
while (i < shoppingList.length) {
    //Ad ogni iterazione creo un elemento della lista
    const liElement = document.createElement('li');
    ulElement.append(liElement);
    liElement.append(shoppingList[i]);
    console.log(shoppingList[i]);
    i++;
}