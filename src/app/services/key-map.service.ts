import { Injectable } from '@angular/core';
import {RepositoryService} from "./repository.service";
import {KeyMapConfig} from "../classes/key-map-config";
import {KeyConfig} from "../classes/key-config";
import {ReplaySubject, Subject} from "rxjs";
import {Behavior} from "../classes/behavior";
import {Layer} from "../classes/layer";

@Injectable({
  providedIn: 'root'
})
export class KeyMapService {

  // contains the current key
  private currentKeySource = new Subject<KeyConfig>();
  public currentKey$ = this.currentKeySource.asObservable();

  // contains all active keys
  private activeKeysSource = new Subject<KeyConfig[]>();
  public activeKeys$ = this.activeKeysSource.asObservable();

  // contains the selected behavior
  private selectedBehaviorSource = new Subject<Behavior>();
  public selectedBehavior$ = this.selectedBehaviorSource.asObservable();

  // contains all behaviors for the current key
  private keyBehaviorsSource = new Subject<Behavior[]>();
  public keyBehaviors$ = this.keyBehaviorsSource.asObservable();

  // contains all layers
  public layers$ = new ReplaySubject<Array<Layer>>();

  // contains the current layer
  public currentLayer$ = new ReplaySubject<Layer>();

  // contains all keys
  public keys$ = new ReplaySubject<Array<KeyConfig>>();

  private readonly keyMapConfig: KeyMapConfig = new KeyMapConfig('corne')

  constructor(private repositoryService: RepositoryService) {
    this.keyMapConfig = repositoryService.loadKeyMapConfig();
    if(this.keyMapConfig.name === 'Dummy') {
      this.createInitialKeyMapConfig();
    }
    console.log('keymapservice is primed with: ', this.keyMapConfig);
    this.layers$.next(this.keyMapConfig.layers)
    this.currentLayer$.next(this.keyMapConfig.layers[0]);
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
      this.currentKeySource.next(activeKeys[0]);

    }
    this.activeKeysSource.next(activeKeys);
  }

  public getKeyConfigs(): Array<KeyConfig> {
    return this.keyMapConfig.getKeyConfigs();
  }

  public selectConfig(config: KeyConfig): void {
    console.log('service signals selection of key: ',config);
    this.currentKeySource.next(config);
    this.keyBehaviorsSource.next(this.getBehaviorsForKey(config));
  }

  public selectBehavior(behavior: Behavior): void {
    console.log('service signals selection of behavior: ',behavior);
    this.selectedBehaviorSource.next(behavior);
  }

  public selectLayer(layer: Layer): void {
    console.log('service signals selection of layer: ',layer);
    this.currentLayer$.next(layer);
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

  getBehaviorsForKey(config: KeyConfig): Array<Behavior> {
    return this.keyMapConfig.behaviors.filter((behavior) => {
      return behavior.keyNumber === config.keyNumber;
    });
  }

  deselectNonActiveKeys() {
    this.keyMapConfig.getKeyConfigs().filter(keyConfig => keyConfig.active)
  }
}
