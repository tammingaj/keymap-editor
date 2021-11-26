import { Component, OnInit } from '@angular/core';
import {KeyMapService} from "../../services/key-map.service";
import {KeyConfig} from "../../classes/key-config";
import {Subscription} from "rxjs";

@Component({
  selector: 'layout-view',
  templateUrl: './layout-view.component.html',
  styleUrls: ['./layout-view.component.css']
})
export class LayoutViewComponent implements OnInit {

  private keysSubscription: Subscription = new Subscription();

  public keys: Array<KeyConfig> = new Array<KeyConfig>()

  constructor(public keyMapService: KeyMapService) { }

  ngOnInit(): void {
    console.log('subscribing to keys');
    this.keysSubscription = this.keyMapService.keys$.subscribe(
      (keys) => {
        this.keys = keys;
      }
    );
  }

  ngOnDestroy(): void {
    console.log('unsubscribing from keys');
    if(this.keysSubscription) {
      this.keysSubscription.unsubscribe();
    }
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
