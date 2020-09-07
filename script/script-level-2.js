const mainContent = document.querySelector('.main-content');
mainContent.classList.add('main-content-level-2');
let displayScore = document.getElementById('score');
let score = 2;
displayScore.innerHTML = score;
//push toutes les divs dans cet array pour pouvoir retrouver chaque div avec un index.
//const arrayOfDiv = []; 
// plus besoin de cet array puisque je récupere toutes les div dans une nodelist


const walker = {
    x: 8,
    y: 0
  };

const win = {
    x: 1,
    y: 11
};

const scoreToWin = 3;



  const grid = [
    ['0','0','0','0','0','0','0','0','0','0','0','0'],
    ['4','4','0','0','0','0','0','0','0','0','4','4'],
    ['0','4','0','1','4','0','0','0','0','0','4','0'],
    ['0','4','0','4','4','4','4','4','4','4','4','0'],
    ['0','4','0','0','0','0','4','0','0','0','0','0'],
    ['0','4','0','0','0','0','4','4','4','4','4','0'],
    ['0','4','4','4','3','4','4','0','0','0','0','0'],
    ['0','0','0','0','0','0','4','0','0','4','4','0'],
    ['4','4','4','4','4','4','4','0','0','4','4','0'],
    ['0','0','0','0','0','0','0','0','0','0','0','0']
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





window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') { 
        console.log('right press');
        if (grid[walker.x][walker.y] === grid[win.x][win.y] && score === scoreToWin) {
            alert("you win, you can go to the next level")
        }
        if (grid[walker.x][walker.y+1] === '4'||grid[walker.x][walker.y+1] === '1') {
        grid[walker.x][walker.y] = '4';
        walker.y++;
        grid[walker.x][walker.y] = "5";
        } 
    } 

    if (event.key === 'ArrowLeft') { 
        console.log('left press');
        if (grid[walker.x][walker.y] === grid[1][0]) {
            grid[walker.x][walker.y] = '4';
            walker.x = 8;
            walker.y = 0;
            grid[walker.x][walker.y] = '5';
        }
        if (grid[walker.x][walker.y-1] === '4') {
        grid[walker.x][walker.y] = '4';
        walker.y--;
        grid[walker.x][walker.y] = "5";
        } else if (grid[walker.x][walker.y-1] === '3') {
            grid[walker.x][walker.y] = '4';
            walker.y--;
            grid[walker.x][walker.y] = "5";
            grid[6][10] = '4';
            nodeListOfDivs[82].classList.add('chemin'); 
            nodeListOfDivs[82].classList.remove('wall'); 
            nodeListOfDivs[81].classList.add('chemin'); 
            nodeListOfDivs[81].classList.remove('wall'); 
        }
        if (grid[walker.x][walker.y-1] === '1') {
            grid[walker.x][walker.y] = '4';
            walker.y--;
            grid[walker.x][walker.y] = "5";
            score = score + 1;
            displayScore.innerHTML = score;
        }


    } 

    if (event.key === 'ArrowUp') { 
        console.log('up press');
        if (grid[walker.x-1][walker.y] === '4') {
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
        if (grid[walker.x+1][walker.y] === '4'||grid[walker.x+1][walker.y] === '1' ) {
        grid[walker.x][walker.y] = '4';
        walker.x++;
        grid[walker.x][walker.y] = "5";
        }
    } 

    for (let i = 0; i<grid.length; i++) {
        for (let j = 0; j<grid[i].length; j++) {
        if (grid[i][j] === '5') {
            nodeListOfDivs[(11*i)+i+j].classList.add('walker');
        } else if (grid[i][j] === '4') {
            nodeListOfDivs[(11*i)+i+j].classList.remove('walker');
            nodeListOfDivs[(11*i)+i+j].classList.remove('life');
        } else if (grid[i][j] === '3') {
          //  nodeListOfDivs[(11*i)+i+j].classList.remove('walker');
           // nodeListOfDivs[(11*i)+i+j].classList.add('open-wall'); 
        }
    }
}
}
);

class Wolf {
    constructor(infos) {
      this.name = infos.name;
      this.wolfX = infos.wolfX;
      this.wolfY = infos.wolfY;
      this.index = infos.index;
      this.speed = infos.speed;
    }
  }

const merlin = new Wolf({
    name: "merlin",
    wolfX: 8,
    wolfY: 10,
    index: 106,
    speed: 140
}); // creates a new instance of Wolf


const perceval = new Wolf({
    name: "perceval",
    wolfX: 8,
    wolfY: 9,
    index: 105,
    speed: 100
}); // creates an other instance of Wolf

let wolvesArr = [];
wolvesArr.push(merlin, perceval)

console.log(wolvesArr)


//create the merlin the wolf in the DOM

wolvesArr.forEach(eachWolf => {
    grid[eachWolf.wolfX][eachWolf.wolfY] = "2";
    nodeListOfDivs[eachWolf.index].classList.remove('chemin')
    nodeListOfDivs[eachWolf.index].classList.add(eachWolf.name, 'wolf')
    })


wolvesArr.forEach(eachWolf => moveWolves(eachWolf))


// move wolf function----------------- SET INTERVAL --------------------------
function moveWolves(wolf){
    const directions = [-1, +1, -12, +12];
    let direction = directions[Math.floor(Math.random() * directions.length)];
    console.log(direction)
    wolf.timerId = setInterval(function() {
    //if in the next square merlin is going to go to does not have a wall
    if (!nodeListOfDivs[wolf.index + direction].classList.contains('wall')) {
         //remove the ghosts classes
         nodeListOfDivs[wolf.index].classList.remove(wolf.name)
         nodeListOfDivs[wolf.index].classList.remove('wolf')
         nodeListOfDivs[wolf.index].classList.add('chemin')
        //move into that space
        wolf.index += direction;
        nodeListOfDivs[wolf.index].classList.add(wolf.name, 'wolf')
        nodeListOfDivs[wolf.index].classList.remove('chemin')

    } else {direction = directions[Math.floor(Math.random() * directions.length)]};
}, wolf.speed)

    //else find a new random direction ot go in
}


//moveWolves(merlin)


// request Animation Frame
/*
function moveWolves() {
    const directions = [-1, +1, -12, +12];
    let direction = directions[Math.floor(Math.random() * directions.length)];
    console.log(direction)
    //if in the next square merlin is going to go to does not have a wall
    if (!nodeListOfDivs[merlin.index + direction].classList.contains('wall')) {
         //remove the ghosts classes
         nodeListOfDivs[merlin.index].classList.remove(merlin.name)
         nodeListOfDivs[merlin.index].classList.remove('wolf')
         nodeListOfDivs[merlin.index].classList.add('chemin')
        //move into that space
        merlin.index += direction;
        nodeListOfDivs[merlin.index].classList.add(merlin.name, 'wolf')
        nodeListOfDivs[merlin.index].classList.remove('chemin')

    } else {direction = directions[Math.floor(Math.random() * directions.length)]};

      requestAnimationFrame(moveWolves);
    }
    moveWolves();
    */
