import { Component, OnInit } from '@angular/core';
import {KeyMapService} from "../../services/key-map.service";
import {KeyConfig} from "../../classes/key-config";

@Component({
  selector: 'layout-view',
  templateUrl: './layout-view.component.html',
  styleUrls: ['./layout-view.component.css']
})
export class LayoutViewComponent implements OnInit {

  public keys: Array<KeyConfig> = new Array<KeyConfig>()

  constructor(public keyMapService: KeyMapService) { }

  ngOnInit(): void {
    this.keyMapService.keys$.subscribe(
      (keys) => {
        this.keys = keys;
      }
    );
  }

  addKey() {
    console.log('add key');
  }

  getKeyConfigs(): Array<KeyConfig> {
    return this.keyMapService.getKeyConfigs();
  }

  getStyle(key:KeyConfig): object {
    return {
      'transform-box': 'fill-box',
      'transform-origin': 'center',
      'transform': 'rotate(' + key.angle + 'deg)',
      'rx': '4px'
    }
  }

  selectKey(key:KeyConfig) {
    this.keyMapService.selectConfig(key);
  }

}
