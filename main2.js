/* Implement pluck, which takes an array of objects and a property name, and returns an array containing the named property of each object.

For example:

pluck([{a:1}, {a:2}], 'a') // -> [1,2]
*/

function pluck(objs, name) {
    var sol = [];
    for(var i in objs){
        if(objs[i].hasOwnProperty(name)){
            // console.log(objs[i][name]);
            sol.push(objs[i][name]);
        }
    }
    return sol;
}

console.log(pluck([{a:1}, {a:2}], 'a'));