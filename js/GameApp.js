class GameApp {

  constructor() {
    this.grid = new Grid();
    this.ids = new ElementIds;
    this.isPlayer1Turn = true;
  }

  start() {
    this.initializeCells();
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
    this.ids.cell1.addEventListener("click", () => {
      if (this.grid.cell1HasMove === false) {
        if (this.isPlayer1Turn) {
          this.ids.cell1.textContent = "X";
          this.grid.incrementCell1();
          this.isPlayer1Turn = false;
        } else {
          this.ids.cell1.textContent = "O";
          this.grid.decrementCell1();
          this.isPlayer1Turn = true;
        }
      }
    });
  }

  initializeCell2() {
    this.ids.cell2.addEventListener("click", () => {
      if (this.grid.cell2HasMove === false) {
        if (this.isPlayer1Turn) {
          this.ids.cell2.textContent = "X";
          this.grid.incrementCell2();
          this.isPlayer1Turn = false;
        } else {
          this.ids.cell2.textContent = "O";
          this.grid.decrementCell2();
          this.isPlayer1Turn = true;
        }
      }
    });
  }

  initializeCell3() {
    this.ids.cell3.addEventListener("click", () => {
      if (this.grid.cell3HasMove === false) {
        if (this.isPlayer1Turn) {
          this.ids.cell3.textContent = "X";
          this.grid.incrementCell3();
          this.isPlayer1Turn = false;
        } else {
          this.ids.cell3.textContent = "O";
          this.grid.decrementCell3();
          this.isPlayer1Turn = true;
        }
      }
    });
  }

  initializeCell4() {
    this.ids.cell4.addEventListener("click", () => {
      if (this.grid.cell4HasMove === false) {
        if (this.isPlayer1Turn) {
          this.ids.cell4.textContent = "X";
          this.grid.incrementCell4();
          this.isPlayer1Turn = false;
        } else {
          this.ids.cell4.textContent = "O";
          this.grid.decrementCell4();
          this.isPlayer1Turn = true;
        }
      }
    });
  }

  initializeCell5() {
    this.ids.cell5.addEventListener("click", () => {
      if (this.grid.cell5HasMove === false) {
        if (this.isPlayer1Turn) {
          this.ids.cell5.textContent = "X";
          this.grid.incrementCell5();
          this.isPlayer1Turn = false;
        } else {
          this.ids.cell5.textContent = "O";
          this.grid.decrementCell5();
          this.isPlayer1Turn = true;
        }
      }
    });
  }

  initializeCell6() {
    this.ids.cell6.addEventListener("click", () => {
      if (this.grid.cell6HasMove === false) {
        if (this.isPlayer1Turn) {
          this.ids.cell6.textContent = "X";
          this.grid.incrementCell6();
          this.isPlayer1Turn = false;
        } else {
          this.ids.cell6.textContent = "O";
          this.grid.decrementCell6();
          this.isPlayer1Turn = true;
        }
      }
    });
  }

  initializeCell7() {
    this.ids.cell7.addEventListener("click", () => {
      if (this.grid.cell7HasMove === false) {
        if (this.isPlayer1Turn) {
          this.ids.cell7.textContent = "X";
          this.grid.incrementCell7();
          this.isPlayer1Turn = false;
        } else {
          this.ids.cell7.textContent = "O";
          this.grid.decrementCell7();
          this.isPlayer1Turn = true;
        }
      }
    });
  }

  initializeCell8() {
    this.ids.cell8.addEventListener("click", () => {
      if (this.grid.cell8HasMove === false) {
        if (this.isPlayer1Turn) {
          this.ids.cell8.textContent = "X";
          this.grid.incrementCell8();
          this.isPlayer1Turn = false;
        } else {
          this.ids.cell8.textContent = "O";
          this.grid.decrementCell8();
          this.isPlayer1Turn = true;
        }
      }
    });
  }

  initializeCell9() {
    this.ids.cell9.addEventListener("click", () => {
      if (this.grid.cell9HasMove === false) {
        if (this.isPlayer1Turn) {
          this.ids.cell9.textContent = "X";
          this.grid.incrementCell9();
          this.isPlayer1Turn = false;
        } else {
          this.ids.cell9.textContent = "O";
          this.grid.decrementCell9();
          this.isPlayer1Turn = true;
        }
      }
    });
  }

}