import { Injectable } from '@angular/core';
import {KeyMapService} from "./key-map.service";
import {Behavior} from "../classes/behavior";
import {Layer} from "../classes/layer";
import {KeyConfig} from "../classes/key-config";
import {Combo} from "../classes/combo";
import {ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ZmkConfigGeneratorService {

  public codeLines$ = new ReplaySubject<Array<string>>();
  public autoUpdate: boolean = true;
  public codeBackup: string = "";

  private kbdConfigCodeFile: string[];
  private layers: Array<Layer> = new Array<Layer>();
  private keys: Array<KeyConfig> = new Array<KeyConfig>();
  private combos: Array<Combo> = new Array<Combo>();
  private behaviors: Array<Behavior> = new Array<Behavior>();

  constructor(private keyMapService: KeyMapService) {
    keyMapService.layers$.subscribe(layers => {
      this.layers = layers;
      this.generateCode();
    });
    keyMapService.keys$.subscribe(keys => {
      this.keys = keys;
      this.generateCode();
    });
    keyMapService.behaviors$.subscribe(behaviors => {
      this.behaviors = behaviors;
      this.generateCode();
    });
    keyMapService.combos$.subscribe(combos => {
      this.combos = combos;
      this.generateCode();
    });
    this.kbdConfigCodeFile = [];
  }

  bluetoothUsed(): boolean {
    return (this.behaviors.find(behavior => behavior.type === "&bt ") !== undefined) ||
      (this.combos.find(combo => combo.selectedBehaviorType.startsWith("&bt ")) !== undefined);
  }

  includeReset(): boolean {
    return (this.behaviors.find(behavior => (behavior.type === "&reset")||(behavior.type === "&bootloader")) !== undefined) ||
      (this.combos.find(combo => (combo.selectedBehaviorType === "&reset")||(combo.selectedBehaviorType === "&bootloader")) !== undefined);
  }

  generateCode(): void {
    // todo: use proper templating engine
    this.kbdConfigCodeFile = [];

    // include headers
    this.kbdConfigCodeFile.push('#include <behaviors.dtsi>');
    this.kbdConfigCodeFile.push('#include <dt-bindings/zmk/keys.h>');
    if (this.bluetoothUsed()) {
      this.kbdConfigCodeFile.push('#include <dt-bindings/zmk/bt.h>');
    }
    if (this.includeReset()) {
      this.kbdConfigCodeFile.push('#include <dt-bindings/zmk/reset.h>');
    }

    this.kbdConfigCodeFile.push('');

    // define layer constants
    this.layers.forEach((layer, index) => {
      this.kbdConfigCodeFile.push('#define ' + layer.name.toUpperCase() + ' ' + index);
    })

    this.kbdConfigCodeFile.push('');
    this.kbdConfigCodeFile.push('/ {');

    // combo definitions
    if (this.combos.length > 0) {
      this.kbdConfigCodeFile.push('  combos {');
      this.kbdConfigCodeFile.push('    compatible = "zmk,combos";');
      this.combos.forEach(combo => {
        let comboFragment = this.substituteLayerIdsWithConstant(combo.generateCodeFragment());
        this.kbdConfigCodeFile.push('    ' + comboFragment)
      });
      this.kbdConfigCodeFile.push('  };');
      this.kbdConfigCodeFile.push('');
    }

    // behavior definitions
    let modifiers = this.behaviors.find(behavior => behavior.type === '&hm ');
    if (modifiers) {
      this.kbdConfigCodeFile.push('  behaviors {');
      this.kbdConfigCodeFile.push('    hm: homerow_mods {');
      this.kbdConfigCodeFile.push('      compatible = "zmk,behavior-hold-tap";');
      this.kbdConfigCodeFile.push('      label = "HOMEROW_MODS";');
      this.kbdConfigCodeFile.push('      #binding-cells = <2>;');
      this.kbdConfigCodeFile.push('      tapping-term-ms = <250>;');
      this.kbdConfigCodeFile.push('      quick_tap_ms = <0>;');
      this.kbdConfigCodeFile.push('      flavor = "tap-preferred";');
      this.kbdConfigCodeFile.push('      bindings = <&kp>, <&kp>;');
      this.kbdConfigCodeFile.push('    };');
      this.kbdConfigCodeFile.push('  };');
    }

    // keymap definition
    this.kbdConfigCodeFile.push('  keymap {');
    this.kbdConfigCodeFile.push('    compatible = "zmk,keymap";');
    this.kbdConfigCodeFile.push('');
    this.layers.forEach(layer => this.generateLayer(layer));
    this.kbdConfigCodeFile.push('  };');

    this.kbdConfigCodeFile.push('};');

    this.codeLines$.next(this.kbdConfigCodeFile);
  }

  private generateLayer(layer: Layer) {
    this.kbdConfigCodeFile.push('    ' + layer.name + '_layer {');
    this.kbdConfigCodeFile.push('      bindings = <');
    let bindings: string = '        ';
    this.behaviors
      .filter(behavior => behavior.layerId === layer.id)
      .forEach(behavior => {
        bindings += this.substituteLayerIdsWithConstant(behavior.generateCode()) + ' ';
      });
    this.kbdConfigCodeFile.push(bindings);
    this.kbdConfigCodeFile.push('      >;');
    this.kbdConfigCodeFile.push('    };');
    this.kbdConfigCodeFile.push('');
  }

  private substituteLayerIdsWithConstant(codeFragment: string): string {
    this.layers.forEach(layer => {
      codeFragment = codeFragment.replace(layer.id, layer.name.toUpperCase());
    });
    return codeFragment;
  }
}
