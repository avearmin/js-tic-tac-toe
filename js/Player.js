class Player {

  constructor() {
    this.isX = false;
    this.col = 0;
    this.row = 0;
    this.rDia = 0;
    this.lDia = 0;
  }
  
  setAsX() {
    this.isX = true;
    this.isO = false;
  }

  setAsO() {
    this.isO = true;
    this.isX = false;
  }

  reset() {
    this.col = 0;
    this.row = 0;
    this.rDia = 0;
    this.lDia = 0;
  }

}