/*this function gets the task frominput*/
function get_todos() {
    /*this creates an array of tasks that are inputed*/
    var todos = new Array;
    /*this pulls the task that was saved in the web browser*/
    var todos_str = localStorage.getItem('todo');
    /*if the input is not null then JSON.parse will
    communicate with the web browser to make task*/
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
/*this function adds the inputed task the get todos*/
function add() {
    /*this adds new inputed task and creates a variable*/
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /*this adds a new task at end of array*/
    todos.push(task);
    /*this converts tghe task input to a json string*/
    localStorage.setItem('todo', JSON.stringify(todos))
    document.getElementById("task").value = "";
    show();

    return false;

}

/*keeps tasks permentatly displayed*/
function show() {
    /*sets task was retrieved as a variable*/
    var todos = get_todos();
    /*sets up each task as unordered list*/
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';

    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;

}
document.getElementById('add').addEventListener('click', add);
show();