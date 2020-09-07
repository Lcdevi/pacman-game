const mainContent = document.querySelector('.main-content');
mainContent.classList.add('main-content-level-1');
let displayScore = document.getElementById('score');
let score = 1;
displayScore.innerHTML = score;
//push toutes les divs dans cet array pour pouvoir retrouver chaque div avec un index.
//const arrayOfDiv = []; 
// plus besoin de cet array puisque je récupere toutes les div dans une nodelist


const walker = {
    x: 2,
    y: 0,
  };

const grid = [
    ['0','0','0','0','0','0','0','0','0','0'],
    ['0','0','0','0','1','0','0','0','0','0'],
    ['4','4','4','4','4','4','3','4','4','0'],
    ['0','0','0','0','0','0','0','0','0','0']
];

grid[walker.x][walker.y] = "5";


function createGrid() {
for (let i = 0; i<grid.length; i++) {
    for (let j = 0; j<grid[i].length; j++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add('div')
    mainContent.appendChild(newDiv);
  //  arrayOfDiv.push(newDiv); ---> plus besoin grace a la nodelist
  if (grid[i][j] === '0') {
    newDiv.classList.add('wall')
} else if (grid[i][j] === '4') {
    newDiv.classList.add('chemin')
} else if (grid[i][j] === '1') {
    newDiv.classList.add('life')
} else if (grid[i][j] === '2') {
    newDiv.classList.add('wolf')
} else if (grid[i][j] === '3') {
    newDiv.classList.add('open-wall')
} else if (grid[i][j] === '5') {
    newDiv.classList.add('walker')   
}
    }
  }
}

createGrid();

const nodeListOfDivs = mainContent.querySelectorAll('.div')
console.log(nodeListOfDivs)

/*
function createWalker(walkerPositionX, walkerPositionY) {
  //  document.createElement("div").classList.add('div');
    grid[walkerPositionX][walkerPositionY] = document.createElement("div").classList.add('div');
    mainContent.appendChild(document.createElement("div"));
    document.createElement("div").classList.add('walker');
}
createWalker(2,0)
*/

function getCoordinates(x,y) {
    let hikerCoordinate = (9*x)+x+y;
    return hikerCoordinate;
}

getCoordinates(2,1);

window.addEventListener('keydown', (event) => {
    //let walkerClass = document.querySelector('.walker');
   // arrayOfDiv[20].classList.remove('walker')
    if (event.key === 'ArrowRight') { 
        console.log('right press');
        if(grid[walker.x][walker.y] === grid[2][9] && score === 2) {
            alert("you win")
        }
        if(grid[walker.x][walker.y+1] === '4'||grid[walker.x][walker.y+1] === '1') {
        grid[walker.x][walker.y] = '4';
        walker.y++;
        grid[walker.x][walker.y] = "5";
        } else if(grid[walker.x][walker.y+1] === '3') {
            grid[walker.x][walker.y] = '4';
            walker.y++;
            grid[walker.x][walker.y] = "5";
            grid[2][9] = '4';
            nodeListOfDivs[29].classList.add('chemin'); 
        }

       
    } 
    if (event.key === 'ArrowLeft') { 
        console.log('left press');
        if(grid[walker.x][walker.y-1] === '4'||grid[walker.x][walker.y-1] === '1'||grid[walker.x][walker.y-1] === '3') {
        grid[walker.x][walker.y] = '4';
        walker.y--;
        grid[walker.x][walker.y] = "5";
        }

    } 
    if (event.key === 'ArrowUp') { 
        console.log('up press');
        if(grid[walker.x-1][walker.y] === '4') {
            grid[walker.x][walker.y] = '4';
            walker.x--;
            grid[walker.x][walker.y] = "5";
        } 
        if (grid[walker.x-1][walker.y] === '1') {
            grid[walker.x][walker.y] = '4';
            walker.x--;
            grid[walker.x][walker.y] = "5";
            score = score + 1;
            displayScore.innerHTML = score;
        }
    } 
    if (event.key === 'ArrowDown') { 
        console.log('down press');
        if(grid[walker.x+1][walker.y] === '4'||grid[walker.x+1][walker.y] === '1' ) {
        grid[walker.x][walker.y] = '4';
        walker.x++;
        grid[walker.x][walker.y] = "5";
        }
    } 

    for (let i = 0; i<grid.length; i++) {
        for (let j = 0; j<grid[i].length; j++) {
        if (grid[i][j] === '5') {
            nodeListOfDivs[(9*i)+i+j].classList.add('walker');
        } else if (grid[i][j] === '4') {
            nodeListOfDivs[(9*i)+i+j].classList.remove('walker');
            nodeListOfDivs[(9*i)+i+j].classList.remove('life'); 
        } else if (grid[i][j] === '3') {
            nodeListOfDivs[(9*i)+i+j].classList.remove('walker');
            nodeListOfDivs[(9*i)+i+j].classList.add('open-wall'); 
        }
    }
}
}
);

/*
function move(walker) {
    walker = {
        x: 2,
        y: 0,
      };
    grid[walker.x][walker.y] = '4';
  
    if (event.key === 'ArrowRight') { 
      walker.y++;
      
    } else if (event.key === 'ArrowLeft') {
        walker.y--;
        console.log('left press')
    }
//let newPosition = { x: walker.x, y: walker.y}

grid[walker.y][walker.x] = "5";
}
*/

