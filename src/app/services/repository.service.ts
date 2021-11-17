import { Injectable } from '@angular/core';
import {KeyMapConfig} from "../classes/key-map-config";
import {KeyConfig} from "../classes/key-config";
import {Behavior} from "../classes/behavior";
import {Layer} from "../classes/layer";

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  // TODO: subscribe to the subjects in the keyMapService, and save when an update is received.

  constructor() {
  }

  // temporary function, remove when github functionality works
  saveKeyMapConfig = function(keyMapConfig: KeyMapConfig) {
    console.log('saving');
    localStorage.setItem('zmk-keyConfigs', JSON.stringify(keyMapConfig.getKeyConfigs()));
    localStorage.setItem('zmk-behaviors', JSON.stringify(keyMapConfig.getBehaviors()));
    localStorage.setItem('zmk-layers', JSON.stringify(keyMapConfig.getLayers()));
    let copy = Object.assign({}, keyMapConfig);
    copy.keyConfigs = new Array<KeyConfig>();
    copy.behaviors = new Array<Behavior>();
    copy.layers = new Array<Layer>();
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
    let keyConfigsString: string = localStorage["zmk-keyConfigs"] || '[]';
    let jsKeyConfigObjects: KeyConfig[] = JSON.parse(keyConfigsString);
    jsKeyConfigObjects.forEach((obj)=>{
      let keyConfig: KeyConfig = new KeyConfig(obj.keyNumber,obj.x,obj.y,obj.angle,obj.active,obj.row,obj.column,obj.side || KeyConfig.SIDELEFT,obj.label);
      retrievedKeyMapConfig.addKeyConfig(keyConfig.row,keyConfig.column,keyConfig);
    });

    // the layers
    let layersString: string = localStorage["zmk-layers"] || '[]';
    let jsLayerObjects: Layer[] = JSON.parse(layersString);
    if (jsLayerObjects.length !== 0) {
      jsLayerObjects.forEach((obj)=>{
        let layer: Layer = new Layer(obj.name,obj.id);
        retrievedKeyMapConfig.addLayer(layer);
      });
    } else {
      let layer: Layer = new Layer('Base',0);
      retrievedKeyMapConfig.addLayer(layer);
    }

    // the behaviors
    let behaviorsString: string = localStorage["zmk-behaviors"] || '[]';
    let jsBehaviorObjects: Behavior[] = JSON.parse(behaviorsString);
    jsBehaviorObjects.forEach((obj)=>{
      let behavior: Behavior = new Behavior(obj.keyNumber, obj.type, obj.value, obj.keys, obj.layers);
      retrievedKeyMapConfig.addBehavior(behavior);
    });
    // aanvullen tot er voor iedere key in iedere layer een behavior is



    console.log('forged from storage: ', retrievedKeyMapConfig);
    return retrievedKeyMapConfig;
  }

}
