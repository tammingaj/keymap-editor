import {KeyConfig} from "./key-config";

export class KeyMapConfig {

  public name: string;
  private keyConfigs: Array<KeyConfig> = new Array<KeyConfig>();
  public rows: number = 0;
  public cols: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  public getKeyConfigs(): Array<KeyConfig> {
    return this.keyConfigs;
  }

  addKeyConfig(row: number, column: number, keyConfig: KeyConfig): void  {
    // todo: overwrite if exists for the same row, column (row and column params are obsolete, can be extracted from the keyconfig).
    // keyConfig.row = row;
    // keyConfig.column = column;
    // let theMap = this.rows[row] || new KeyConfigMap();
    // theMap.keyConfigs[column] = keyConfig;
    // this.rows[row] = theMap;
    // theMap = this.columns[column] || new KeyConfigMap();
    // theMap.keyConfigs[row] = keyConfig;
    // this.columns[column] = theMap;
    this.keyConfigs.push(keyConfig);
  }

  deleteKeyConfig(keyConfig: KeyConfig): void {
    const index = this.keyConfigs.indexOf(keyConfig, 0);
    if (index > -1) {
      this.keyConfigs.splice(index, 1);
    }
  }

  public right(amount: number): void {
    this.move(amount,0);
  }

  public left(amount: number): void {
    this.move(-amount,0);
  }

  public up(amount: number): void {
    this.move(0, -amount);
  }

  public down(amount: number): void {
    this.move(0, amount);
  }

  public deselect(): void {
    this.keyConfigs.forEach((keyConfig) => {
      if (keyConfig.active) {
        keyConfig.active = false;
      }
    });
  }

  private move(x:number,y:number): void {
    this.keyConfigs.forEach((keyConfig) => {
      if (keyConfig.active) {
        keyConfig.x = keyConfig.x + x;
        keyConfig.y = keyConfig.y + y;
      }
    });
  }

}

