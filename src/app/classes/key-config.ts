export class KeyConfig {

  public keyNumber: number = 0;
  public x: number = 0;
  public y: number = 0;
  public angle: number = 0;
  public active: boolean = false;
  public row: number = 0;
  public column: number = 0;
  public label: string = '';

  constructor(keyNumber: number, x: number, y: number, angle: number, active: boolean, row: number, column: number, label: string) {
    this.keyNumber = keyNumber;
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.active = active;
    this.row = row;
    this.column = column;
    this.label = label;
  }
}
