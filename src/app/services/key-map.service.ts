import { Injectable } from '@angular/core';
import {RepositoryService} from "./repository.service";
import {KeyMapConfig} from "../classes/key-map-config";
import {KeyConfig} from "../classes/key-config";
import {Behavior} from "../classes/behavior";
import {Layer} from "../classes/layer";
import {BehaviorSubject} from "rxjs";
import {v4 as uuidv4} from 'uuid';
import {Combo} from "../classes/combo";

@Injectable({
  providedIn: 'root'
})
export class KeyMapService {

  // contains all keys
  private keys: Array<KeyConfig> = new Array<KeyConfig>();
  public keys$ = new BehaviorSubject<Array<KeyConfig>>(this.keys);

  // contains the current key
  private currentKey: KeyConfig = KeyConfig.getInstance();
  public currentKey$ = new BehaviorSubject<KeyConfig>(this.currentKey);
  public currentKeyAvailable: boolean = false;

  // contains all active keys
  private activeKeys: Array<KeyConfig> = new Array<KeyConfig>();
  public activeKeys$ = new BehaviorSubject<Array<KeyConfig>>(this.activeKeys)

  // contains all behaviors
  private behaviors: Array<Behavior> = new Array<Behavior>();
  public behaviors$ = new BehaviorSubject<Array<Behavior>>(this.behaviors);

  // contains the selected behavior
  private selectedBehavior = new Behavior(-1,Behavior.BEHAVIOR_TYPE_NONE,[],[], '','', '', '');
  public selectedBehavior$ = new BehaviorSubject<Behavior>(this.selectedBehavior);

  // contains the behaviors for the current key
  private currentKeyBehaviors = new Array<Behavior>();
  public currentKeyBehaviors$ = new BehaviorSubject<Array<Behavior>>(this.currentKeyBehaviors);

  // contains all layers
  private layers: Array<Layer> = new Array<Layer>();
  public layers$ = new BehaviorSubject<Array<Layer>>(this.layers);

  // contains the current layer
  public currentLayer = new Layer('',uuidv4());
  public currentLayer$ = new BehaviorSubject<Layer>(this.currentLayer);

  // contains all combos
  private combos: Array<Combo> = new Array<Combo>();
  public combos$ = new BehaviorSubject<Array<Combo>>(this.combos);

  // contains the current combo
  private selectedCombo = new Combo(0,'',50,'','', '',[],[]);
  public selectedCombo$ = new BehaviorSubject<Combo>(this.selectedCombo);

  public keyMapConfig: KeyMapConfig = new KeyMapConfig('corne');
  public minX: number = 0;
  public minY: number = 0;
  public maxX: number = 0;
  public maxY: number = 0;
  private singleSelect: boolean = true;

  public highlight = {
    'row': false,
    'column': false,
    'side': false
  }

  constructor(private repositoryService: RepositoryService) {
    this.keyMapConfig = repositoryService.loadKeyMapConfig('');
    if(this.keyMapConfig.name !== ' ') {
      this.keys = this.keyMapConfig.getKeyConfigs();
      this.behaviors = this.keyMapConfig.behaviors;
      this.layers = this.keyMapConfig.layers;
      this.combos = this.keyMapConfig.combos;

      this.replenishKeyMap();
      this.updateSubscriptions();
      this.calculateMinMax();
    }

  }

  createNewKeymap(options: any): void{
    this.createInitialKeyMapConfig(options);
    this.keys = this.keyMapConfig.getKeyConfigs();
    this.behaviors = this.keyMapConfig.behaviors;
    this.layers = this.keyMapConfig.layers;
    this.combos = this.keyMapConfig.combos;

    this.replenishKeyMap();
    this.updateSubscriptions();
    this.calculateMinMax();
  }

  private updateSubscriptions(): void {
    this.keys$.next(this.keys);
    this.combos$.next(this.combos);

    this.behaviors.sort((first,second) => {
      if (first.keyNumber < second.keyNumber) return -1;
      if (first.keyNumber > second.keyNumber) return 1;
      return 0;
    });

    if (this.layers.length === 0) {
      this.addLayer('Base');
    } else {
      this.layers$.next(this.layers)
      this.behaviors$.next(this.behaviors);
    }
    this.currentLayer = this.layers[0];
    this.currentLayer$.next(this.currentLayer);
  }

