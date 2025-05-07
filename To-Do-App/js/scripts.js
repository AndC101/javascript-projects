// Variables
let leftList = document.getElementById('left-list');
let middleList = document.getElementById('middle-list');
let rightList = document.getElementById('right-list');

let threeColumn = document.querySelector('.responsive-three-column-grid');

// array containing all the tasks
let tasks = [];

// Event delegation for the add buttons

let leftTextArea = document.getElementById('left-text-area');
let midTextArea = document.getElementById('middle-text-area');
let rightTextArea = document.getElementById('right-text-area');

leftTextArea.addEventListener('keydown', function(e){
    if(e.key=='Enter' && !e.shiftKey){
        todoFunctionality('left-list', 'left-text-area')
    }
})
midTextArea.addEventListener('keydown', function(e){
    if(e.key=='Enter' && !e.shiftKey){
        todoFunctionality('middle-list', 'middle-text-area')
    }
})
rightTextArea.addEventListener('keydown', function(e){
    if(e.key=='Enter' && !e.shiftKey){
        todoFunctionality('right-list', 'right-text-area')
    }
})


threeColumn.addEventListener('click', function(e){
    const target = e.target;
    // if the user presses ANY of the buttons
    if(target.matches('button') ){

        //if the user presses the a specific add btn, call a function to add a task to the corresponding list
        
        if(target.getAttribute('id') == 'left-add-btn') {
            todoFunctionality('left-list', 'left-text-area')

        } else if (target.getAttribute('id') == 'middle-add-btn') {
            todoFunctionality('middle-list', 'middle-text-area')

        } else if (target.getAttribute('id') == 'right-add-btn'){
            todoFunctionality('right-list', 'right-text-area')

        // } else {
        }
    }
});

function todoFunctionality( listId, textArea ) {
    // every new task requires a div with class flex-container
    let list = document.getElementById(listId);
    let taskText = document.getElementById(textArea); 

    if(taskText.value.trim() == "") {
        // taskText.placeholder='Please enter some text!';
        return;
    }

    // within there need to be:
    // - x button
    // - li item 
    let taskContainer = document.createElement('div');
    let newTask = document.createElement('li');
    let newDeleteBtn = document.createElement('button');

    // get the textbox input and set inner text
    newTask.innerHTML = taskText.value;

    if (listId == "right-list") {
        newDeleteBtn.innerHTML = "&#10003;"; // check mark
    } else {
        newDeleteBtn.innerHTML = "&rarr;"; // right arrow
    }
    
    // set the attributes for the elems
    taskContainer.setAttribute('class', 'flex-container');
    newDeleteBtn.setAttribute('class', 'delete');

    // append the li and div to the container
    taskContainer.append(newDeleteBtn);
    taskContainer.append(newTask);

    // append the container to the unordered list and the array to keep track
    list.append(taskContainer);
    tasks.push(taskContainer);

    //wipe the existing text because it is "entered" now
    document.getElementById(textArea).value = "";
    taskContainer.addEventListener('click', function() {
        // if this is moved from left or mid list, move it to the next list.
        if(listId == "left-list" && leftList.contains(taskContainer)) {
            // move it to the middle
            leftList.removeChild(taskContainer);
            middleList.appendChild(taskContainer);
            listId = 'middle-list';
        } else if (listId == "middle-list" && middleList.contains(taskContainer)){
            // move it to the right list
            middleList.removeChild(taskContainer);
            rightList.appendChild(taskContainer);
            newDeleteBtn.innerHTML = "&#10003;";
            listId = 'right-list';

        } else if (listId == "right-list" && rightList.contains(taskContainer)){
            // delete the item from the list
            rightList.removeChild(taskContainer);
        }
    });
}