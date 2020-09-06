const mainContent = document.querySelector('.main-content');
mainContent.classList.add('main-content-level-1');

//push toutes les divs dans cet array pour pouvoir retrouver chaque div avec un index.
const arrayOfDiv = [];


const walker = {
    x: 2,
    y: 0,
  };

const grid = [
    ['0','0','0','0','0','0','0','0','0','0'],
    ['0','0','0','0','1','0','0','0','0','0'],
    ['4','4','4','4','4','4','4','4','4','4'],
    ['0','0','0','0','0','0','0','0','0','0']
];

grid[walker.x][walker.y] = "5";


function createGrid() {
for (let i = 0; i<grid.length; i++) {
    for (let j = 0; j<grid[i].length; j++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add('div')
    mainContent.appendChild(newDiv);
    arrayOfDiv.push(newDiv);
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
  console.log(arrayOfDiv)
}

createGrid();

/*
function createWalker(walkerPositionX, walkerPositionY) {
  //  document.createElement("div").classList.add('div');
    grid[walkerPositionX][walkerPositionY] = document.createElement("div").classList.add('div');
    mainContent.appendChild(document.createElement("div"));
    document.createElement("div").classList.add('walker');
}
createWalker(2,0)
*/


window.addEventListener('keydown', (event) => {
    //let walkerClass = document.querySelector('.walker');
    arrayOfDiv[20].classList.remove('walker')
    if (event.key === 'ArrowRight') { 
        console.log('right press');
        grid[walker.x][walker.y] = '4';
        walker.y++;
        grid[walker.x][walker.y] = "5";
        for (let i = 0; i<grid.length; i++) {
            for (let j = 0; j<grid[i].length; j++) {
            if (grid[i][j] === '5') {
               arrayOfDiv[21].classList.add('walker');
            }
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
/*
function getCoordinates(x,y) {
    return grid[x][y]
}
*/
