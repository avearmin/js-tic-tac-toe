class Player {

  constructor() {
    this.isX = false;
    this.col1 = 0;
    this.col2 = 0;
    this.col3 = 0;
    this.row1 = 0;
    this.row2 = 0;
    this.row3 = 0;
    this.rDia = 0;
    this.lDia = 0;
  }
  
  setAsX() {
    this.isX = true;
  }

  setAsO() {
    this.isX = false;
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