import { Injectable } from '@angular/core';
import {RepositoryService} from "./repository.service";
import {KeyMapConfig} from "../classes/key-map-config";
import {KeyConfig} from "../classes/key-config";
import {Behavior} from "../classes/behavior";
import {Layer} from "../classes/layer";
import {ReplaySubject} from "rxjs";
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class KeyMapService {

  // contains all keys
  private keys: Array<KeyConfig> = new Array<KeyConfig>();
  public keys$ = new ReplaySubject<Array<KeyConfig>>();

  // contains the current key
  private currentKey: KeyConfig = KeyConfig.getInstance();
  public currentKey$ = new ReplaySubject<KeyConfig>();

  // contains all active keys
  public activeKeys$ = new ReplaySubject<Array<KeyConfig>>()

  // contains all behaviors
  private behaviors: Array<Behavior> = new Array<Behavior>();
  public behaviors$ = new ReplaySubject<Array<Behavior>>();

  // contains the selected behavior
  private selectedBehavior = new Behavior(-1,Behavior.BEHAVIOR_TYPE_NONE,'',[],[]);
  public selectedBehavior$ = new ReplaySubject<Behavior>();

  // contains the behaviors for the current key
  private currentKeyBehaviors = new Array<Behavior>();
  public currentKeyBehaviors$ = new ReplaySubject<Array<Behavior>>();

  // contains all layers
  private layers: Array<Layer> = new Array<Layer>();
  public layers$ = new ReplaySubject<Array<Layer>>();

  // contains the current layer
  public currentLayer = new Layer('',uuidv4());
  public currentLayer$ = new ReplaySubject<Layer>();

  private readonly keyMapConfig: KeyMapConfig = new KeyMapConfig('corne')

  constructor(private repositoryService: RepositoryService) {
    this.keyMapConfig = repositoryService.loadKeyMapConfig();
    if(this.keyMapConfig.name === 'Dummy') {
      this.createInitialKeyMapConfig();
    }
    console.log('keymapservice is primed with: ', this.keyMapConfig);

    this.replenishKeyMap();

    this.keys = this.keyMapConfig.getKeyConfigs();
    this.keys$.next(this.keys);

    this.behaviors = this.keyMapConfig.behaviors;

    this.layers = this.keyMapConfig.layers
    if (this.layers.length === 0) {
      console.log('there are no layers');
      this.addLayer('Base');
    } else {
      this.layers$.next(this.keyMapConfig.layers)
      console.log('selecting current layer: ',this.layers[0]);
      this.behaviors$.next(this.behaviors);
    }
    this.currentLayer = this.layers[0];
    this.currentLayer$.next(this.currentLayer);

  }

  private createInitialKeyMapConfig(): void {
    console.log('Dummy keyMapConfig detected, transforming it to Corne keyMapConfig');
    this.keyMapConfig.name = 'Corne';
    let index: number = 0;
    for(let row=0; row < 4; row++) {
      for(let col=0; col < 12; col++) {
        let keyConfig = new KeyConfig(index,col*50,row*50,0,false,row,col,KeyConfig.SIDELEFT ,''+index++);
        this.keyMapConfig.addKeyConfig(row,col,keyConfig);
      }
    }
    console.log('result: ',this.keyMapConfig);
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
          .filter(behavior => behavior.layers.indexOf(layer.id) >= 0);
        if (keyBehaviorsForLayer.length === 0) {
          this.behaviors.push(new Behavior(key.keyNumber, Behavior.BEHAVIOR_TYPE_NONE, '', [], [layer.id]));
        }
      })
    })
  }

  public saveKeyMapConfig():void {
    this.repositoryService.saveKeyMapConfig(this.keyMapConfig);
  }

  public toggleActive(keyConfig: KeyConfig): void {
    keyConfig.active = !keyConfig.active;
    let activeKeys = this.keys.filter(keyConfig => keyConfig.active);
    if (activeKeys.length === 1) {
      this.selectConfig(activeKeys[0]);
    }
    this.activeKeys$.next(activeKeys);
  }

  public getKeyConfigs(): Array<KeyConfig> {
    return this.keyMapConfig.getKeyConfigs();
  }

  public selectConfig(config: KeyConfig): void {
    console.log('service signals selection of key: ',config);
    this.currentKey = config;
    this.currentKey$.next(config);
    this.selectBehaviorsForKeyAndLayer();
  }

  public selectBehavior(behavior: Behavior): void {
    console.log('service signals selection of behavior: ',behavior);
    this.selectedBehavior$.next(behavior)
  }

  public selectLayer(layer: Layer): void {
    console.log('service signals selection of layer: ',layer);
    this.currentLayer = layer;
    this.currentLayer$.next(layer);
    this.selectBehaviorsForKeyAndLayer();
  }

  private selectBehaviorsForKeyAndLayer(): void {
    console.log('selecting relevant behaviors for layer ' + this.currentLayer.name + ' and key ' + this.currentKey.keyNumber + ' from ',this.behaviors);
    this.currentKeyBehaviors = this.behaviors
      .filter(behavior => behavior.keyNumber === this.currentKey.keyNumber)
      .filter(behavior => behavior.layers.indexOf(this.currentLayer.id) >= 0);
    console.log('The relevant behaviors: ',this.currentKeyBehaviors);
    this.currentKeyBehaviors$.next(this.currentKeyBehaviors);
    this.selectedBehavior = this.currentKeyBehaviors[0];
    this.selectedBehavior$.next(this.selectedBehavior);
  }

  public addLayer(layerName:string): void {
    console.log('service is adding a new layer with behaviors for all keys');
    // TODO: check for duplicate layer names
    let newLayer = new Layer(layerName,uuidv4());
    this.layers.push(newLayer);
    // add behaviors for each key to this layer
    this.keys.forEach(key => {
      let newBehavior = new Behavior(key.keyNumber,Behavior.BEHAVIOR_TYPE_NONE,'',[],[newLayer.id]);
      this.behaviors.push(newBehavior);
    })
    this.behaviors$.next(this.behaviors);
    this.layers$.next(this.layers);
    this.selectLayer(newLayer);
    console.log('the behaviors for the new layer: ',this.behaviors);
  }

  public deleteLayer(layer: Layer) {
    this.layers.splice(this.layers.indexOf(layer),1);
    // remove the behaviors that only occur in the layer that is deleted
    this.behaviors = this.behaviors.filter(behavior => behavior.layers.length === 1 && behavior.layers[0] === layer.id );
    //remove the layer from behaviors that have more than 1 layer
    this.behaviors.forEach(behavior => {
      let idx = behavior.layers.findIndex(behaviorLayer => behaviorLayer === layer.id);
      behavior.layers = behavior.layers.splice(idx,1);
    })
    this.layers$.next(this.layers);
    this.behaviors$.next(this.behaviors);
  }

  public deleteConfig(config: KeyConfig): void {
    this.keyMapConfig.deleteKeyConfig(config);
  }

  public right(amount: number){
    this.keyMapConfig.right(amount);
  }

  public left(amount: number){
    this.keyMapConfig.left(amount);
  }

  public up(amount: number){
    this.keyMapConfig.up(amount);
  }

  public down(amount: number){
    this.keyMapConfig.down(amount);
  }

  public deselect():void {
    this.keyMapConfig.deselect();
  }

  getKeymapName() {
    return this.keyMapConfig.name;
  }

  addBehavior(newBehavior: Behavior) {
    this.behaviors.push(newBehavior);
    this.behaviors$.next(this.behaviors);
    this.selectBehaviorsForKeyAndLayer()
  }

}
