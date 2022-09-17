/* const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
};

function changeStatus(task, status) {
    list[task] = status; 
}
changeStatus("write a post", "Done");

function addTask(task) {
    if(!list[task]) {
        list[task] = 'To Do';
    }
    
}
addTask('read a book');
changeStatus('read a book', "Done");
addTask('read a book');
addTask('make a walk');

function  deleteTask(task) {
    delete list[task];
    
}
deleteTask("create a new practice task"); */




/* const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
   }
   function changeStatus(task, status) {
        list[task] = status;
   }
   changeStatus('write a post','Done');

   function addTask(task) {
    list[task] = 'To Do';
   }
   addTask('have a walk');
 
   function deleteTask(task) {
    delete list[task];
   }
   deleteTask('have a walk'); */




/*    const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
   }

   function changeStatus(task, status) {
    list[task] = status;
   }
   changeStatus("write a post", "Done");

   function addTask(task) {
    list[task] = 'To Do';
   }
   addTask('have a walk');

   function deleteTask(task) {
    delete list[task];
   }
   deleteTask('have a walk'); */


 /*   function showList() {
    let a = 0;
    let b = 0;
    let c = 0;
    console.log('To Do:');
    for(let key in list) {
        if(list[key] === 'To Do') {
            console.log(key);
            a++;
        }
    }
    if(a === 0) {
        console.log('  -');
    }
    console.log('In Progress:');
    for(let key in list) {
        if(list[key] === 'In Progress') {
            console.log(key);
            b++;
        }
    }
    if(b === 0) {
        console.log('  -');
    }
    console.log('Done:');
    for(let key in list) {
        if(list[key] === 'Done') {
            console.log(key);
            c++;
        }
    }
    if(c === 0) {
        console.log('  -');
    }
   }
showList(); */

/* const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
   }

function changeStatus(task, status) {
    list[task] = status;
}
changeStatus("write a post", "Done");
changeStatus("create a new practice task", "Done");

function addTask(task) {
    list[task] = 'To Do';
}
addTask('have a walk');

function deleteTask(task) {
    delete list[task];
}
deleteTask('have a walk');
deleteTask("create a new practice task"); */

/* function showList() {
    let a = 0;
    let b = 0;
    let c = 0;
    console.log('To Do:');
    for(let key in list) {
        if(list[key] === 'To Do') {
            console.log(key);
            a++;
        }
    }
    if(a === 0) {
        console.log('  -');
    }
    console.log('In Progress:');
    for(let key in list) {
        if(list[key] === 'In Progress') {
            console.log(key);
            b++;
        }
    }
    if(b === 0) {
        console.log('  -');
    }
    console.log('Done:');
    for(let key in list) {
        if(list[key] === 'Done') {
            console.log(key);
            c++;
        }
    }
    if(c === 0) {
        console.log('  -');
    }
}
showList(); */

/* const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
   }

   function changeStatus(task, status) {
    list[task] = status;
   }
   changeStatus("write a post", "Done");

   function addTask(task) {
    list[task] = 'To Do';
   }
   addTask('have a walk');

   function deleteTask(task) {
    delete list[task];
   }
   deleteTask('have a walk'); */

/* function showList() {
    let a = 0;
    let b = 0;
    let c = 0;
    console.log('To Do:');
    for(let key in list) {
        if(list[key] === 'To Do') {
            console.log(key);
            a++;
        }
    }
    if(a === 0) {
        console.log('  -');
    }
    console.log('In Progress:');
    for(let key in list) {
        if(list[key] === 'In Progress') {
            console.log(key);
            b++;
        }
    }
    if(b === 0) {
        console.log('  -');
    }
    console.log('Done:');
    for(let key in list) {
        if(list[key] === 'Done') {
            console.log(key);
            c++;
        }
    }
    if(c === 0) {
        console.log('  -');
    }
}
showList(); */
















/* function showList() {
    let a = 0;
    let b = 0;
    let c = 0;
    console.log('To Do:');
    for(let key in list) {
        if(list[key] === 'To Do') {
            console.log(key);
            a++;
        }
    }
    if(a === 0) {
        console.log('-');
    }
    console.log('In Progress:');
    for(let key in list) {
        if(list[key] === 'In Progress') {
            console.log(key);
            b++;
        }
    }
    if(b === 0) {
        console.log('   -');
    }
    console.log('Done:');
    for(let key in list) {
        if(list[key] === 'Done') {
            console.log(key);
            c++;
        }
    }
    if(c === 0) {
        console.log('-');
        }
}
showList(); */








