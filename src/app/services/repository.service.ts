import { Injectable } from '@angular/core';
import {KeyConfig} from "../classes/key-config";

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor() {
    this.load();
  }

  // temporary function, remove when github functionality works
  save = function(keyConfigs: KeyConfig[]): void {
    localStorage.setItem('keyConfigs', JSON.stringify(keyConfigs));
  }

  // temporary function, remove when github functionality works
  load = function(): KeyConfig[] {
    let saved: string = localStorage["keyConfigs"];
    if ( typeof saved === 'undefined') {
      return new Array<KeyConfig>();
    }
    console.log(saved);
    return JSON.parse(saved);
  }
}
