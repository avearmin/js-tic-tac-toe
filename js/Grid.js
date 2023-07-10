class Grid {

  constructor() {
    this.col1 = 0;
    this.col2 = 0;
    this.col3 = 0;
    this.row1 = 0;
    this.row2 = 0;
    this.row3 = 0;
    this.rDia = 0;
    this.lDia = 0;
    this.cell1 = new Cell(document.getElementById("cell-1"));
    this.cell2 = new Cell(document.getElementById("cell-2"));
    this.cell3 = new Cell(document.getElementById("cell-3"));
    this.cell4 = new Cell(document.getElementById("cell-4"));
    this.cell5 = new Cell(document.getElementById("cell-5"));
    this.cell6 = new Cell(document.getElementById("cell-6"));
    this.cell7 = new Cell(document.getElementById("cell-7"));
    this.cell8 = new Cell(document.getElementById("cell-8"));
    this.cell9 = new Cell(document.getElementById("cell-9"));
  }
  
  isPlayer1AlmostWinner() {
    return (
      this.col1 == 2 ||
      this.col2 == 2 ||
      this.col3 == 2 ||
      this.row1 == 2 ||
      this.row2 == 2 ||
      this.row3 == 2 ||
      this.rDia == 2 ||
      this.lDia == 2
    );
  }

  isPlayer2AlmostWinner() {
    return (
      this.col1 == -2 ||
      this.col2 == -2 ||
      this.col3 == -2 ||
      this.row1 == -2 ||
      this.row2 == -2 ||
      this.row3 == -2 ||
      this.rDia == -2 ||
      this.lDia == -2
    );
  }

  isPlayer1Winner() {
    return (
      this.col1 === 3 ||
      this.col2 === 3 ||
      this.col3 === 3 ||
      this.row1 === 3 ||
      this.row2 === 3 ||
      this.row3 === 3 ||
      this.rDia === 3 ||
      this.lDia === 3
    );
  }
  
  isPlayer2Winner() {
    return (
      this.col1 === -3 ||
      this.col2 === -3 ||
      this.col3 === -3 ||
      this.row1 === -3 ||
      this.row2 === -3 ||
      this.row3 === -3 ||
      this.rDia === -3 ||
      this.lDia === -3
    );
  }

  areAllCellsTaken() {
    return (
      this.cell1.hasMove &&
      this.cell2.hasMove &&
      this.cell3.hasMove &&
      this.cell4.hasMove &&
      this.cell5.hasMove &&
      this.cell6.hasMove &&
      this.cell7.hasMove &&
      this.cell8.hasMove &&
      this.cell9.hasMove
    ); 
  }

  incrementCell1() {
    this.cell1.hasMove = true;
    this.col1++;
    this.row1++;
    this.lDia++;
  }

  decrementCell1() {
    this.cell1.hasMove = true;
    this.col1--;
    this.row1--;
    this.lDia--;
  }

  incrementCell2() {
    this.cell2.hasMove = true;
    this.col2++;
    this.row1++;
  }

  decrementCell2() {
    this.cell2.hasMove = true;
    this.col2--;
    this.row1--;
  }

  incrementCell3() {
    this.cell3.hasMove = true;
    this.col3++;
    this.row1++;
    this.rDia++;
  }

  decrementCell3() {
    this.cell3.hasMove = true;
    this.col3--;
    this.row1--;
    this.rDia--;
  }

  incrementCell4() {
    this.cell4.hasMove = true;
    this.col1++;
    this.row2++;
  }

  decrementCell4() {
    this.cell4.hasMove = true;
    this.col1--;
    this.row2--;
  }

  incrementCell5() {
    this.cell5.hasMove = true;
    this.col2++;
    this.row2++;
    this.lDia++;
    this.rDia++;
  }

  decrementCell5() {
    this.cell5.hasMove = true;
    this.col2--;
    this.row2--;
    this.lDia--;
    this.rDia--;
  }

  incrementCell6() {
    this.cell6.hasMove = true;
    this.col3++;
    this.row2++;
  }

  decrementCell6() {
    this.cell6HasMove = true;
    this.col3--;
    this.row2--;
  }

  incrementCell7() {
    this.cell7.hasMove = true;
    this.col1++;
    this.row3++;
    this.rDia++;
  }

  decrementCell7() {
    this.cell7.hasMove = true;
    this.col1--;
    this.row3--;
    this.rDia--;
  }

  incrementCell8() {
    this.cell8.hasMove = true;
    this.col2++;
    this.row3++;
  }

  decrementCell8() {
    this.cell8.hasMove = true;
    this.col2--;
    this.row3--;
  }

  incrementCell9() {
    this.cell9.hasMove = true;
    this.col3++;
    this.row3++;
    this.lDia++;
  }

  decrementCell9() {
    this.cell9.hasMove = true;
    this.col3--;
    this.row3--;
    this.lDia--;
  }

  reset() {
    this.col1 = 0;
    this.col2 = 0;
    this.col3 = 0;
    this.row1 = 0;
    this.row2 = 0;
    this.row3 = 0;
    this.rDia = 0;
    this.lDia = 0;
    this.cell1.hasMove = false;
    this.cell2.hasMove = false;
    this.cell3.hasMove = false;
    this.cell4.hasMove = false;
    this.cell5.hasMove = false;
    this.cell6.hasMove = false;
    this.cell7.hasMove = false;
    this.cell8.hasMove = false;
    this.cell9.hasMove = false;
    this.cell1.id.textContent = null;
    this.cell2.id.textContent = null;
    this.cell3.id.textContent = null;
    this.cell4.id.textContent = null;
    this.cell5.id.textContent = null;
    this.cell6.id.textContent = null;
    this.cell7.id.textContent = null;
    this.cell8.id.textContent = null;
    this.cell9.id.textContent = null;
  }

}