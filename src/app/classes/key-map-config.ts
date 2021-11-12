import {KeyConfig} from "./key-config";
import {Behavior} from "./behavior";

export class KeyMapConfig {

  public name: string;
  public rows: number = 0;
  public cols: number = 0;

  public keyConfigs: Array<KeyConfig> = new Array<KeyConfig>();
  public behaviors: Array<Behavior> = new Array<Behavior>();

  constructor(name: string) {
    this.name = name;
  }

  public getKeyConfigs(): Array<KeyConfig> {
    return this.keyConfigs;
  }

  setKeyConfigs(value: Array<KeyConfig>) {
    this.keyConfigs = value;
  }

  public getBehaviors(): Array<Behavior> {
    return this.behaviors;
  }

  setBehaviors(value: Array<Behavior>) {
    this.behaviors = value;
  }

  addBehavior(behavior: Behavior) {
    this.behaviors.push(behavior);
  }

  addKeyConfig(row: number, column: number, keyConfig: KeyConfig): void  {
    // todo: overwrite if exists for the same row, column (row and column params are obsolete, can be extracted from the keyconfig).
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

