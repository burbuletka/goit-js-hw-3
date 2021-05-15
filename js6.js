'use strict'

console.log("  ");
console.log("  ");

let test;
let totalPrice  = 0;
let element;
let values = [];
let elementsArray = [];
let ObjectArrayValues = [];
let ObjectArrayKeys = [];

const products = [
   { name: 'Радар', price: 1300, quantity: 4 },
   { name: 'Сканер', price: 2700, quantity: 3 },
   { name: 'Дроїд', price: 400, quantity: 7 },
   { name: 'Захоплення', price: 1200, quantity: 2 },
 ];
 
 const calculateTotalPrice = function (allProdcut, productname) {
   for(test of allProdcut){
      ObjectArrayKeys = Object.keys(test);
      ObjectArrayValues = Object.values(test);

      for (let i = 0; i < ObjectArrayValues.length; i++) {
        element = ObjectArrayValues[i];
        if(element == productname){
          let indexKeyPrice = ObjectArrayKeys.indexOf('price');
          let ValuePrice = ObjectArrayValues[indexKeyPrice];
          let indexKeyQuantity = ObjectArrayKeys.indexOf('quantity');
          let ValueQuantity = ObjectArrayValues[indexKeyQuantity];
          totalPrice = ValueQuantity * ValuePrice;
          console.log(totalPrice);
        }
        else{
        }
        
      }
      
      totalPrice = 0;
   }
   
   
 };
 

calculateTotalPrice(products, 'Радар'); // 5200

calculateTotalPrice(products, 'Сканер'); // 8100

calculateTotalPrice(products, 'Дроїд'); // 2800

calculateTotalPrice(products, 'Захоплення'); // 2400