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
    this.cell1HasMove = false;
    this.cell2HasMove = false;
    this.cell3HasMove = false;
    this.cell4HasMove = false;
    this.cell5HasMove = false;
    this.cell6HasMove = false;
    this.cell7HasMove = false;
    this.cell8HasMove = false;
    this.cell9HasMove = false;
  }
  
  incrementCell1() {
    this.cell1HasMove = true;
    this.col1++;
    this.row1++;
    this.lDia++;
  }

  decrementCell1() {
    this.cell1HasMove = true;
    this.col1--;
    this.row1--;
    this.lDia--;
  }

  incrementCell2() {
    this.cell2HasMove = true;
    this.col2++;
    this.row1++;
  }

  decrementCell2() {
    this.cell2HasMove = true;
    this.col2--;
    this.row1--;
  }

  incrementCell3() {
    this.cell3HasMove = true;
    this.col3++;
    this.row1++;
    this.rDia++;
  }

  decrementCell3() {
    this.cell3HasMove = true;
    this.col3--;
    this.row1--;
    this.rDia--;
  }

  incrementCell4() {
    this.cell4HasMove = true;
    this.col1++;
    this.row2++;
  }

  decrementCell4() {
    this.cell4HasMove = true;
    this.col1--;
    this.row2--;
  }

  incrementCell5() {
    this.cell5HasMove = true;
    this.col2++;
    this.row2++;
    this.lDia++;
    this.rDia++;
  }

  decrementCell5() {
    this.cell5HasMove = true;
    this.col2--;
    this.row2--;
    this.lDia--;
    this.rDia--;
  }

  incrementCell6() {
    this.cell6HasMove = true;
    this.col3++;
    this.row2++;
  }

  decrementCell6() {
    this.cell6HasMove = true;
    this.col3--;
    this.row2--;
  }

  incrementCell7() {
    this.cell7HasMove = true;
    this.col1++;
    this.row3++;
    this.rDia++;
  }

  decrementCell7() {
    this.cell7HasMove = true;
    this.col1--;
    this.row3--;
    this.rDia--;
  }

  incrementCell8() {
    this.cell8HasMove = true;
    this.col2++;
    this.row3++;
  }

  decrementCell8() {
    this.cell8HasMove = true;
    this.col2--;
    this.row3--;
  }

  incrementCell9() {
    this.cell9HasMove = true;
    this.col3++;
    this.row3++;
    this.lDia++;
  }

  decrementCell9() {
    this.cell9HasMove = true;
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
    this.cell1HasMove = false;
    this.cell2HasMove = false;
    this.cell3HasMove = false;
    this.cell4HasMove = false;
    this.cell5HasMove = false;
    this.cell6HasMove = false;
    this.cell7HasMove = false;
    this.cell8HasMove = false;
    this.cell9HasMove = false;
  }

}