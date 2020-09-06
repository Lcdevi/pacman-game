    const mainContent = document.getElementById('main-content');
    const grid = [
        ['0','0','0','0','0','0','0','0','0','0','0','0'],
        ['4','4','0','0','0','0','0','0','0','0','4','4'],
        ['0','4','0','1','4','0','0','0','0','0','4','0'],
        ['0','4','0','4','4','4','4','4','4','4','4','0'],
        ['0','3','0','4','4','0','4','0','0','0','0','0'],
        ['0','4','0','0','0','0','4','4','4','4','4','0'],
        ['0','4','4','4','4','4','4','0','0','0','0','0'],
        ['0','0','0','0','0','0','4','0','0','4','4','0'],
        ['4','4','4','4','4','4','4','0','0','4','2','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0']
    ]
;



function createGrid () {
    for (let i = 0; i<grid.length; i++) {
        for (let j = 0; j<grid[i].length; j++) {
      let newDiv = document.createElement("div");
      newDiv.classList.add('div')
      mainContent.appendChild(newDiv);
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
    }
        }
      }

    }

    createGrid();