/* function showList() {
    let a = 0;
    let b = 0;
    let c = 0;
    console.log('To Do:');
    for(let key in list) {
        if(list[key] === 'To Do') {
            console.log(key);
            a++;
        }
    }
    if(a === 0) {
        console.log('-');
    }

    console.log('In Progress:'); 
        for(let key in list) {
            if(list[key] === 'In Progress') {
                console.log(key);
                b++;
            }
        }
        if(b === 0) {
            console.log('-');
        }

        console.log('Done');
        for(let key in list) {
            if(list[key] === 'Done') {
                console.log(key);
                c++;
            }
            if(c === 0) {
                console.log('-');
            }
        }
    }

console.log(showList()); */




/* function showList() {
    let a = 0;
    let b = 0;
    let c = 0;
    console.log('To Do:');
    for(let key in list) {
        if(list[key] === 'To Do') {
            console.log(key);
            a++;
        }
    }
    if(a === 0) {
        console.log('-');
    }
    console.log('In Progress:');
    for(let key in list) {
        if(list[key] === 'In Progress') {
            console.log(key);
            b++;
        }
    }
    if(b === 0) {
        console.log('-');
    }
    console.log('Done:'); 
    for(let key in list) {
        if(list[key] === 'Done') {
            console.log(key);
            c++;
        }
    }
    if(c === 0) {
        console.log('-');
    }
    
}
console.log(showList()); */





/* function showList() {
    let a = 0;
    let b = 0;
    let c = 0;
    console.log('To Do:');
    for(let key in list) {
        if(list[key] === 'To Do') {
            console.log(key);
            a++;
        }
    }
    if(a === 0) {
        console.log('  -');
    }
    console.log('In Progress:');
    for(let key in list) {
        if(list[key] === 'In Progress') {
            console.log(key);
            b++;
        }
    }
    if(b === 0) {
        console.log('  -');
    }
    console.log('Done:');
    for(let key in list) {
        if(list[key] === 'Done') {
            console.log(key);
            c++;
        }
    }
    if(c === 0) {
        console.log('  -');
    }
}
console.log(showList()); */








/* function showList() {
    let a = 0;
    let b = 0;
    let c = 0;
    console.log('To Do:');
    for(let key in list) {
        if(list[key] === 'To Do') {
            console.log(key);
            a++;
        }
    }
    if(a === 0) {
        console.log('  -');
    }
    console.log('In Progress:');
    for(let key in list) {
        if(list[key] === 'In Progress') {
            console.log(key);
            b++;
        }
    }
    if(b === 0) {
        console.log('  -');
    }
    console.log('Done:');
    for(let key in list) {
        if(list[key] === 'Done') {
            console.log(key);
            c++;
        }
    }
    if(c === 0) {
        console.log('  -');
    }
}
console.log(showList());
*/






/* function showList() {
    let a = 0;
    let b = 0;
    let c = 0;
    console.log('To Do:');
    for(let key in list) {
        if(list[key] === 'To Do') {
            console.log(key);
            a++;
        }
    }
    if(a === 0) {
        console.log('  -');
    }
    console.log('In Progress:');
    for(let key in list) {
        if(list[key] === 'In Progress') {
            console.log(key);
            b++;
        }
    }
    if(b === 0) {
        console.log('  -');
    }
    console.log('Done:');
    for(let key in list) {
        if(list[key] === 'Done') {
            console.log(key);
            c++;
        }
    }
    if(c === 0) {
        console.log('  -');
    }
}
console.log(showList()); */


/* function showList() {
    let a = 0;
    let b = 0; 
    let c = 0;
    console.log('To Do:');
    for(let key in list) {
        if(list[key] === 'To Do') {
            console.log(key);
            a++;
        }
    }
    if(a === 0) {
        console.log('  -');
    }
    console.log('In Progress:');
    for(let key in list) {
        if(list[key] === 'In Progress') {
            console.log(key);
            b++;
        }
    }
    if(b === 0) {
        console.log('  -');
    }
    console.log('Done:');
    for(let key in list) {
        if(list[key] === 'Done') {
            console.log(key);
            c++;
        }
    }
    if(c === 0) {
        console.log('  -');
    }
}

console.log(showList());
 */




/* function showList() {
    let a = 0;
    let b = 0;
    let c = 0;
    console.log('To Do:');
    for(let key in list) {
        if(list[key] === 'To Do') {
            console.log(key);
            a++;
        }
    }
    if(a === 0) {
        console.log('  -');
    }
    console.log('In Progress:');
    for(let key in list) {
        if(list[key] === 'In Progress') {
            console.log(key);
            b++;
        }
    }
    if(b === 0) {
        console.log('  -');
    }
    console.log('Done:');
    for(let key in list) {
        if(list[key] === 'Done') {
            console.log(key);
            c++;
        }
    }
    if(c === 0) {
        console.log('  -');
    }
}
console.log(showList()); */




