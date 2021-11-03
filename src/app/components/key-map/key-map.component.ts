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

  constructor(private keyMapService: KeyMapService, private zmkConfigGeneratorService: ZmkConfigGeneratorService) { }

  ngOnInit(): void {
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

}
