class ElementIds {

  constructor() {
    this.cell1 =  document.getElementById("cell-1");
    this.cell2 =  document.getElementById("cell-2");
    this.cell3 =  document.getElementById("cell-3");
    this.cell4 =  document.getElementById("cell-4");
    this.cell5 =  document.getElementById("cell-5");
    this.cell6 =  document.getElementById("cell-6");
    this.cell7 =  document.getElementById("cell-7");
    this.cell8 =  document.getElementById("cell-8");
    this.cell9 =  document.getElementById("cell-9");
    this.gameText = document.getElementById("game-text");
    this.resetBtn = document.getElementById("reset-button");
  }

  resetAllCellTextContent() {
    this.cell1.textContent = null;
    this.cell2.textContent = null;
    this.cell3.textContent = null;
    this.cell4.textContent = null;
    this.cell5.textContent = null;
    this.cell6.textContent = null;
    this.cell7.textContent = null;
    this.cell8.textContent = null;
    this.cell9.textContent = null;
  }

}