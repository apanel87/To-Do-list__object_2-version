const list = {
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
changeStatus("create a new practice task", 'Done');

function deleteTask(task) {
    delete list[task];
}
deleteTask('make a walk');

function showList() {
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
console.log(list);