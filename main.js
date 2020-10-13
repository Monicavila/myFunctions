/*Implement pluck, wich takes an array of objects
 and a property name, and returns an array containing
 the named property of each object.
 
 For example

 If you want to know the caategory of each one of the object in
 an array:

 array = [
    { category : 'other', 
    title : 'harry University',  
    }, 
    { category : 'traveling', 
    title : 'tommy University',  
    }, 
    { category : 'education', 
    title : 'jerry University', 
    }, 
    { category : 'business', 
    title : 'Charlie University', 
    } 
 ];

 Property name: 'category'

 Enter [array], 'Property name'

[
    { category : 'other', 
    title : 'harry University',  
    }, 
    { category : 'traveling', 
    title : 'tommy University',  
    }, 
    { category : 'education', 
    title : 'jerry University', 
    }, 
    { category : 'business', 
    title : 'Charlie University', 
    } 
 ], 'category'
 
 pluck([{a:1},{a:2}], 'a') // -> [1,2]*/
 
 function pluck(objs, name)  {
     var array = [];
     for(var i in objs) {
         if(objs[i].hasOwnProperty(name)) {
            array.push(objs[i][name]);
         }
     }
     return array;
 }

 console.log(pluck([{ category : 'other', 
 title : 'harry University',  
 }, 
 { category : 'traveling', 
 title : 'tommy University',  
 }, 
 { category : 'education', 
 title : 'jerry University', 
 }, 
 { category : 'business', 
 title : 'Charlie University', 
 }], 'category'));

 function mypluck(objs, name)  {
    var array = [];
    var i;
    for(i = 0; i < objs.length; i++) {
        if(objs[i].hasOwnProperty(name)) {
           array.push(objs[i][name]);
        }
    }
    return array;
}

console.log(mypluck([{a:1},{a:2}], 'a'));