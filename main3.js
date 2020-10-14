var array = [45, 82, 34, 15, 77];

/*Array.prototype.myForEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i],i);
    }
};

let forEachValue = [];

array.myForEach(element => forEachValue.push(element *5));
console.log(forEachValue);*/


/*Array.prototype.myFilter = function(callback) {
    let newArray = [];
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i]) === true) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}
let filterValue = array.myFilter(element => element > 50);
console.log(filterValue);*/

/*Array.prototype.myMap = function(callback) {
    let newArray = [];
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }
    return newArray;
}
let filterValue = array.myMap(element => element + 5);
console.log(filterValue);*/

/*Array.prototype.myFind = function(callback) {
    for(let i = 0; i < this.length; i++) {
       if(callback(this[i])) {
            return this[i];
        }  
    }
}
    
console.log(array.myFind(element => element < 70));*/

/*Array.prototype.myFindIndex = function (callback) {
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i])){
            return i;
        }  
    }
}
    
console.log(array.myFindIndex(element => element === 15))*/

/*Array.prototype.myContains = function (callback) {
    for(let i = 0; i < this.length; i++) {
       if(callback(this[i])) {
            return true;
        }
    }
    return false;
}
    
console.log(array.myContains(element => element === 83));*/ 

var array = ['pato', 'perro', 'zanahoria'];

/*Array.prototype.myPluck = function (name) {
    let newArray = [];
    for(let i = 0; i < this.length; i++) {
        if(this[i].hasOwnProperty(name)) {
            newArray.push(this[i][name]);
        }
    }
    return newArray;
} 
console.log(array.myPluck('length'));*/

var array = ['a', 'b', 'c', 'd'];

/*Array.prototype.myWhithout = function(...items) {
    const copyArray = Array.from(array);
    items.map(element => {
        var index = copyArray.indexOf(element);
        if(index > -1){
            copyArray.splice(copyArray.indexOf(element),1);
        }
    });
    return copyArray;   
}

console.log(array.myWhithout('c', 'b'));*/