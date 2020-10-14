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
        name: 'ForEach',
        text: 
        `<div style="text-align: justify">
            <p>Implement method <strong>for Each</strong>, wich <a>iterates over the array items, in ascending order.</a>,
            The provided function may perform any kind of <a>operation</a> on the elements of the given array. 
            <em>And returns the index of each object too</em>.</p>
            <br>
            <p>&nbsp;For example</p> 
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;If you want to know what happens if you multiplay <strong>for 5</strong> <a>each one</a> 
            of the objects in the array</p>
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>array</strong> = [[45, 82, 34, 15, 77];</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Operation</strong> : * 5</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You implement this method like <strong>array.forEach(callback, * 5);</strong></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The answer [ 225, 410, 170, 75, 385 ]</p>
            <br>
            
        </div>
        `,
        placeholder1: `Enter: [array]`,
        placeholder2: `Enter: Operation`,

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
            <p>Implement method <strong>filter</strong>, wich <a>creat a new array</a>,
            with the elements <em>that have pass the requirement (predicate) check</em>.</p>
            <br>
            <p>&nbsp;For example</p> 
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;If you want only <strong>the even</strong> 
            <a>numbres</a> in the array</p>
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>array</strong> = [[1, 2, 7, 10];</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Predicate</strong> : evens numbres</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You implement this method like <strong>array.filter(% 2 === 0);</strong></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The answer [2, 10]</p>
            <br>
            
        </div>
        `,
        placeholder1: `Enter: [array]`,
        placeholder2: `Enter: Predicate`,

        code:  Array.prototype.myFilter = function(callback) {
            let newArray = [];
            for(let i = 0; i < this.length; i++) {
                if(callback(this[i]) === true) {
                    newArray.push(this[i]);
                }
            }
            return newArray;
        },
        //let filterValue = array.myFilter(element => element > 50);
        //console.log(filterValue);
    },
    {
        name: 'Map',
        text: 
        `<div style="text-align: justify">
            <p>Implement method <strong>map</strong>, wich <a>creats a new array by using callback</a>,
            on each one of the elements, on each iteration <em>we need arguments like the array itself, 
            current element and the index</em>.</p>
            <br>
            <p>&nbsp;For example</p> 
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;If you want <strong>add 5</strong> <a>on each one</a> 
            of the objects in the array</p>
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>array</strong> = [11, 0, 5, 52];</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Arguments</strong> : add 5 to the array elements</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You implement this method like:
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>array.map(element => element + 5);</strong></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The answer [16, 5, 10, 57]</p>
            <br>
            
        </div>
        `,
        placeholder1: `Enter: [array]`,
        placeholder2: `Enter: Arguments`,

        code:  Array.prototype.myMap = function(callback) {
            let newArray = [];
            for(let i = 0; i < this.length; i++) {
                newArray.push(callback(this[i]));
            }
            return newArray;
        },
        //let filterValue = array.myMap(element => element + 5);
        //console.log(filterValue);
    },
    {
        name: 'Find',
        text: 
        `<div style="text-align: justify">
            <p>Implement method <strong>find</strong>, wich <a>returns the first element</a>,
            in the array <em>that satisfies the requirement (predicate) function</em>.</p>
            <br>
            <p>&nbsp;For example</p> 
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;If you want to know wich is <a>the first number </a><strong>less than 70</strong>
            in the array</p>
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>array</strong> = [45, 82, 34, 15, 77];</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Predicate</strong> : first number less than 70</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You implement this method like:
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>array.find(element => element < 70);</strong></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The answer 45</p>
            <br>
            
        </div>
        `,
        placeholder1: `Enter: [array]`,
        placeholder2: `Enter: Predicate`,

        code:  Array.prototype.myFind = function(callback) {
            for(let i = 0; i < this.length; i++) {
               if(callback(this[i])) {
                    return this[i];
                }  
            }
        },
            
        //console.log(array.myFind(element => element < 70));
    },
    {
        name: 'FindIndex',
        text: 
        `<div style="text-align: justify">
            <p>Implement method <strong>findIndex</strong>, wich <a>returns the index of the first</a>,
            item to search in the array or predicate. <em>The default index optonal argument to start is 0</em>.</p>
            <br>
            <p>&nbsp;For example</p> 
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;If you want to know the positon, <a>index value</a>, of an element <strong>'panda'</strong>  
            in the array</p>
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>array</strong> = ['pinguin', 'jifar', 'shark', 'panda'];</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Predicate</strong> : 'panda'</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You implement this method like:
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>array.findIndex(element => element === 'panda');</strong></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The answer 3</p>
            <br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>itemToSearch</strong> : 'panda'</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;An alternative to implement with itmeToSearch is like:
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>array.indexOf(itemToSearch)</strong></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The answer 3</p>
        </div>
        `,
        placeholder1: `Enter: [array]`,
        placeholder2: `Enter: Predicate`,

        code:  Array.prototype.myFindIndex = function (callback) {
            for(let i = 0; i < this.length; i++) {
                if(callback(this[i])){
                    return i;
                }  
            }
        },
            
        //console.log(array.myFindIndex(element => element === 'panda'));
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