  private createInitialKeyMapConfig(options: any): void {
    this.keyMapConfig = new KeyMapConfig(options.name || 'Corne');
    this.keyMapConfig.split = options.split;
    this.keyMapConfig.githubUrl = options.githubUrl;
    this.keyMapConfig.cols = options.nofCols;
    this.keyMapConfig.rows = options.nofRows;
    let index: number = 0;
    for(let row=0; row < options.nofRows; row++) {
      for(let col=0; col < options.nofCols; col++) {
        let keyConfig = new KeyConfig(index,col*50,row*50,0,false,row,col,col+.5 <= options.nofCols/2 ? KeyConfig.SIDELEFT : KeyConfig.SIDERIGHT ,''+index++);
        this.keyMapConfig.addKeyConfig(row,col,keyConfig);
      }
    }
  }

  private replenishKeyMap(): void {
    // when there are no keys, add a total of rows * cols
    if (this.keyMapConfig.keyConfigs.length == 0) {
      for (let r= 0; r < this.keyMapConfig.rows; r++) {
        for (let c= 0; c < this.keyMapConfig.cols; c++) {
          let keyConfig = new KeyConfig(0,c*50,r*50,0,false,r,c,c<this.keyMapConfig.cols?KeyConfig.SIDELEFT:KeyConfig.SIDERIGHT ,''+r+'- '+c);
          this.keyMapConfig.addKeyConfig(r,c,keyConfig);
        }
      }
    }
    //make sure there is at least one layer
    if (this.keyMapConfig.layers.length === 0) {
      this.addLayer('Base');
    }
    //make sure there is at least one behavior for each key in each layer
    this.keyMapConfig.layers.forEach(layer => {
      this.keyMapConfig.getKeyConfigs().forEach(key => {
        let keyBehaviorsForLayer: Array<Behavior> = this.behaviors
          .filter(behavior => behavior.keyNumber === key.keyNumber)
          .filter(behavior => behavior.layerId === layer.id);
        if (keyBehaviorsForLayer.length === 0) {
          this.behaviors.push(new Behavior(key.keyNumber, Behavior.BEHAVIOR_TYPE_NONE, [], [], '', layer.id, '', ''));
        }
      })
    })
  }

  public importKeyMap(keyMapConfigString: string): void {
    this.keyMapConfig = this.repositoryService.loadKeyMapConfig(keyMapConfigString);
    this.keys = this.keyMapConfig.getKeyConfigs();
    this.behaviors = this.keyMapConfig.behaviors;
    this.layers = this.keyMapConfig.layers;
    this.combos = this.keyMapConfig.combos;
    this.updateSubscriptions();
    this.calculateMinMax();
  }

  public saveKeyMapConfig():void {
    this.keyMapConfig.layers = this.layers;
    this.keyMapConfig.behaviors = this.behaviors;
    this.keyMapConfig.combos = this.combos;
    this.keyMapConfig.keyConfigs = this.keys;
    this.repositoryService.saveKeyMapConfig(this.keyMapConfig);
  }

  public noKeyMapAvailable(): boolean {
    return this.keyMapConfig.name === ' ';
  }

  public toggleActive(keyConfig: KeyConfig): void {
    if (this.singleSelect) {
      // console.log('single select mode');
      this.deselectKeys();
    }
    keyConfig.active = !keyConfig.active;
    let activeKeys = this.keys.filter(keyConfig => keyConfig.active);
    if (activeKeys.length === 1) {
      this.selectKey(activeKeys[0]);
    }
    this.activeKeys$.next(activeKeys);
  }

  public selectKey(config: KeyConfig): void {
    // console.log('service signals selection of key: ',config);
    this.currentKey = config;
    this.currentKey$.next(config);
    this.currentKeyAvailable = true;
    this.selectBehaviorsForKeyAndLayer();
  }

  public deselectKeys(): void {
    this.keys.forEach((key) => {
      if (key.active) {
        key.active = false;
      }
    });
    this.activeKeys$.next([]);
    this.currentKeyAvailable = false;
  }

  public selectLayer(layer: Layer): void {
    // console.log('service signals selection of layer: ',layer);
    this.currentLayer = layer;
    this.currentLayer$.next(layer);
    this.selectBehaviorsForKeyAndLayer();
  }

