import { Injectable } from '@angular/core';
import {RepositoryService} from "./repository.service";
import {KeyMapConfig} from "../classes/key-map-config";
import {KeyConfig} from "../classes/key-config";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class KeyMapService {

  private selectedSource = new Subject<KeyConfig>();
  public selected$ = this.selectedSource.asObservable();

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
        let keyConfig = new KeyConfig();
        keyConfig.label = '' + index;
        keyConfig.id = index++;
        keyConfig.row = row;
        keyConfig.column = col;
        keyConfig.x = col * 50;
        keyConfig.y = row * 50;
        this.keyMapConfig.addKeyConfig(row,col,keyConfig);
      }
    }
    console.log('result: ',this.keyMapConfig);
  }

  public saveKeyMapConfig():void {
    this.repositoryService.saveKeyMapConfig(this.keyMapConfig);
  }

  public getKeyConfigs(): Array<KeyConfig> {
    return this.keyMapConfig.getKeyConfigs();
  }

  public selectConfig(config: KeyConfig): void {
    console.log('service signals selection of: ',config);
    this.selectedSource.next(config);
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
}
