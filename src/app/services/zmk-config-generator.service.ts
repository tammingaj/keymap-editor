import { Injectable } from '@angular/core';
import {RepositoryService} from "./repository.service";
import {KeyConfig} from "../classes/key-config";

@Injectable({
  providedIn: 'root'
})
export class ZmkConfigGeneratorService {

  private index: number = 0;
  private kbdConfigCode: string[];
  private keyConfigs: KeyConfig[];
  private lastSelectedConfig: KeyConfig;

  constructor(private repositoryService: RepositoryService) {

    this.kbdConfigCode = new Array();
    this.keyConfigs = repositoryService.load();
    this.index = this.keyConfigs.length;
    this.lastSelectedConfig = this.keyConfigs[0] || new KeyConfig();
  }


  generate(): String[] {
    console.log('generating');
    this.kbdConfigCode = new Array();
    this.kbdConfigCode.push('#include <behaviors.dtsi>');
    this.kbdConfigCode.push('#include <dt-bindings/zmk/keys.h>');
    this.kbdConfigCode.push('#include <dt-bindings/zmk/bt.h>');
    this.kbdConfigCode.push('/ {');
    this.kbdConfigCode.push('};');

    return this.kbdConfigCode;
  }

  getKeyConfigs(): KeyConfig[] {
    return this.keyConfigs;
  }

  addNewKeyConfig(): KeyConfig {
    let config = new KeyConfig();
    config.id = this.index++;
    config.row = this.keyConfigs.length;
    this.keyConfigs.push(config);
    this.lastSelectedConfig = config;
    return config;
  }

  // getLastSelected(): KeyConfig {
  //   return this.lastSelectedConfig;
  // }

  save(): void {
    this.repositoryService.save(this.keyConfigs);
  }

  remove(config: KeyConfig) {
    this.keyConfigs = this.keyConfigs.filter(obj => obj !== config);
  }

}
