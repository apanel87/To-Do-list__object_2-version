const list = {
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
   deleteTask('have a walk');

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
        console.log('\nIn Progress:') 
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
   showList();
   console.log(list);