import {KeyConfig} from "./key-config";
import {Behavior} from "./behavior";
import {Layer} from "./layer";
import {Combo} from "./combo";

export class KeyMapConfig {

  public name: string;
  public githubUrl: string = "";
  public rows: number = 0;
  public cols: number = 0;
  public split: boolean = false;

  // TODO: deprecate these arrays, they will be responsibility of the KeyMapService
  public layers: Array<Layer> = new Array<Layer>();
  public keyConfigs: Array<KeyConfig> = new Array<KeyConfig>();
  public behaviors: Array<Behavior> = new Array<Behavior>();
  public combos: Array<Combo> = new Array<Combo>();

  constructor(name: string) {
    this.name = name;
  }

  public addLayer(layer: Layer) {
    this.layers.push(layer);
  }

  public getLayers(): Array<Layer> {
    return this.layers;
  }

  public getKeyConfigs(): Array<KeyConfig> {
    return this.keyConfigs;
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

  public getBehaviors(): Array<Behavior> {
    return this.behaviors;
  }

  addBehavior(behavior: Behavior) {
    this.behaviors.push(behavior);
  }

  public getCombos(): Array<Combo> {
    return this.combos;
  }

  addCombo(combo: Combo) {
    this.combos.push(combo);
  }
}

