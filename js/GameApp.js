class GameApp {

  constructor() {
    this.grid = new Grid();
    this.ids = new ElementIds();
    this.ai = new GameAI(this.grid, this.ids);
  }

  start() {
    this.initializeResetBtn();
    this.initializeCells();
    this.ai.makeFirstMove();
  }

  initializeResetBtn() {
    this.ids.resetBtn.addEventListener("click", () => {
      this.grid.reset();
      this.ids.gameText.textContent = "Click an empty cell to make a move";
      this.ai.makeFirstMove();
    });
  }

  initializeCells() {
    this.initializeCell1();
    this.initializeCell2();
    this.initializeCell3();
    this.initializeCell4();
    this.initializeCell5();
    this.initializeCell6();
    this.initializeCell7();
    this.initializeCell8();
    this.initializeCell9();
 }

  initializeCell1() {
    this.grid.cell1.id.addEventListener("click", () => {
      if (this.grid.cell1.hasMove === false) {
        this.grid.cell1.id.textContent = "X";
        this.grid.incrementCell1();
        this.ai.makeNextMove(this.grid.cell1.id);
        this.checkAndDisplayWinner();
        this.checkAndDisplayTie();
      }
    });
  }

  initializeCell2() {
    this.grid.cell2.id.addEventListener("click", () => {
      if (this.grid.cell2.hasMove === false) {
        this.grid.cell2.id.textContent = "X";
        this.grid.incrementCell2();
        this.ai.makeNextMove(this.grid.cell2.id);
        this.checkAndDisplayWinner();
        this.checkAndDisplayTie();
      }
    });
  }

  initializeCell3() {
    this.grid.cell3.id.addEventListener("click", () => {
      if (this.grid.cell3.hasMove === false) {
        this.grid.cell3.id.textContent = "X";
        this.grid.incrementCell3();
        this.ai.makeNextMove(this.grid.cell3.id);
        this.checkAndDisplayWinner();
        this.checkAndDisplayTie();
      }
    });
  }

  initializeCell4() {
    this.grid.cell4.id.addEventListener("click", () => {
      if (this.grid.cell4.hasMove === false) {
        this.grid.cell4.id.textContent = "X";
        this.grid.incrementCell4();
        this.ai.makeNextMove(this.grid.cell4.id);
        this.checkAndDisplayWinner();
        this.checkAndDisplayTie();
      }
    });
  }

  initializeCell5() {
    this.grid.cell5.id.addEventListener("click", () => {
      if (this.grid.cell5.hasMove === false) {
        this.grid.cell5.id.textContent = "X";
        this.grid.incrementCell5();
        this.ai.makeNextMove(this.grid.cell5.id);
        this.checkAndDisplayWinner();
        this.checkAndDisplayTie();

      }
    });
  }

  initializeCell6() {
    this.grid.cell6.id.addEventListener("click", () => {
      if (this.grid.cell6.hasMove === false) {
        this.grid.cell6.id.textContent = "X";
        this.grid.incrementCell6();
        this.ai.makeNextMove(this.grid.cell6.id);
        this.checkAndDisplayWinner();
        this.checkAndDisplayTie();

      }
    });
  }

  initializeCell7() {
    this.grid.cell7.id.addEventListener("click", () => {
      if (this.grid.cell7.hasMove === false) {
        this.grid.cell7.id.textContent = "X";
        this.grid.incrementCell7();
        this.ai.makeNextMove(this.grid.cell7.id);
        this.checkAndDisplayWinner();
        this.checkAndDisplayTie();
      }
    });
  }

  initializeCell8() {
    this.grid.cell8.id.addEventListener("click", () => {
      if (this.grid.cell8.hasMove === false) {
        this.grid.cell8.id.textContent = "X";
        this.grid.incrementCell8();
        this.ai.makeNextMove(this.grid.cell8.id);
        this.checkAndDisplayWinner();
        this.checkAndDisplayTie();
      }
    });
  }

  initializeCell9() {
    this.grid.cell9.id.addEventListener("click", () => {
      if (this.grid.cell9.hasMove === false) {
        this.grid.cell9.id.textContent = "X";
        this.grid.incrementCell9();
        this.ai.makeNextMove(this.grid.cell9.id);
        this.checkAndDisplayWinner();
        this.checkAndDisplayTie();
      }
    });
  }
  
  checkAndDisplayWinner() {
    if (this.hasWinner()) {
      this.displayWinner();
    }
  }
  
  hasWinner() {
    return this.grid.isPlayer1Winner() || this.grid.isPlayer2Winner();
  }

  displayWinner() {
    if (this.grid.isPlayer1Winner()) {
      this.ids.gameText.textContent = "Player 1 Wins!";
    } else if (this.grid.isPlayer2Winner()) {
      this.ids.gameText.textContent = "Player 2 Wins!";
    }
  }
  
  checkAndDisplayTie() {
    if (!this.hasWinner() && this.grid.areAllCellsTaken()) {
      this.ids.gameText.textContent = "It's a tie!";
    }
  }

}