/* function showList() {
    let a = 0;
    let b = 0;
    let c = 0;
    console.log('To Do:');
    for(let key in list) {
        if(list[key] === 'To Do') {
            console.log(key);
            a++;
        }
    }
    if(a === 0) {
        console.log('  -');
    }
    console.log('Done:');
    for(let key in list) {
        if(list[key] === 'Done') {
            console.log(key);
            b++;
        }
    }
    if(b === 0) {
        console.log('  -');
    }
    console.log('In Progress:');
    for(let key in list) {
        if(list[key] === 'In Progress') {
            console.log(key);
            c++;
        }
    }
    if(c === 0) {
        console.log('  -');
    }
};
console.log(showList()); */





/* function showList() {
    let a = 0;
    let b = 0;
    let c = 0;
    console.log('To Do:');
    for(let key in list) {
        if(list[key] === 'To Do') {
            console.log(key);
            a++;
        }
    }
    if(a === 0) {
        console.log('  -');
    }
    console.log('In Progress:');
    for(let key in list) {
        if(list[key] === 'In Progress') {
            console.log(key);
            b++;
        }
    }
    if(b === 0) {
        console.log('  -');
    }
    console.log('Done:');
    for(let key in list) {
        if(list[key] === 'Done') {
            console.log(key);
            c++;
        }
    }
    if(c === 0) {
        console.log('  -');
    }
};
console.log(showList()); */



/* function showList() {
    let a = 0;
    let b = 0;
    let c = 0;
    console.log('To Do:');
    for(let key in list) {
        if(list[key] === 'To Do') {
            console.log(key);
            a++;
        }
    }
    if(a === 0) {
        console.log('  -');
    }
    console.log('In Progress:');
    for(let key in list) {
        if(list[key] === 'In Progress') {
            console.log(key);
            b++;
        }
    }
    if(b === 0) {
        console.log('  -');
    }
    console.log('Done:');
    for(let key in list) {
        if(list[key] === 'Done') {
            console.log(key);
            c++;
        }
    }
    if(c === 0) {
        console.log('  -');
    }
}
console.log(showList()); */


/* function showList() {
    let a = 0;
    let b = 0;
    let c = 0;
    console.log('To Do:');
    for(let key in list) {
    if(list[key] === 'To Do') {
        console.log(key);
        a++;
        }
    }
    if(a === 0) {
        console.log('  -');
    }
    console.log('In Progress:');
    for(let key in list) {

    
    if(list[key] === 'In Progress') {
        console.log(key);
        b++;
        }
    }
    if(b === 0) {
        console.log('  -');
    }
    console.log('Done:');
    for(let key in list) {
        if(list[key] === 'Done') {
            console.log(key);
            c++;
        }
    }
    if(c === 0) {
        console.log('  -');
    }
}
showList(); */


/* function getSum(a, b) {
    return a + b;
}
console.log(getSum(2, 3)); */

/* function getSum(a, b) {
    console.log(a + b);
}
getSum(2, 4); */

/* const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
};


function changeStatus(task, status) {
    list[task] = status;
}
changeStatus("write a post", "Done");


function addTask(task) {
    list[task] = 'To Do';
}
addTask('have a walk');

function deleteTask(task) {
    delete list[task];
}
deleteTask('have a walk'); */


/* function showList() {
    let a = 0;
    let b = 0;
    let c = 0;
    console.log('To Do:');
    for(let key in list) {
        if(list[key] === 'To Do') {
            console.log(key);
            a++;
        }
    }
    if(a === 0) {
        console.log('  -');
    }
    console.log('\nIn Progress:');
    for(let key in list) {
        if(list[key] === 'In Progress') {
            console.log(key);
            b++;
        }
    }
    if(b === 0) {
        console.log('  -');
    }
    console.log('\nDone:');
    for(let key in list) {
        if(list[key] === 'Done') {
            console.log(key);
            c++;
        }
    }
    if(c === 0) {
        console.log('  -');
    }
}
showList(); */

