import {KeyConfig} from "./key-config";
import {Behavior} from "./behavior";
import {Layer} from "./layer";

export class KeyMapConfig {

  public name: string;
  public rows: number = 0;
  public cols: number = 0;
  public split: boolean = false;

  // TODO: deprecate these arrays, they will be responsibility of the KeyMapService
  public layers: Array<Layer> = new Array<Layer>();
  public keyConfigs: Array<KeyConfig> = new Array<KeyConfig>();
  public behaviors: Array<Behavior> = new Array<Behavior>();

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

  public getBehaviors(): Array<Behavior> {
    return this.behaviors;
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
}

