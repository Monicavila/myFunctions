
/*Array.prototype.myForEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i],i);
    }
};

let forEachValue = [];

array.myForEach(element => forEachValue.push(element *5));
console.log(forEachValue);*/


// function myFilter(array, callback) {
//     const newArray = [];
//     for(let i = 0; i < array.length; i++ ) {
//         if(callback(array[i]) === true) {
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }

// var array = [4, 9, 16, 25];
// console.log(myFilter(array, element => element > 9)); 

// function myMap(array, callback) {
//     const newArray = [];
//     for(let i = 0; i < array.length; i++ ) {
//             newArray.push(callback(array[i]));
//     }
//     return newArray;
// }

// console.log(myMap(array, element => element * 2));

// var array = [4, 9, 16, 25];
// function myFind(array, callback) {
//     for(let i = 0; i < array.length; i++ ) {
//       if(callback(array[i])){
//         return array[i];
//       }  
//     }
// }

// console.log(myFind(array, element => element > 12)); 

// var array = [4, 9, 16, 25];
// function myFindIndex(array, callback) {
//     for(let i = 0; i < array.length; i++ ) {
//       if(callback(array[i])){
//         return i;
//       }  
//     }
//    return -1;
// }

// console.log(myFindIndex(array, element => element > 12))

// var array = [4, 9, 16, 25];
// function myContains(array, callback) {
//     for(let i = 0; i < array.length; i++) {
//       if(callback(array[i])) {
//         return true;
//       }
//     }
//   return false;
// }

// console.log(myContains(array, element => element === 79)); 

// var arreglo = [{nombre: 'moe', edad: 40}, {nombre: 'larry', edad: 50}, {nombre: 'rizado', edad: 60}];

// function myPluck(array, propiedad) {
//   const newArray = [];
//   for(let i = 0; i < array.length; i++) {
//     newArray.push(array[i][propiedad]);
//   }
//   return newArray;
// }

// console.log(myPluck(arreglo,'edad')); 


function myPluck(array, propiedad) {
    //   const newArray = [];
    //   for(let i = 0; i < array.length; i++) {
    //     newArray.push(array[i][propiedad]);
    //   }
    //   return newArray;
    // }