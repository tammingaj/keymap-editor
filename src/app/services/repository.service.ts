import { Injectable } from '@angular/core';
import {KeyMapConfig} from "../classes/key-map-config";

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor() {}

  // temporary function, remove when github functionality works
  saveKeyMapConfig = function(keyMapConfig: KeyMapConfig) {
    localStorage.setItem('keyMapConfig', JSON.stringify(keyMapConfig));
  }

  // temporary function, remove when github functionality works
  loadKeyMapConfig = function(): KeyMapConfig {
    let retrievedString: string = localStorage["keyMapConfig"];
    if ( typeof retrievedString === 'undefined') {
      console.log('creating dummy keymapconfig');
      return new KeyMapConfig('Dummy');
    }
    let retrieved: KeyMapConfig = Object.assign(new KeyMapConfig(''), JSON.parse(retrievedString));
    return retrieved;
  }

}