/* const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
}
function addTask(task) {
    list[task] = 'To Do';
}
addTask('read a book');
addTask('make a walk');

function changeStatus(task, status) {
    list[task] = status;
}
changeStatus("make a bed", 'In Progress');

function deleteTask(task) {
    delete list[task];
}
deleteTask('make a walk');

function showList() {
    let a = 0;
    let b = 0;
    let c = 0;
    console.log('To Do:');
    for(let key in list) {
        if(list[key] === 'To Do') {
            console.log(key);
            a++;
        }
    }
    if(a === 0) {
        console.log('  -');
    }
    console.log('In Progress:');
    for(let key in list) {
        if(list[key] === 'In Progress') {
            console.log(key);
            b++;
        }
    }
    if(b === 0) {
        console.log('  -');
    }
    console.log('Done:');
    for(let key in list) {
        if(list[key] === 'Done') {
            console.log(key);
            c++;
        }
    }
    if(c === 0) {
        console.log('  -');
    }
}
showList();
console.log(list); */




/*------------------------------------- 2 способ ----------------------------------------*/
/*------------------------------------- 2 способ ----------------------------------------*/
/*------------------------------------- 2 способ ----------------------------------------*/



/* function showList() {
    const listStatus = {
        'To Do': '',
        'In Progress': '',
        'Done': '',
    }
    let result = '';
    for(let key in list) {
        listStatus[list[key]] += key + '\n';
    
    }
    for(let item in listStatus) {
        result += `${item}:\n${listStatus[item] || '-\n'}\n`
    }

    console.log(listStatus);
    return result;
}
console.log(showList());

listStatus['To Do'] = 'write a post';
listStatus['To Do'] = 'make a bed' */

/* const obj = {
    a: '1',
    b: '2',
    d: '3',
}
const obj2 = {
    a: 5,
    b: 7,
    c: 8,
}
for(let key in obj2) {
    if(obj[key]) {
        obj[key] = obj2[key];
    }
}
console.log(obj);

if(' ') {
    alert(6);
} */




/* function showList() {
    const listStatus = {
        'To Do': '',
        'In Progress': '',
        'Done': '',
    }
    let result = '';
    for(let key in list) {
        listStatus[list[key]] += key + '\n';
    }
    for(let pos in listStatus) {
        result += `${pos}\n${listStatus[pos] || ' -'}\n`
    }
    console.log(listStatus);
    console.log(result);
}
showList(); */


/* function showList() {
    const listStatus = {
        'To Do': '',
        'In Progress': '',
        'Done': '',
    }
    let result = '';
    for(let key in list) {
        listStatus[list[key]] += `${key}\n`
    }
    for(let item in listStatus) {
        result +=`${item}:\n${listStatus[item] || ' -\n'}\n`
    }
    console.log(listStatus); 
    console.log(result);
}
showList(); */




/* function showList() {
    const listStatus = {
        'To Do': '',
        'In Progress': '',
        'Done': '',
    };
    let result = '';
    for(let key in list) {
        listStatus[list[key]] += `${key}\n` 
    }
    for(let item in listStatus) {
        result += `${item}:\n${listStatus[item] || ' -\n'}\n`
    }
    console.log(listStatus);
    console.log(result);
}
showList(); */



/* function showList() {
    const listStatus = {
    'To Do': '',
    'In Progress': '',
    'Done': '', 
    };
    let result = '';
    for(let key in list) {
        listStatus[list[key]] += `${key}\n`
    }
    for(let item in listStatus) {
        result += `${item}:\n${listStatus[item] || ' -\n'}\n`
    }
    console.log(listStatus);
    console.log(result);
}
showList(); */


/* function showList() {
    const listStatus = {
    'To Do': '',
    'In Progress': '',
    'Done': '',
    }
    let result = '';
    for(let key in list) {
        listStatus[list[key]] += `${key}\n`;
    }
    for(let item in listStatus) {
        result += `${item}:\n${listStatus[item] || ' -\n'}\n`;
    }
    console.log(listStatus);
    console.log(result);
}
showList(); */


/* function showList() {
    let listStatus = {
        'To Do': '',
        'In Progress': '',
        'Done': '',
    };
    let result = '';
    for(let key in list) {
        listStatus[list[key]] +=`${key}\n`;
    }
    for(let item in listStatus) {
        result += `${item}:\n${listStatus[item] || ' -\n'}\n`;
    }
    console.log(listStatus);
    console.log(result);
}
showList(); */





/* function showList() {
    let listStatus = {
        'To Do': '',
        'In Progress': '',
        'Done': '',
    };
    let result = '';
    for(let key in list) {
        listStatus[list[key]] += `${key}\n`;
    }
    for(let item in listStatus) {
        result += `${item}:\n${listStatus[item] || ' -\n'}\n`;
    }
    console.log(listStatus);
    console.log(result);
}
showList(); */




