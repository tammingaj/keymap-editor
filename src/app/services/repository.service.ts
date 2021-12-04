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

  // ultimately this should save the configuration to github
  saveKeyMapConfig = function(keyMapConfig: KeyMapConfig) {
    console.log('saving');
    localStorage.setItem('zmk-keyConfigs', JSON.stringify(keyMapConfig.getKeyConfigs()));
    localStorage.setItem('zmk-behaviors', JSON.stringify(keyMapConfig.getBehaviors()));
    localStorage.setItem('zmk-layers', JSON.stringify(keyMapConfig.getLayers()));
    // for now we store the keys, layers and behaviors in their own localstorage variables
    // and clear them from the keyMapConfig object.
    let copy = Object.assign({}, keyMapConfig);
    copy.keyConfigs = new Array<KeyConfig>();
    copy.behaviors = new Array<Behavior>();
    copy.layers = new Array<Layer>();
    localStorage.setItem('zmk-keymapConfig', JSON.stringify(copy));
  }

  // temporary function, remove when github functionality works
  loadKeyMapConfig = function(configParam: string): KeyMapConfig {
    let fromLocalStorage = configParam === '';
    console.log('loading from ' + (fromLocalStorage ? 'localStorage' : 'configParam'));

    let keyMapConfigString: string = fromLocalStorage ? localStorage["zmk-keymapConfig"] : configParam;

    if ( typeof keyMapConfigString === 'undefined') {
      console.log('creating dummy keymapconfig');
      return new KeyMapConfig('Dummy');
    }

    let retrievedKeyMapConfig: KeyMapConfig = Object.assign(new KeyMapConfig(''), JSON.parse(keyMapConfigString));

    let jsKeyConfigObjects: KeyConfig[];
    let jsLayerObjects: Layer[];
    let jsBehaviorObjects: Behavior[];

    if (fromLocalStorage) {
      let keyConfigsString: string = localStorage["zmk-keyConfigs"] || '[]';
      jsKeyConfigObjects = JSON.parse(keyConfigsString);
      let layersString: string = localStorage["zmk-layers"] || '[]';
      jsLayerObjects = JSON.parse(layersString);
      let behaviorsString: string = localStorage["zmk-behaviors"] || '[]';
      jsBehaviorObjects = JSON.parse(behaviorsString);
    } else {
      jsKeyConfigObjects = retrievedKeyMapConfig.keyConfigs;
      jsLayerObjects = retrievedKeyMapConfig.layers;
      jsBehaviorObjects = retrievedKeyMapConfig.behaviors;
    }

    retrievedKeyMapConfig.keyConfigs = new Array<KeyConfig>();
    retrievedKeyMapConfig.layers = new Array<Layer>();
    retrievedKeyMapConfig.behaviors = new Array<Behavior>();

    // convert the keys to typed KeyConfig objects
    jsKeyConfigObjects.forEach((obj)=>{
      let keyConfig: KeyConfig = new KeyConfig(obj.keyNumber,obj.x,obj.y,obj.angle,obj.active,obj.row,obj.column,obj.side || KeyConfig.SIDELEFT,obj.label);
      retrievedKeyMapConfig.addKeyConfig(keyConfig.row,keyConfig.column,keyConfig);
    });

    // convert the layers to typed Layer objects
    jsLayerObjects.forEach((obj)=>{
      let layer: Layer = new Layer(obj.name,obj.id);
      retrievedKeyMapConfig.addLayer(layer);
    });

    // convert the behaviors to typed Behavior objects
    jsBehaviorObjects.forEach((obj)=>{
      let behavior: Behavior = new Behavior(obj.keyNumber, obj.type, obj.value, obj.keys, obj.layers);
      retrievedKeyMapConfig.addBehavior(behavior);
    });

    return retrievedKeyMapConfig;
  }

}
