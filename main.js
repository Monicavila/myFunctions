function select() {
    const selectAFunction = document.getElementById('choose');
    const selectAFunctionValue = selectAFunction.value;
    const selectedFunction = libreryFunctions.find((eachFunction) => 
    eachFunction.name == selectAFunctionValue);

    document.getElementById('explanation').innerHTML= selectedFunction.text;
    // Link placeholder text displayed with selectedFunction
    document.getElementById('data1').placeholder = selectedFunction.placeholder1;
    document.getElementById('data2').placeholder = selectedFunction.placeholder2;
    // Run the function
    /*document.querySelector('#btn-submit').addEventListener('click', () => {
        document.getElementById('data1'). = selectedFunction.code();
        document.getElementById('data2'). = selectedFunction.code();
    });*/
}

const libreryFunctions = [
    {
        name:'noSelection',
        text: `<strong>Welcome</strong> and practice a few! 8 functions coded in javaScript`
    },
    {
        name: 'ForEach',
        text: 
        `<div style="text-align: justify">
            <p>Implement method <strong>for Each</strong>, wich <a>iterates over the array items, in ascending order.</a>,
            The provided function may perform any kind of operation on the elements of the given array. 
            <em>And returns the index of each object too</em>.</p>
            <br>
            <p>&nbsp;For example</p> 
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;If you want to know what happens if you multiplay <strong>for 5</strong> <a>each one</a> 
            of the objects in the array</p>
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>array</strong> = [[45, 82, 34, 15, 77];</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Operation</strong> : * 5</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You implement this method like array.forEach(callback, * 5)</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The answer [ 225, 410, 170, 75, 385 ]</p>
            <br>
            
        </div>
        `,
        placeholder1: `Enter: [array]`,
        placeholder2: `Enter: operation`,

        code:  Array.prototype.myForEach = function(callback) {
            for(let i = 0; i < this.length; i++) {
                callback(this[i],i);
            }
        },
        
        //let forEachValue = [];
        
        //array.myForEach(element => forEachValue.push(element *5));
        //console.log(forEachValue);
    },
    {
        name: 'Filter',
        text: 
        `<div style="text-align: justify">
            <p>Implement method <strong>pluck</strong>, wich <a>takes an array of objects and a property name</a>,
            and <em>returns an array containing the named property of each object</em>.</p>
            <br>
            <p>&nbsp;For example</p> 
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;If you want to know the <strong>'lenght'</strong> <a>of each one</a> 
            of the objects in the array</p>
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>array</strong> = [dog, cats, elephant, carrot];</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Property name</strong> : 'lenght'</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You implement this method like _.pluck(array, 'lenght');</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The answer [3, 4, 8, 6]</p>
            <br>
            
        </div>
        `,
        placeholder1: `Enter: [array]`,
        placeholder2: `Enter: 'Property name'`,

        code:  function myPluck(objs, name)  {
                var array = [];
                var i;
                for(i = 0; i < objs.length; i++) {
                    if(objs[i].hasOwnProperty(name)) {
                        array.push(objs[i][name]);
                    }
                }
                return array;
        }
        //console.log(myPluck([objs], 'name')),
    },
    {
        name: 'Map',
        text: 
        `<div style="text-align: justify">
            <p>Implement method <strong>pluck</strong>, wich <a>takes an array of objects and a property name</a>,
            and <em>returns an array containing the named property of each object</em>.</p>
            <br>
            <p>&nbsp;For example</p> 
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;If you want to know the <strong>'lenght'</strong> <a>of each one</a> 
            of the objects in the array</p>
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>array</strong> = [dog, cats, elephant, carrot];</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Property name</strong> : 'lenght'</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You implement this method like _.pluck(array, 'lenght');</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The answer [3, 4, 8, 6]</p>
            <br>
            
        </div>
        `,
        placeholder1: `Enter: [array]`,
        placeholder2: `Enter: 'Property name'`,

        code:  function myPluck(objs, name)  {
                var array = [];
                var i;
                for(i = 0; i < objs.length; i++) {
                    if(objs[i].hasOwnProperty(name)) {
                        array.push(objs[i][name]);
                    }
                }
                return array;
        }
        //console.log(myPluck([objs], 'name')),
    },
    {
        name: 'Find',
        text: 
        `<div style="text-align: justify">
            <p>Implement method <strong>pluck</strong>, wich <a>takes an array of objects and a property name</a>,
            and <em>returns an array containing the named property of each object</em>.</p>
            <br>
            <p>&nbsp;For example</p> 
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;If you want to know the <strong>'lenght'</strong> <a>of each one</a> 
            of the objects in the array</p>
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>array</strong> = [dog, cats, elephant, carrot];</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Property name</strong> : 'lenght'</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You implement this method like _.pluck(array, 'lenght');</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The answer [3, 4, 8, 6]</p>
            <br>
            
        </div>
        `,
        placeholder1: `Enter: [array]`,
        placeholder2: `Enter: 'Property name'`,

        code:  function myPluck(objs, name)  {
                var array = [];
                var i;
                for(i = 0; i < objs.length; i++) {
                    if(objs[i].hasOwnProperty(name)) {
                        array.push(objs[i][name]);
                    }
                }
                return array;
        }
        //console.log(myPluck([objs], 'name')),
    },
    {
        name: 'FindIndex',
        text: 
        `<div style="text-align: justify">
            <p>Implement method <strong>pluck</strong>, wich <a>takes an array of objects and a property name</a>,
            and <em>returns an array containing the named property of each object</em>.</p>
            <br>
            <p>&nbsp;For example</p> 
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;If you want to know the <strong>'lenght'</strong> <a>of each one</a> 
            of the objects in the array</p>
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>array</strong> = [dog, cats, elephant, carrot];</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Property name</strong> : 'lenght'</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You implement this method like _.pluck(array, 'lenght');</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The answer [3, 4, 8, 6]</p>
            <br>
            
        </div>
        `,
        placeholder1: `Enter: [array]`,
        placeholder2: `Enter: 'Property name'`,

        code:  function myPluck(objs, name)  {
                var array = [];
                var i;
                for(i = 0; i < objs.length; i++) {
                    if(objs[i].hasOwnProperty(name)) {
                        array.push(objs[i][name]);
                    }
                }
                return array;
        }
        //console.log(myPluck([objs], 'name')),
    },
    {
        name: 'Contains',
        text: 
        `<div style="text-align: justify">
            <p>Implement method <strong>pluck</strong>, wich <a>takes an array of objects and a property name</a>,
            and <em>returns an array containing the named property of each object</em>.</p>
            <br>
            <p>&nbsp;For example</p> 
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;If you want to know the <strong>'lenght'</strong> <a>of each one</a> 
            of the objects in the array</p>
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>array</strong> = [dog, cats, elephant, carrot];</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Property name</strong> : 'lenght'</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You implement this method like _.pluck(array, 'lenght');</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The answer [3, 4, 8, 6]</p>
            <br>
            
        </div>
        `,
        placeholder1: `Enter: [array]`,
        placeholder2: `Enter: 'Property name'`,

        code:  function myPluck(objs, name)  {
                var array = [];
                var i;
                for(i = 0; i < objs.length; i++) {
                    if(objs[i].hasOwnProperty(name)) {
                        array.push(objs[i][name]);
                    }
                }
                return array;
        }
        //console.log(myPluck([objs], 'name')),
    },
    {
        name: 'Pluck',
        text: 
        `<div style="text-align: justify">
            <p>Implement method <strong>pluck</strong>, wich <a>takes an array of objects and a property name</a>,
            and <em>returns an array containing the named property of each object</em>.</p>
            <br>
            <p>&nbsp;For example</p> 
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;If you want to know the <strong>'lenght'</strong> <a>of each one</a> 
            of the objects in the array</p>
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>array</strong> = [dog, cats, elephant, carrot];</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Property name</strong> : 'lenght'</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You implement this method like _.pluck(array, 'lenght');</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The answer [3, 4, 8, 6]</p>
            <br>
            
        </div>
        `,
        placeholder1: `Enter: [array]`,
        placeholder2: `Enter: 'Property name'`,

        code:  function myPluck(objs, name)  {
                var array = [];
                var i;
                for(i = 0; i < objs.length; i++) {
                    if(objs[i].hasOwnProperty(name)) {
                        array.push(objs[i][name]);
                    }
                }
                return array;
        }
        //console.log(myPluck([objs], 'name')),
    },
    {
        name: 'Without',
        text: 
        `<div style="text-align: justify">
            <p>Implement method <strong>pluck</strong>, wich <a>takes an array of objects and a property name</a>,
            and <em>returns an array containing the named property of each object</em>.</p>
            <br>
            <p>&nbsp;For example</p> 
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;If you want to know the <strong>'lenght'</strong> <a>of each one</a> 
            of the objects in the array</p>
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>array</strong> = [dog, cats, elephant, carrot];</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Property name</strong> : 'lenght'</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You implement this method like _.pluck(array, 'lenght');</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The answer [3, 4, 8, 6]</p>
            <br>
            
        </div>
        `,
        placeholder1: `Enter: [array]`,
        placeholder2: `Enter: '(items, you want to removecs)`,

        code:   Array.prototype.myWhithout = function(...items) {
                    const copyArray = Array.from(array);
                    items.map(element => {
                        var index = copyArray.indexOf(element);
                        if(index > -1){
                            copyArray.splice(copyArray.indexOf(element),1);
                        }
                    });
                    return copyArray;   
                },
        
                //console.log(array.myWhithout('c', 'b'));
    }
];