  private selectBehaviorsForKeyAndLayer(): void {
    // console.log('selecting relevant behaviors for layer ' + this.currentLayer.name + ' and key ' + this.currentKey.keyNumber + ' from ',this.behaviors);
    this.currentKeyBehaviors = this.behaviors
      .filter(behavior => behavior.keyNumber === this.currentKey.keyNumber)
      .filter(behavior => behavior.layerId === this.currentLayer.id);
    // console.log('The relevant behaviors: ',this.currentKeyBehaviors);
    this.currentKeyBehaviors$.next(this.currentKeyBehaviors);
    this.selectedBehavior = this.currentKeyBehaviors[0];
    this.selectedBehavior$.next(this.selectedBehavior);
  }

  public addLayer(layerName:string): void {
    // TODO: check for duplicate layer names
    let newLayer = new Layer(layerName,uuidv4());
    this.layers.push(newLayer);
    // add behaviors for each key to this layer
    this.keys.forEach(key => {
      let newBehavior = new Behavior(key.keyNumber,Behavior.BEHAVIOR_TYPE_NONE,[],[], '', newLayer.id, '','');
      this.behaviors.push(newBehavior);
    })
    this.behaviors$.next(this.behaviors);
    this.layers$.next(this.layers);
    this.selectLayer(newLayer);
  }

  public deleteLayer(layer: Layer) {
    if (this.layers.length > 1) { // don't delete the last layer
      // remove the behaviors that only occur in the layer that is deleted
      this.behaviors = this.behaviors.filter(behavior => behavior.layerId !== layer.id );

      // remove the layer from the behaviors that target it
      this.behaviors = this.behaviors.map(behavior => {
        if (behavior.targetLayerId === layer.id) {
          behavior.targetLayerId = '';
          behavior.targetLayerName = '';
          if (behavior.type === Behavior.BEHAVIOR_TYPE_MOMENTARY_LAYER ||
            behavior.type === Behavior.BEHAVIOR_TYPE_TO_LAYER ||
            behavior.type === Behavior.BEHAVIOR_TYPE_TOGGLE_LAYER ||
            behavior.type === Behavior.BEHAVIOR_TYPE_STICKY_LAYER)
          {
            behavior.type = Behavior.BEHAVIOR_TYPE_NONE;
          }
          if (behavior.type === Behavior.BEHAVIOR_TYPE_LAYER_TAP) {
            behavior.type = Behavior.BEHAVIOR_TYPE_KEYPRESS;
          }
        }
        return behavior;
      });

      // remove the layer from the combos and remove the combos that have no layer left
      // @ts-ignore
      this.combos = this.combos.map(combo => {
        let idx = combo.layers.findIndex(comboLayer => comboLayer === layer.id);
        if (idx > -1) {
          combo.layers.splice(idx,1);
          if (combo.layers.length === 0) {
            return null;
          }
        }
        return combo;
      }).filter(combo => combo !== null && combo.layers.length > 0);

      // remove the layer itself
      this.layers.splice(this.layers.indexOf(layer),1);

      // select the first layer
      this.selectLayer(this.layers[0]);

      this.combos$.next(this.combos);
      this.layers$.next(this.layers);
      this.behaviors$.next(this.behaviors);
    }
  }

  public deleteConfig(config: KeyConfig): void {
    // remove the behaviors for the key that is deleted
    this.behaviors = this.behaviors.filter(behavior => behavior.keyNumber !== config.keyNumber);

    // recalculate the keynumbers for the remaining behaviors
    this.behaviors.forEach(behavior => {
      if (behavior.keyNumber > config.keyNumber) {
        behavior.keyNumber--;
      }
    })
    this.behaviors$.next(this.behaviors);

    // remove the keynumber from the combos and delete the combos that have no key left
    this.combos.forEach(combo => {
      let idx = combo.keys.findIndex(key => key === config.keyNumber);
      if (idx >= 0) {
        combo.keys = combo.keys.splice(idx,1);
        if (combo.keys.length === 0) {
          this.combos = this.combos.splice(this.combos.indexOf(combo),1);
        }
      }
      // renumber the remaining keys in the combos if necessary
      let newKeys = combo.keys.map(key => key > config.keyNumber ? key - 1 : key);
      combo.keys = newKeys;

    });
    this.combos$.next(this.combos);

    // renumber the keys with higher keynumbers
    this.keys.forEach(key => {
      if (key.keyNumber > config.keyNumber) {
        key.keyNumber--;
      }
    });

    // remove the key from the keys array
    this.keyMapConfig.deleteKeyConfig(config);
  }

