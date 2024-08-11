// Variables

let leftList = document.getElementById('left-list');
let middleList = document.getElementById('middle-list');
let rightList = document.getElementById('right-list');
let task = leftList.querySelectorAll('.task');
let threeColumn = document.querySelector('.responsive-three-column-grid');


let deleteBtns = document.querySelectorAll('.delete');

// Event delegation for the add buttons

threeColumn.addEventListener('click', function(e){
    console.log(e.target.getAttribute('id'))
    const target = e.target;
    console.log(e);
    if(target.matches('button') ){
        // if the user presses any of the buttons, then add a the new task to the ul

        //if the user presses the left add btn
        if(e.target.getAttribute('id') == 'left-add-btn') {
            
            // every new task requires a div with class flex-container
                // within there need to be:
                // - x button
                // - li item  
            let taskContainer = document.createElement('div');
            let newTask = document.createElement('li');
            let newDeleteBtn = document.createElement('button');

            // get the textbox input and set inner text
            let taskText = document.getElementById('left-text-area').value; 
            newTask.innerHTML = taskText;
            newDeleteBtn.innerHTML = "&times;";

            // set the attributes for the elems
            taskContainer.setAttribute('class', 'flex-container');
            newDeleteBtn.setAttribute('class', 'delete');

            // append the li and div to the container
            taskContainer.append(newDeleteBtn);
            taskContainer.append(newTask);

            // append the container to the unordered list
            leftList.append(taskContainer);

            //wipe the existing text because it is "entered" now
            document.getElementById('left-text-area').value = ""; 


        } else if (e.target.getAttribute('id') == 'middle-add-btn') {
            let newTask = document.createElement('li');

            // get the textbox input
            let taskText = document.getElementById('middle-text-area').value; 
            newTask.innerHTML = taskText;

            // append the task and delete the text
            middleList.append(newTask);
            document.getElementById('middle-text-area').value = ""; 

        } else if (e.target.getAttribute('id') == 'right-add-btn'){
            let newTask = document.createElement('li');

            // get the textbox input
            let taskText = document.getElementById('right-text-area').value; 
            newTask.innerHTML = taskText;

            // append the task and delete the text
            rightList.append(newTask);
            document.getElementById('right-text-area').value = ""; 


        }
    }
});


// Handle deleting of tasks

deleteBtns
