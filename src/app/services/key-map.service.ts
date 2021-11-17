import { Injectable } from '@angular/core';
import {RepositoryService} from "./repository.service";
import {KeyMapConfig} from "../classes/key-map-config";
import {KeyConfig} from "../classes/key-config";
import {bindCallback, ReplaySubject, Subject} from "rxjs";
import {Behavior} from "../classes/behavior";
import {Layer} from "../classes/layer";

@Injectable({
  providedIn: 'root'
})
export class KeyMapService {

  // TODO: deprecate the arrays in the KeyMapConfig class

  // contains the current key
  private currentKey: KeyConfig = KeyConfig.getInstance();
  public currentKey$ = new ReplaySubject<KeyConfig>();

  // contains all active keys
  private activeKeysSource = new Subject<KeyConfig[]>();
  public activeKeys$ = this.activeKeysSource.asObservable();

  // contains all behaviors
  private behaviors: Array<Behavior> = new Array<Behavior>();
  public behaviors$ = new ReplaySubject<Array<Behavior>>();

  // contains the selected behavior
  private selectedBehaviorSource = new Subject<Behavior>();
  public selectedBehavior$ = this.selectedBehaviorSource.asObservable();

  // contains all behaviors for the current key
  // private keyBehaviorsSource = new Subject<Behavior[]>();
  // public keyBehaviors$ = this.keyBehaviorsSource.asObservable();

  private currentKeyBehaviors = new Array<Behavior>();
  public currentKeyBehaviors$ = new ReplaySubject<Array<Behavior>>();

  // contains all layers
  private layers: Array<Layer> = new Array<Layer>();
  public layers$ = new ReplaySubject<Array<Layer>>();

  // contains the current layer
  public currentLayer = new Layer('',0);
  public currentLayer$ = new ReplaySubject<Layer>();

  // contains all keys
  private keys: Array<KeyConfig> = new Array<KeyConfig>();
  public keys$ = new ReplaySubject<Array<KeyConfig>>();

  private readonly keyMapConfig: KeyMapConfig = new KeyMapConfig('corne')

  constructor(private repositoryService: RepositoryService) {
    this.keyMapConfig = repositoryService.loadKeyMapConfig();
    if(this.keyMapConfig.name === 'Dummy') {
      this.createInitialKeyMapConfig();
    }
    console.log('keymapservice is primed with: ', this.keyMapConfig);

    this.layers = this.keyMapConfig.layers
    this.layers$.next(this.keyMapConfig.layers)
    this.currentLayer$.next(this.layers[0]);

    this.keys = this.keyMapConfig.getKeyConfigs();
    this.keys$.next(this.keys);
  }

  private createInitialKeyMapConfig(): void {
    console.log('Dummy keyMapConfig detected, transforming it to Corne keyMapConfig');
    this.keyMapConfig.name = 'Corne';
    let index: number = 0;
    for(let row=0; row < 4; row++) {
      for(let col=0; col < 12; col++) {
        let keyConfig = new KeyConfig(index,col*50,row*50,0,false,row,col,KeyConfig.SIDELEFT ,''+index);
        this.keyMapConfig.addKeyConfig(row,col,keyConfig);
      }
    }
    console.log('result: ',this.keyMapConfig);
  }

  public saveKeyMapConfig():void {
    this.repositoryService.saveKeyMapConfig(this.keyMapConfig);
  }

  public toggleActive(keyConfig: KeyConfig): void {
    keyConfig.active = !keyConfig.active;
    let activeKeys = this.keyMapConfig.getKeyConfigs().filter(keyConfig => keyConfig.active);
    if (activeKeys.length === 1) {
      this.currentKey$.next(activeKeys[0]);

    }
    this.activeKeysSource.next(activeKeys);
  }

  public getKeyConfigs(): Array<KeyConfig> {
    return this.keyMapConfig.getKeyConfigs();
  }

  public selectConfig(config: KeyConfig): void {
    console.log('service signals selection of key: ',config);
    this.currentKey$.next(config);
    this.currentKeyBehaviors$.next();
    this.selectBehaviorsForKeyAndLayer();
    //this.keyBehaviorsSource.next(this.getBehaviorsForKey(config));
  }

  public selectBehavior(behavior: Behavior): void {
    console.log('service signals selection of behavior: ',behavior);
    this.selectedBehaviorSource.next(behavior);
  }

  public selectLayer(layer: Layer): void {
    console.log('service signals selection of layer: ',layer);
    this.currentLayer$.next(layer);
    this.currentKeyBehaviors = new Array<Behavior>();
    this.selectBehaviorsForKeyAndLayer();
  }

  private selectBehaviorsForKeyAndLayer(): void {
    console.log('selecting relevant behaviors from ',this.behaviors);
    this.currentKeyBehaviors = this.behaviors
      .filter(behavior => behavior.keyNumber === this.currentKey.keyNumber)
      .filter(behavior => behavior.layers.indexOf(this.currentLayer.id) >= 0);
    console.log('The relevant behaviors: ',this.currentKeyBehaviors);
    this.currentKeyBehaviors$.next(this.currentKeyBehaviors);
  }

  public addLayer(layerName:string): void {
    console.log('service is adding a new layer with behaviors for all keys');
    // TODO: check for duplicate layer names
    let newLayer = new Layer(layerName,Math.random());
    this.layers.push(newLayer);
    // add behaviors for each key to this layer
    this.keys.forEach(key => {
      let newBehavior = new Behavior(key.keyNumber,Behavior.BEHAVIOR_TYPE_NONE,'',[],[newLayer.id]);
      this.behaviors.push(newBehavior);
    })
    this.behaviors$.next(this.behaviors);
    this.layers$.next(this.layers);
    this.selectLayer(newLayer);
    console.log('the new list of behaviors: ',this.behaviors);
  }

  public deleteLayer(layer: Layer) {
    this.layers.splice(this.layers.indexOf(layer),1);
    // remove the behaviors that only occur in the layer that is deleted
    this.behaviors = this.behaviors.filter(behavior => behavior.layers.length === 1 && behavior.layers[0] === layer.id );
    //remove the layer from behaviors that have more than 1 layer
    this.behaviors.forEach(behavior => {
      behavior.layers = behavior.layers.splice(behavior.layers.indexOf(layer.id),1);
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
    this.keyMapConfig.addBehavior(newBehavior);
  }

  // getBehaviorsForKey(config: KeyConfig): Array<Behavior> {
  //   return this.keyMapConfig.behaviors.filter((behavior) => {
  //     return behavior.keyNumber === config.keyNumber;
  //   });
  // }

}
