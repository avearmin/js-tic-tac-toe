class GameAI {

  constructor(grid, elementIds) {
    this.grid = grid;
    this.ids = elementIds;
  }

  makeFirstMove() {
    let possibleMoves = [
      this.grid.cell1, 
      this.grid.cell3, 
      this.grid.cell7, 
      this.grid.cell9
    ]
    let randomInt = this.getRandomInt(4);
    if (randomInt === 0) {
      this.grid.decrementCell1();
    }
    if (randomInt === 1) {
      this.grid.decrementCell3();
    } 
    if (randomInt === 2) {
      this.grid.decrementCell7();
    } 
    if (randomInt === 3) {
      this.grid.decrementCell9();
    } 
    possibleMoves[randomInt].id.textContent = "O";
  }

  makeNextMove(cellId) {
    if (this.grid.isPlayer2AlmostWinner()) {
      this.makeWinningMove();
    } 
    else if (this.grid.isPlayer1AlmostWinner()) {
      this.blockWinningMove();
    }
    else if (cellId == this.grid.cell5.id) {
      this.makeRandomMove();
    }
    else {
      this.makeCounterMove(cellId);
    }
  }
    
  makeWinningMove() {
    if (this.grid.row1 === -2) {
      this.completeRow1();
    }
    else if (this.grid.row2 === -2) {
      this.completeRow2();
    }
    else if (this.grid.row3 === -2) {
      this.completeRow3();
    }
    else if (this.grid.col1 === -2) {
      this.completeCol1();
    }
    else if (this.grid.col2 === -2) {
      this.completeCol2();
    }
    else if (this.grid.col3 === -2) {
      this.completeCol3();
    }
    else if (this.grid.lDia === -2) {
      this.completeLDia();
    }
    else if (this.grid.rDia === -2) {
      this.completeRDia();
    }
  }

  blockWinningMove() {
    if (this.grid.row1 === 2) {
      this.completeRow1();
    }
    else if (this.grid.row2 === 2) {
      this.completeRow2();
    }
    else if (this.grid.row3 === 2) {
      this.completeRow3();
    }
    else if (this.grid.col1 === 2) {
      this.completeCol1();
    }
    else if (this.grid.col2 === 2) {
      this.completeCol2();
    }
    else if (this.grid.col3 === 2) {
      this.completeCol3();
    }
    else if (this.grid.lDia === 2) {
      this.completeLDia();
    }
    else if (this.grid.rDia === 2) {
      this.completeRDia();
    }
  }

  completeRow1() {
    if (!this.grid.cell1.hasMove) {
      this.grid.cell1.id.textContent = "O";
      this.grid.decrementCell1();
    }
     if (!this.grid.cell2.hasMove) {
       this.grid.cell2.id.textContent = "O";
       this.grid.decrementCell2();
    }
     if (!this.grid.cell3.hasMove) {
       this.grid.cell3.id.textContent = "O";
       this.grid.decrementCell3();
    }
  }
  
  completeRow2() {
    if (!this.grid.cell4.hasMove) {
      this.grid.cell4.id.textContent = "O";
      this.grid.decrementCell4();
     }
     if (!this.grid.cell5.hasMove) {
       this.grid.cell5.id.textContent = "O";
       this.grid.decrementCell5();
     }
     if (!this.grid.cell6.hasMove) {
       this.grid.cell6.id.textContent = "O";
       this.grid.decrementCell6();
     }
  }

  completeRow3() {
    if (!this.grid.cell7.hasMove) {
      this.grid.cell7.id.textContent = "O";
      this.grid.decrementCell7();
    }
    if (!this.grid.cell8.hasMove) {
       this.grid.cell8.id.textContent = "O";
       this.grid.decrementCell8();
    }
    if (!this.grid.cell9.hasMove) {
       this.grid.cell9.id.textContent = "O";
       this.grid.decrementCell9();
    }
  }

  completeCol1() {
    if (!this.grid.cell1.hasMove) {
      this.grid.cell1.id.textContent = "O";
      this.grid.decrementCell1();
    }
    if (!this.grid.cell4.hasMove) {
       this.grid.cell4.id.textContent = "O";
       this.grid.decrementCell4();
    }
    if (!this.grid.cell7.hasMove) {
       this.grid.cell7.id.textContent = "O";
       this.grid.decrementCell7();
    }
  }

  completeCol2() {
    if (!this.grid.cell2.hasMove) {
      this.grid.cell2.id.textContent = "O";
      this.grid.decrementCell2();
    }
    if (!this.grid.cell5.hasMove) {
       this.grid.cell5.id.textContent = "O";
       this.grid.decrementCell5();
    }
    if (!this.grid.cell8.hasMove) {
       this.grid.cell8.id.textContent = "O";
       this.grid.decrementCell8();
    }
  }

  completeCol3() {
    if (!this.grid.cell3.hasMove) {
      this.grid.cell3.id.textContent = "O";
      this.grid.decrementCell3();
    }
    if (!this.grid.cell6.hasMove) {
       this.grid.cell6.id.textContent = "O";
       this.grid.decrementCell6();
    }
    if (!this.grid.cell9.hasMove) {
       this.grid.cell9.id.textContent = "O";
       this.grid.decrementCell9();
    }
  }

  completeLDia() {
    if (!this.grid.cell1.hasMove) {
      this.grid.cell1.id.textContent = "O";
      this.grid.decrementCell1();
    }
    if (!this.grid.cell5.hasMove) {
       this.grid.cell5.id.textContent = "O";
       this.grid.decrementCell5();
    }
    if (!this.grid.cell9.hasMove) {
       this.grid.cell9.id.textContent = "O";
       this.grid.decrementCell9();
    }
  }

  completeRDia() {
    if (!this.grid.cell3.hasMove) {
      this.grid.cell3.id.textContent = "O";
      this.grid.decrementCell3();
    }
    if (!this.grid.cell5.hasMove) {
       this.grid.cell5.id.textContent = "O";
       this.grid.decrementCell5();
    }
    if (!this.grid.cell7.hasMove) {
       this.grid.cell7.id.textContent = "O";
       this.grid.decrementCell7();
    }
  }

  makeRandomMove() {
    let possibleMoves = [
      this.grid.cell1,
      this.grid.cell2,
      this.grid.cell3,
      this.grid.cell4, 
      this.grid.cell6, 
      this.grid.cell7,
      this.grid.cell8,
      this.grid.cell9
    ]
    
    let randomInt = this.getRandomInt(8);
    
    if (randomInt === 0) {
      this.grid.decrementCell1();
    }
    else if (randomInt === 1) {
      this.grid.decrementCell2();
    } 
    if (randomInt === 2) {
      this.grid.decrementCell3();
    } 
    if (randomInt === 3) {
      this.grid.decrementCell4();
    }
    if (randomInt === 4) {
      this.grid.decrementCell6();
    }
    if (randomInt === 5) {
      this.grid.decrementCell7();
    }
    if (randomInt === 6) {
      this.grid.decrementCell8();
    }
    if (randomInt === 7) {
      this.grid.decrementCell9();
    }
    possibleMoves[randomInt].id.textContent = "O";
  }

  makeCounterMove(cellId) {
    if (cellId == this.grid.cell1.id) {
      this.counterCell1();
    }
    if (cellId == this.grid.cell2.id) {
      this.counterCell2();
    }
    if (cellId == this.grid.cell3.id) {
      this.counterCell3();
    }
    if (cellId == this.grid.cell4.id) {
      this.counterCell4();
    }
    if (cellId == this.grid.cell6.id) {
      this.counterCell6();
    }
    if (cellId == this.grid.cell7.id) {
      this.counterCell7();
    }
    if (cellId == this.grid.cell8.id) {
      this.counterCell8();
    }
    if (cellId == this.grid.cell9.id) {
      this.counterCell9();
    }
  }
  
  counterCell1() {
    if (!this.grid.cell9.hasMove) {
      this.grid.cell9.id.textContent = "O";
      this.grid.decrementCell9();
    }
    else if (!this.grid.cell7.hasMove) {
      this.grid.cell7.id.textContent = "O";
      this.grid.decrementCell7();
    }
    else if (!this.grid.cell3.hasMove) {
      this.grid.cell3.id.textContent = "O";
      this.grid.decrementCell3();
    }
  }

  counterCell2() {
    if (!this.grid.cell7.hasMove) {
      this.grid.cell7.id.textContent = "O";
      this.grid.decrementCell7();
    }
    else if (!this.grid.cell9.hasMove) {
      this.grid.cell9.id.textContent = "O";
      this.grid.decrementCell9();
    }
  }

  counterCell3() {
    if (!this.grid.cell7.hasMove) {
      this.grid.cell7.id.textContent = "O";
      this.grid.decrementCell7();
    }
    else if (!this.grid.cell9.hasMove) {
      this.grid.cell9.id.textContent = "O";
      this.grid.decrementCell9();
    }
    else if (!this.grid.cell1.hasMove) {
      this.grid.cell1.id.textContent = "O";
      this.grid.decrementCell1();
    }
  }

  counterCell4() {
    if (!this.grid.cell3.hasMove) {
      this.grid.cell3.id.textContent = "O";
      this.grid.decrementCell3();
     }
     else if (!this.grid.cell9.hasMove) {
      this.grid.cell9.id.textContent = "O";
      this.grid.decrementCell9();
     }
   }

  counterCell6() {
    if (!this.grid.cell1.hasMove) {
      this.grid.cell1.id.textContent = "O";
      this.grid.decrementCell1();
    }
    else if (!this.grid.cell7.hasMove) {
      this.grid.cell7.id.textContent = "O";
      this.grid.decrementCell7();
    }
  }

  counterCell7() {
    if (!this.grid.cell3.hasMove) {
      this.grid.cell3.id.textContent = "O";
      this.grid.decrementCell3();
    }
    else if (!this.grid.cell1.hasMove) {
      this.grid.cell1.id.textContent = "O";
      this.grid.decrementCell1();
    }
    else if (!this.grid.cell9.hasMove) {
      this.grid.cell9.id.textContent = "O";
      this.grid.decrementCell9();
    }
  }

  counterCell8() {
    if (!this.grid.cell1.hasMove) {
      this.grid.cell1.id.textContent = "O";
      this.grid.decrementCell1();
    }
    else if (!this.grid.cell3.hasMove) {
      this.grid.cell3.id.textContent = "O";
      this.grid.decrementCell3();
    }
  }

  counterCell9() {
    if (!this.grid.cell1.hasMove) {
      this.grid.cell1.id.textContent = "O";
      this.grid.decrementCell1();
    }
    else if (!this.grid.cell7.hasMove) {
      this.grid.cell7.id.textContent = "O";
      this.grid.decrementCell7();
    }
    else if (!this.grid.cell3.hasMove) {
      this.grid.cell3.id.textContent = "O";
      this.grid.decrementCell3();
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

}