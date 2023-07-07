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
  }
  
  incrementCell1() {
    this.col1++;
    this.row1++;
    this.lDia++;
  }

  decrementCell1() {
    this.col1--;
    this.row1--;
    this.lDia--;
  }

  incrementCell2() {
    this.col2++;
    this.row1++;
  }

  decrementCell2() {
    this.col2--;
    this.row1--;
  }

  incrementCell3() {
    this.col3++;
    this.row1++;
    this.rDia++;
  }

  decrementCell3() {
    this.col3--;
    this.row1--;
    this.rDia--;
  }

  incrementCell4() {
    this.col1++;
    this.row2++;
  }

  decrementCell4() {
    this.col1--;
    this.row2--;
  }

  incrementCell5() {
    this.col2++;
    this.row2++;
    this.lDia++;
    this.rDia++;
  }

  decrementCell5() {
    this.col2--;
    this.row2--;
    this.lDia--;
    this.rDia--;
  }

  incrementCell6() {
    this.col3++;
    this.row2++;
  }

  decrementCell6() {
    this.col3--;
    this.row2--;
  }

  incrementCell7() {
    this.col1++;
    this.row3++;
    this.rDia++;
  }

  decrementCell7() {
    this.col1--;
    this.row3--;
    this.rDia--;
  }

  incrementCell8() {
    this.col2++;
    this.row3++;
  }

  decrementCell8() {
    this.col2--;
    this.row3--;
  }

  incrementCell9() {
    this.col3++;
    this.row3++;
    this.lDia++;
  }

  decrementCell9() {
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
  }

}