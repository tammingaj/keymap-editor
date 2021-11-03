import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZmkConfigGeneratorService {

  private kbdConfigCodeFile: string[];

  constructor() {
    this.kbdConfigCodeFile = new Array();
  }


  generate(): String[] {
    console.log('generating');
    this.kbdConfigCodeFile = new Array();
    this.kbdConfigCodeFile.push('#include <behaviors.dtsi>');
    this.kbdConfigCodeFile.push('#include <dt-bindings/zmk/keys.h>');
    this.kbdConfigCodeFile.push('#include <dt-bindings/zmk/bt.h>');
    this.kbdConfigCodeFile.push('/ {');
    this.kbdConfigCodeFile.push('};');

    return this.kbdConfigCodeFile;
  }

}
