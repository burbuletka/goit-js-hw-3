'use strict'

console.log("  ");
console.log("  ");

let employe;
const findBestEmployee = function (employees) {
  let values = Object.values(employees);
  let keys = Object.keys(employees);
  let max = Math.max(...values);
  let indexOf = values.indexOf(max);
  let indexWord = keys[indexOf];
  console.log(`Найкращий працівник - ${indexWord}`);
  
};
 

   findBestEmployee({
     ann: 29,
     david: 35,
     helen: 1,
     lorence: 99,
   }); // lorence
 

   findBestEmployee({
     poly: 12,
     mango: 17,
     ajax: 4,
   }
   ); // mango
 

   findBestEmployee({
     lux: 147,
     david: 21,
     kiwi: 19,
     chelsy: 38,
   }); // lux
