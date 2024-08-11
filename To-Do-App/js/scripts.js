// Variables

let leftList = document.getElementById('left-list');
let middleList = document.getElementById('middle-list');
let rightList = document.getElementById('right-list');
let task = leftList.querySelectorAll('.task');
let threeColumn = document.querySelector('.responsive-three-column-grid');


// Event delegation for the add buttons

threeColumn.addEventListener('click', function(e){
    console.log(e.target.getAttribute('id'))
    const target = e.target;
    console.log(e);
    if(target.matches('button') ){
        // if the user presses any of the buttons, then add a the new task to the ul

        //if the user presses the left add btn
        if(e.target.getAttribute('id') == 'left-add-btn') {
            let newTask = document.createElement('li');

            // get the textbox input
            let taskText = document.getElementById('left-text-area').value; 
            newTask.innerHTML = taskText;

            leftList.append(newTask);

        } else if (e.target.getAttribute('id') == 'middle-add-btn') {
            let newTask = document.createElement('li');

            // get the textbox input
            let taskText = document.getElementById('middle-text-area').value; 
            newTask.innerHTML = taskText;

            middleList.append(newTask);

        } else {
            let newTask = document.createElement('li');

            // get the textbox input
            let taskText = document.getElementById('right-text-area').value; 
            newTask.innerHTML = taskText;

            rightList.append(newTask);

        }
 


    }

});