/* function showList() {
    let listStatus = {
        'To Do': '',
        'In Progress': '',
        Done: '',
    };
    let result = '';
    for(let key in list) {
        listStatus[list[key]] += `${key}\n`;
    }
    for(let item in listStatus) {
        result += `${item}:\n${listStatus[item] || '  -\n'}\n`
    }
    console.log(listStatus);
    console.log(result);
};

console.log(showList()); */


/* function showList() {
    let listStatus = {
        Done: '',
        'To Do': '',
        'In Progress': '',
    }
    let result = '';
    for(let key in list) {
        listStatus[list[key]] = listStatus[list[key]] + `${key}\n`;
    }
    for(let item in listStatus) {
        result += `${item}:\n${listStatus[item] || '  -\n'}\n`;
    }
    console.log(listStatus);
    console.log(result);
}
console.log(showList()); */


/* function showList() {
    let listStatus = {
        'To Do': '',
        'In Progress': '',
        'Done': '',
    }
    let result = '';
    for(let key in list) {
        listStatus[list[key]] += `${key}\n`
    }
    for(let item in listStatus) {
        result += `${item}:\n${listStatus[item] || '  -\n'}\n`
    }
    console.log(listStatus);
    console.log(result);
}
console.log(showList()); */


/* function showList() {
    let listStatus = {
        'To Do': '',
        'In Progress': '',
        'Done': '',
    }
    let result = '';
    for(let key in list) {
        listStatus[list[key]] += `${key}\n`
    }
    for(let item in listStatus) {
        // result += `${item}:\n${listStatus[item] || '  -\n'}\n`
        result += item + ':' +'\n' + (listStatus[item] || '  -\n')  + '\n';
    }
    console.log(listStatus);
    console.log(result);
}
console.log(showList()); */


/* const car = {
    fiat: '',
    bmw: '',
}

const color = {
    green: 'bmw',
    orange: 'porshe',
    white: 'fiat',
}
for(let key in color) {
    if(color[key] in car) {
        car[color[key]] = key;
    }
}

console.log(car); */


/* function showList() {
    let listStatus = {
        'To Do': '',
        'In Progress': '',
        'Done': '',
    }
    let result = '';
    for(let key in list) {
        listStatus[list[key]] += `${key}\n`;
    }
    for(let item in listStatus) {
        result += `${item}:\n${listStatus[item] || '  -\n'}\n`;
    }
    console.log(listStatus);
    console.log(result);
}
console.log(showList()); */


/* function showList() {
    let listStatus = {
        'To Do': '',
        'In Progress': '',
        'Done': '',
    }
    let result = '';
    for(let key in list) {
        listStatus[list[key]] += `${key}\n`
    }
    for(let item in listStatus) {
        result += `${item}:\n${listStatus[item] || '  -\n'}\n`
    }
    console.log(listStatus);
    console.log(result);
}
showList(); */

/* function showList() {
    let listStatus = {
        'To Do': '',
        'In Progress': '',
        'Done': '',
    }
    let result = '';
    for(let key in list) {
        listStatus[list[key]] += `${key}\n`;
    }
    for(let item in listStatus) {
        result += `${item}:\n${listStatus[item] || '  -\n'}\n` 
    }
    console.log(listStatus);
    console.log(result);
}
showList(); */


/* function showList() {
    let listStatus = {
        'To Do': '',
        'In Progress': '',
        'Done': '',
    }
    let result = '';
    for(let key in list) {
        listStatus[list[key]] += `${key}\n`
    }
    for(let item in listStatus) {
        result += `${item}:\n${listStatus[item] || '  -\n'}\n`
    }   
    console.log(listStatus);
    console.log(result);
}
showList(); */



/* function showList() {
    let listStatus = {
        'To Do': '',
        'In Progress': '',
        'Done': '',
    }
    let result = '';
    for(let key in list) {
        listStatus[list[key]] += `${key}\n`;
    }
    for(let item in listStatus) {
        result += `${item}:\n${listStatus[item] || '  -\n'}\n`
    }
    console.log(listStatus);
    console.log(result);
}
showList(); */

/* function showList() {
    let listStatus = {
        'To Do': '',
        'In Progress': '',
        'Done': '',
    }
    let result = '';
    for(let key in list) {
        listStatus[list[key]] += `${key}\n`;
    }
    for(let item in listStatus) {
        result += `${item}:\n${listStatus[item] || '  -\n'}\n`;
    }
    console.log(listStatus);
    console.log(result);
}
showList();
 */










