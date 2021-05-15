'use strict'

console.log("  ");
console.log("  ");


let test;
let finalarray = [];
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

const getAllPropValue = function (arr, prop) {

  for(test of arr){
    finalarray.push(test[prop]);
  }
  console.log(finalarray);
  finalarray = [];
};


getAllPropValue(products, 'name'); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

getAllPropValue(products, 'quantity'); // [4, 3, 7, 2]

getAllPropValue(products, 'category'); // []