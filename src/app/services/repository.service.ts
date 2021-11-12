import { Injectable } from '@angular/core';
import {KeyMapConfig} from "../classes/key-map-config";
import {KeyConfig} from "../classes/key-config";
import {Behavior} from "../classes/behavior";

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor() {
    // let retrievedString: string = localStorage["keyMapConfig"];
    // let jsObject: Object = JSON.parse(retrievedString);
    //
    // let keyMapConfig: KeyMapConfig = jsObject as KeyMapConfig;
    // console.log('retrieved from storage: ',keyMapConfig);
  }

  // temporary function, remove when github functionality works
  saveKeyMapConfig = function(keyMapConfig: KeyMapConfig) {
    console.log('saving');
    localStorage.setItem('zmk-keyConfigs', JSON.stringify(keyMapConfig.getKeyConfigs()));
    localStorage.setItem('zmk-behaviors', JSON.stringify(keyMapConfig.getBehaviors()));
    let copy = Object.assign({}, keyMapConfig);
    copy.keyConfigs = new Array<KeyConfig>();
    copy.behaviors = new Array<Behavior>();
    localStorage.setItem('zmk-keymapConfig', JSON.stringify(copy));
  }

  // temporary function, remove when github functionality works
  loadKeyMapConfig = function(): KeyMapConfig {
    // the keymap config itself
    let keyMapConfigString: string = localStorage["zmk-keymapConfig"];
    if ( typeof keyMapConfigString === 'undefined') {
      console.log('creating dummy keymapconfig');
      return new KeyMapConfig('Dummy');
    }
    let retrievedKeyMapConfig: KeyMapConfig = Object.assign(new KeyMapConfig(''), JSON.parse(keyMapConfigString));

    // the keys
    let keyConfigsString: string = localStorage["zmk-keyConfigs"];
    let jsKeyConfigObjects: KeyConfig[] = JSON.parse(keyConfigsString);
    jsKeyConfigObjects.forEach((obj)=>{
      let keyConfig: KeyConfig = new KeyConfig(obj.keyNumber,obj.x,obj.y,obj.angle,obj.active,obj.row,obj.column,obj.label);
      retrievedKeyMapConfig.addKeyConfig(keyConfig.row,keyConfig.column,keyConfig);
    });


    // the behaviors
    let behaviorsString: string = localStorage["zmk-behaviors"];
    let jsBehaviorObjects: Behavior[] = JSON.parse(behaviorsString);
    jsBehaviorObjects.forEach((obj)=>{
      let behavior: Behavior = new Behavior(obj.keyNumber, obj.type, obj.value, obj.keys, obj.layers);
      retrievedKeyMapConfig.addBehavior(behavior);
    });

    console.log('forged from storage: ', retrievedKeyMapConfig);
    return retrievedKeyMapConfig;
  }

}
