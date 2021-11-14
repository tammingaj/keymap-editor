import { Component, OnInit } from '@angular/core';
import {KeyConfig} from "../../classes/key-config";
import {KeyMapService} from "../../services/key-map.service";
import {ZmkConfigGeneratorService} from "../../services/zmk-config-generator.service";

@Component({
  selector: 'key-map',
  templateUrl: './key-map.component.html',
  styleUrls: ['./key-map.component.css']
})
export class KeyMapComponent implements OnInit {

  private codeFile: String[] = new Array();
  public activeLayer: string = '';
  private activeKeys: KeyConfig[] = new Array();
  private currentKey: KeyConfig = KeyConfig.getInstance();

  constructor(private keyMapService: KeyMapService, private zmkConfigGeneratorService: ZmkConfigGeneratorService) {

  }

  ngOnInit(): void {
    this.activeLayer = this.keyMapService.getLayers()[0];
    this.keyMapService.activeKeys$.subscribe(
      activeKeys => {
        this.activeKeys = activeKeys;
      }
    );
    this.keyMapService.currentKey$.subscribe(
      currentKey => {
        this.currentKey = currentKey;
      }
    );
  }

  buildFirmware():void {
    console.log('Building firmware');
  }

  startGeneration(): void {
    this.codeFile = this.zmkConfigGeneratorService.generate();
  }

  save(): void {
    this.keyMapService.saveKeyMapConfig();
  }

  getCodeFile(): String[] {
    return this.codeFile;
  }

  getActiveKeys(): KeyConfig[] {
    return this.activeKeys;
  }

  getCurrentKey(): KeyConfig {
    return this.currentKey;
  }

  getLayers(): string[]{
    return this.keyMapService.getLayers().filter((l)=>{return l !== this.activeLayer});
  }

  addLayer(): void {
    console.log('adding new layer');
    // todo: add a new layer via keymapservice
  }

  selectLayer(layer:string): void{
    this.activeLayer = layer;
    // todo: select the active layer via keymapservice
  }

  getKeymapName(): string {
    return this.keyMapService.getKeymapName();
  }
}
