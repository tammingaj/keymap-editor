import { Injectable } from '@angular/core';
import {RepositoryService} from "./repository.service";
import {KeyMapConfig} from "../classes/key-map-config";
import {KeyConfig} from "../classes/key-config";
import {Subject} from "rxjs";
import {Behavior} from "../classes/behavior";

@Injectable({
  providedIn: 'root'
})
export class KeyMapService {

  private currentKeySource = new Subject<KeyConfig>();
  public currentKey$ = this.currentKeySource.asObservable();

  private selectedBehaviorSource = new Subject<Behavior>();
  public selectedBehavior$ = this.selectedBehaviorSource.asObservable();

  private activeKeysSource = new Subject<KeyConfig[]>();
  public activeKeys$ = this.activeKeysSource.asObservable();

  private readonly keyMapConfig: KeyMapConfig = new KeyMapConfig('corne')

  constructor(private repositoryService: RepositoryService) {
    this.keyMapConfig = repositoryService.loadKeyMapConfig();
    if(this.keyMapConfig.name === 'Dummy') {
      this.createInitialKeyMapConfig();
    }
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
    console.log('service signals selection of: ',config);
    this.currentKeySource.next(config);
  }

  public selectBehavior(behavior: Behavior): void {
    console.log('service signals selection of: ',behavior);
    this.selectedBehaviorSource.next(behavior);
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

  public getLayers(): Array<string> {
    return ['base','lower','raise'];
  }

  getKeymapName() {
    return this.keyMapConfig.name;
  }

  addBehavior(newBehavior: Behavior) {
    this.keyMapConfig.addBehavior(newBehavior);
  }

  getBehaviorsForKey(keyNumber: number): Array<Behavior> {
    return this.keyMapConfig.behaviors.filter((behavior) => {
      return behavior.keyNumber === keyNumber;
    });
  }
}
