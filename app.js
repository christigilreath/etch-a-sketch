const container = document.getElementById('container');
const promptButton = document.createElement('button');
promptButton.setAttribute('id','prompt-button');
promptButton.innerHTML = "Set Grid Area";
container.appendChild(promptButton);
const gameArea = document.createElement('div');
gameArea.setAttribute('id', 'game-area');
container.appendChild(gameArea);
const sketchArea = document.createElement('div');
sketchArea.setAttribute('id', 'sketch-area');

gameArea.appendChild(sketchArea);

let gridRowDiv;

let gridSize;
let gridItem;
let boxes;







//create a prompt function for user input for the grid size
promptButton.addEventListener('click', promptClick);

function promptClick() {
   gridSize = parseInt(prompt("Enter Grid Size"));
   createGrid();
   
    
}


// creat a function that makes a grid

function createGrid() {
    for (let i = 1; i <= gridSize; i++) {
    gridRowDiv = document.createElement('div');
    gridRowDiv.setAttribute('id', 'grid-row-div');
    sketchArea.appendChild(gridRowDiv);
        for (let j=1; j <= gridSize; j++) {
        gridItem = document.createElement('div');
        gridItem.setAttribute('id', 'grid-item');
        gridItem.setAttribute('class', "pink")
        gridRowDiv.appendChild(gridItem);
        }
    }
    boxes = document.querySelectorAll(".pink");
    console.log(boxes);
    boxes.forEach(function(box, index) {
        box.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "white";
        });})
       
       
    }

// create a function that listens for a hover event and changes the color of the gridItem
//let boxes = document.querySelectorAll(".pink");




//let gridItems = document.querySelectorAll("#grid-item");
//document.addEventListener('click', changeGridItemBkgrd);

//function changeGridItemBkgrd () {
  //  console.log(gridItems)
    //for (let i = 0; i < gridItems.length; i++) {
      //  gridItems[i].style.backgroundColor = 'yellow'
    //}
//}    
