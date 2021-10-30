import { Component, OnInit } from '@angular/core';
import {KeyComponent} from "../key/key.component";
import {KeyConfig} from "../../classes/key-config";
import {ZmkConfigGeneratorService} from "../../services/zmk-config-generator.service";

@Component({
  selector: 'layout-editor',
  templateUrl: './layout-editor.component.html',
  styleUrls: ['./layout-editor.component.css']
})
export class LayoutEditorComponent implements OnInit {

  private codeFile: String[] = new Array();
  keys: KeyComponent[] = new Array();

  private keyWidth: number = 32;
  private keyHeight: number = 32;
  private xInterval: number = this.keyWidth / 4;
  private yInterval: number = this.keyHeight / 4;
  private lastSelected: KeyConfig = new KeyConfig();

  constructor(public zmkConfigGeneratorService: ZmkConfigGeneratorService) { }

  ngOnInit(): void{
  }

  startGeneration(): void {
    this.codeFile = this.zmkConfigGeneratorService.generate();
  }

  getCodeFile(): String[] {
    return this.codeFile;
  }

  buildFirmware():void {
    console.log('Building firmware');
  }

  addKey(): void {
    this.zmkConfigGeneratorService.addNewKeyConfig();
  }

  getKeyConfigs(): KeyConfig[] {
    return this.zmkConfigGeneratorService.getKeyConfigs();
  }

  getLastSelected(): KeyConfig {
    return this.lastSelected;
  }

  registerSelected(keyConfig: KeyConfig): void {
    this.lastSelected = keyConfig;
  }

  save(): void {
    this.zmkConfigGeneratorService.save();
  }

}
