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
    document.querySelector('#btn-submit').addEventListener('click', () => {
        document.getElementById('data1'). = selectedFunction.code();
        document.getElementById('data2'). = selectedFunction.code();
    });
}

const libreryFunctions = [
    {
        name: 'ForEach',
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
        name: 'Findindex',
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
        name: 'Contain',
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
    
    }
]
    