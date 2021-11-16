import { Component, OnInit } from '@angular/core';
import {KeyConfig} from "../../classes/key-config";
import {KeyMapService} from "../../services/key-map.service";
import {ZmkConfigGeneratorService} from "../../services/zmk-config-generator.service";
import {Layer} from "../../classes/layer";

@Component({
  selector: 'key-map',
  templateUrl: './key-map.component.html',
  styleUrls: ['./key-map.component.css']
})
export class KeyMapComponent implements OnInit {

  private layers: Array<Layer> = new Array<Layer>();
  public currentLayer: Layer = new Layer('dummy layer',0);

  private codeFile: String[] = new Array();
  private activeKeys: KeyConfig[] = new Array();
  private currentKey: KeyConfig = KeyConfig.getInstance();

  constructor(private keyMapService: KeyMapService, private zmkConfigGeneratorService: ZmkConfigGeneratorService) {

  }

  ngOnInit(): void {
    this.keyMapService.layers$.subscribe(layers => {
      console.log('key-map component received layers from service');
      this.layers = layers;
    });
    this.keyMapService.currentLayer$.subscribe(currentLayer => {
      console.log('key-map component received active layer from service');
      this.currentLayer = currentLayer;
    });
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

  getLayers(): Array<Layer>{
    return this.layers;
  }

  addLayer(): void {
    console.log('adding new layer');
    // todo: add a new layer via keymapservice
  }

  selectLayer(layer:Layer): void{
    this.keyMapService.selectLayer(layer);
  }

  getKeymapName(): string {
    return this.keyMapService.getKeymapName();
  }
}
