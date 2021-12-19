import { Injectable } from '@angular/core';
import {KeyMapService} from "./key-map.service";
import {Behavior} from "../classes/behavior";
import {Layer} from "../classes/layer";
import {KeyConfig} from "../classes/key-config";
import {Combo} from "../classes/combo";

@Injectable({
  providedIn: 'root'
})
export class ZmkConfigGeneratorService {

  private kbdConfigCodeFile: string[];
  private layers: Array<Layer> = new Array<Layer>();
  private keys: Array<KeyConfig> = new Array<KeyConfig>();
  private combos: Array<Combo> = new Array<Combo>();
  private behaviors: Array<Behavior> = new Array<Behavior>();

  constructor(private keyMapService: KeyMapService) {
    keyMapService.layers$.subscribe(layers => {
      this.layers = layers;
    });
    keyMapService.keys$.subscribe(keys => {
      this.keys = keys;
    });
    keyMapService.behaviors$.subscribe(behaviors => {
      this.behaviors = behaviors;
    });
    keyMapService.combos$.subscribe(combos => {
      this.combos = combos;
    });
    this.kbdConfigCodeFile = [];
  }


  generate(): String[] {
    console.log('generating');
    // todo: use proper templating engine
    this.kbdConfigCodeFile = [];

    // include headers
    this.kbdConfigCodeFile.push('#include \<behaviors.dtsi\>');
    this.kbdConfigCodeFile.push('#include \<dt-bindings\/zmk/keys.h\>');
    this.kbdConfigCodeFile.push('#include \<dt-bindings\/zmk\/bt.h\>');
    this.kbdConfigCodeFile.push('/ {');

    // combo definitions
    this.kbdConfigCodeFile.push('  combos {');
    this.kbdConfigCodeFile.push('    compatible = "zmk,combos";');
    this.combos.forEach(combo => this.kbdConfigCodeFile.push('    ' + combo.generateCodeFragment()));
    this.kbdConfigCodeFile.push('  };');
    this.kbdConfigCodeFile.push('');

    // keymap definition
    this.kbdConfigCodeFile.push('  keymap {');
    this.kbdConfigCodeFile.push('    compatible = "zmk,keymap";');
    this.kbdConfigCodeFile.push('');
    this.layers.forEach(layer => this.generateLayer(layer));
    this.kbdConfigCodeFile.push('  };');

    this.kbdConfigCodeFile.push('};');

    return this.kbdConfigCodeFile;
  }

  generateLayer(layer: Layer) {
    this.kbdConfigCodeFile.push('    ' + layer.name + '_layer {');
    this.kbdConfigCodeFile.push('      bindings = <');
    let bindings: string = '        ';
    this.behaviors.filter(behavior => behavior.layers.indexOf(layer.id) >= 0).forEach(behavior => {
      bindings += behavior.generateCode() + ' ';
    });
    this.kbdConfigCodeFile.push(bindings);
    this.kbdConfigCodeFile.push('      >;');
    this.kbdConfigCodeFile.push('    };');
    this.kbdConfigCodeFile.push('');
  }
}
