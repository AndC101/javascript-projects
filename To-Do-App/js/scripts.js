// Variables
let leftList = document.getElementById('left-list');
let middleList = document.getElementById('middle-list');
let rightList = document.getElementById('right-list');

let threeColumn = document.querySelector('.responsive-three-column-grid');

// array containing all the tasks
let tasks = [];

// Event delegation for the add buttons

threeColumn.addEventListener('click', function(e){
    const target = e.target;
    // if the user presses ANY of the buttons
    if(target.matches('button') ){

        //if the user presses the left add btn
        if(target.getAttribute('id') == 'left-add-btn') {
            
            todoFunctionality('left-list', 'left-text-area')
            console.log("Todo Func exited from left");
        } else if (target.getAttribute('id') == 'middle-add-btn') {
            todoFunctionality('middle-list', 'middle-text-area')
            console.log("Todo Func exited from mid");

        } else if (target.getAttribute('id') == 'right-add-btn'){
            todoFunctionality('right-list', 'right-text-area')
            console.log("Todo Func exited from right");

        } else {
        }
    }
});




function todoFunctionality( listId, textArea ) {
    // every new task requires a div with class flex-container
    let list = document.getElementById(listId);
    
    // within there need to be:
    // - x button
    // - li item 
    let taskContainer = document.createElement('div');
    let newTask = document.createElement('li');
    let newDeleteBtn = document.createElement('button');

    // get the textbox input and set inner text
    let taskText = document.getElementById(textArea).value; 
    newTask.innerHTML = taskText;
    newDeleteBtn.innerHTML = "&rarr;";
    

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
        console.log("-> is pressed from ", listId);
        // if this is moved from left or mid list, move it to the next list.
        if(listId == "left-list" && leftList.contains(taskContainer)) {
            // move it to the middle
            leftList.removeChild(taskContainer);
            middleList.appendChild(taskContainer);
            listId = 'middle-list';
            console.log("left-list");
        } else if (listId == "middle-list" && middleList.contains(taskContainer)){
            // move it to the right list
            middleList.removeChild(taskContainer);
            rightList.appendChild(taskContainer);
            newDeleteBtn.innerHTML = "&#10003;";
            listId = 'right-list';
            console.log("mid-list");

        } else if (listId == "right-list" && rightList.contains(taskContainer)){
            // delete the item from the list
            rightList.removeChild(taskContainer);
            console.log("right-list");
        }
    });
}