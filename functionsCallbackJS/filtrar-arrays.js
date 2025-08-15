
const isPar = (numero) => {
  return numero % 2 === 0;
};


const filterArray = (array, callback) => {
  const novoArray = []; 

  array.forEach(item => {
    
    if (callback(item)) {
      novoArray.push(item); 
    }
  });

  return novoArray; 
};


const arrayFiltrado = filterArray([1, 2, 3, 4, 5, 6], isPar);
console.log(arrayFiltrado); 