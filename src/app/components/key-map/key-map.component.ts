import { Component, OnInit } from '@angular/core';
import {KeyConfig} from "../../classes/key-config";
import {KeyMapService} from "../../services/key-map.service";
import {ZmkConfigGeneratorService} from "../../services/zmk-config-generator.service";
import {Layer} from "../../classes/layer";
import {v4 as uuidv4} from 'uuid';
import {Subscription} from "rxjs";

@Component({
  selector: 'key-map',
  templateUrl: './key-map.component.html',
  styleUrls: ['./key-map.component.css']
})
export class KeyMapComponent implements OnInit {

  private subscriptions: Subscription = new Subscription();
  private layers: Array<Layer> = new Array<Layer>();
  public currentLayer: Layer = new Layer('dummy layer',uuidv4());

  private codeFile: String[] = new Array();
  private activeKeys: KeyConfig[] = new Array();
  private currentKey: KeyConfig = KeyConfig.getInstance();

  public newLayerName: string = '';

  constructor(public keyMapService: KeyMapService, private zmkConfigGeneratorService: ZmkConfigGeneratorService) {
  }

  ngOnInit(): void {
    this.subscriptions.add(this.keyMapService.layers$.subscribe(layers => {
      this.layers = layers;
      }));
    this.subscriptions.add(this.keyMapService.currentLayer$.subscribe(currentLayer => {
      this.currentLayer = currentLayer;
      }));
    this.subscriptions.add(this.keyMapService.activeKeys$.subscribe(
      activeKeys => {
        this.activeKeys = activeKeys;
      }));
    this.subscriptions.add(this.keyMapService.currentKey$.subscribe(
      currentKey => {
        this.currentKey = currentKey;
      }));
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
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

  getCodeFileAsHtml(): String {
    return this.codeFile.join('<br>').replace(' ', '&nbsp;');
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
    this.keyMapService.addLayer(this.newLayerName);
  }

  selectLayer(layer:Layer): void{
    this.keyMapService.selectLayer(layer);
  }

  getKeymapName(): string {
    return this.keyMapService.getKeymapName();
  }
}