  public right(amount: number){
    this.move(amount,0);
  }

  public left(amount: number){
    this.move(-amount,0);
  }

  public up(amount: number){
    this.move(0,-amount);
  }

  public down(amount: number){
    this.move(0,amount);
  }

  public clockwise(){
    this.keys.forEach((key) => {
      if (key.active) {
        key.angle = key.angle + 1;
      }
    });
  }

  public counterClockwise(){
    this.keys.forEach((key) => {
      if (key.active) {
        key.angle = key.angle - 1;
      }
    });
  }

  // calculate the minimum and maximum x and y values for the key configs
  public calculateMinMax(): void {
    this.minX = Number.POSITIVE_INFINITY;
    this.minY = Number.POSITIVE_INFINITY;
    this.maxX = Number.NEGATIVE_INFINITY;
    this.maxY = Number.NEGATIVE_INFINITY;
    this.keys.forEach(key => {
      if (key.x < this.minX) {
        this.minX = key.x;
      }
      if (key.y < this.minY) {
        this.minY = key.y;
      }
      if (key.x > this.maxX) {
        this.maxX = key.x;
      }
      if (key.y > this.maxY) {
        this.maxY = key.y;
      }
    })
  }

  private move(x:number,y:number): void {
    this.keys.forEach((key) => {
      if (key.active) {
        key.x = key.x + x;
        key.y = key.y + y;
        this.calculateMinMax()
      }
    });
  }

  getKeymapName() {
    return this.keyMapConfig.name;
  }

  deleteCurrentBehavior():void {
    let idx = this.behaviors.indexOf(this.selectedBehavior);
    this.behaviors.splice(idx,1);
    this.behaviors$.next(this.behaviors);
    this.selectBehaviorsForKeyAndLayer();
  }

  addCombo(newCombo: Combo): void {
    this.combos.push(newCombo);
    this.selectedCombo = newCombo;
    this.selectedCombo$.next(this.selectedCombo);
    this.combos$.next(this.combos);
  }

  deleteCombo(combo: Combo): void {
    if (this.selectedCombo === combo) {
      this.selectedCombo = new Combo(0,'',50,'','', '',[],[]);
      this.selectedCombo$.next(this.selectedCombo);
    }
    let idx = this.combos.indexOf(combo);
    this.combos.splice(idx,1);
    this.combos$.next(this.combos);
  }

  selectCombo(combo: Combo): void {
    if (this.selectedCombo === combo) {
      this.selectedCombo = new Combo(0,'',50,'','', '',[],[]);
    } else {
      this.selectedCombo = combo;
    }
    this.selectedCombo$.next(this.selectedCombo);
    this.keys.forEach(key => {
      key.active = (combo.keys && combo.keys.includes(key.keyNumber));
    });
  }

  deselectCombo(): void {
    this.selectedCombo = new Combo(0,'',50,'','', '',[],[]);
    this.selectedCombo$.next(this.selectedCombo);
    this.keys.forEach(key => {
      key.active = false;
    });
  }

  getComboKeys(combo: Combo) : KeyConfig[] {
    return this.keys.filter(key => combo.keys.indexOf(key.keyNumber) > -1);
  }

  getModifierLabel(key: KeyConfig): string {
    let behavior = this.behaviors.find(behavior => behavior.keyNumber == key.keyNumber && behavior.layerId === this.currentLayer.id);
    if (behavior) {
      if (behavior.type === '&hm ' ) {
        return behavior.values[1];
      }
      if (behavior.type === '&bt ' ) {
        return behavior.values[0];
      }
      if ('&mo &lt &to &tog &sl '.indexOf(behavior.type) > -1 ) {
        return behavior.targetLayerName;
      }
      if (behavior.type !== '&kp ' && behavior.type !== '&none' ) {
        return behavior.type.trim();
      }
    }
    return '';
  }

  getLabel(key: KeyConfig): string {
    let behavior = this.behaviors.find(behavior => behavior.keyNumber == key.keyNumber && behavior.layerId === this.currentLayer.id);
    if (behavior) {
      return behavior.getLabel();
    }
    return '';
  }

  getKeymapAsJSON(): string {
    return JSON.stringify(this.keyMapConfig);
  }

  setSingleSelect(value: boolean) {
    this.singleSelect = value;
  }
}
