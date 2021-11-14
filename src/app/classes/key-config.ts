export class KeyConfig {

  public static readonly SIDERIGHT: string = 'right';
  public static readonly SIDELEFT: string = 'left';
  public keyNumber: number = 0;
  public x: number = 0;
  public y: number = 0;
  public angle: number = 0;
  public active: boolean = false;
  public row: number = 0;
  public column: number = 0;
  public side: string = KeyConfig.SIDELEFT;
  public label: string = '';

  constructor(keyNumber: number, x: number, y: number, angle: number, active: boolean, row: number, column: number, side: string, label: string) {
    this.keyNumber = keyNumber;
    // spatial position
    this.x = x;
    this.y = y;
    this.angle = angle;

    this.active = active;
    this.row = row;
    this.column = column;
    this.side = side;
    this.label = label;
  }

  public static getInstance(): KeyConfig {
    return new KeyConfig(-1, 0, 0, 0, false, 0, 0, KeyConfig.SIDELEFT, '');
  }

}
