import { Injectable } from '@angular/core';
import {KeyMapService} from "./key-map.service";
import {Behavior} from "../classes/behavior";
import {Layer} from "../classes/layer";
import {KeyConfig} from "../classes/key-config";

@Injectable({
  providedIn: 'root'
})
export class ZmkConfigGeneratorService {

  private kbdConfigCodeFile: string[];
  private layers: Array<Layer> = new Array<Layer>();
  private keys: Array<KeyConfig> = new Array<KeyConfig>();
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

    this.kbdConfigCodeFile = new Array();
  }


  generate(): String[] {
    console.log('generating');
    // todo: use proper templating engine
    this.kbdConfigCodeFile = new Array();
    this.kbdConfigCodeFile.push('#include <behaviors.dtsi>');
    this.kbdConfigCodeFile.push('#include <dt-bindings/zmk/keys.h>');
    this.kbdConfigCodeFile.push('#include <dt-bindings/zmk/bt.h>');
    this.kbdConfigCodeFile.push('/ {');
    this.kbdConfigCodeFile.push('  keymap {');
    this.kbdConfigCodeFile.push('    compatible = "zmk,keymap";');
    this.kbdConfigCodeFile.push('');
    this.layers.forEach(layer => this.generateLayer(layer));
    this.kbdConfigCodeFile.push('};');
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
  }
}
