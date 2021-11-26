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
  private currentKeySubscription: Subscription = new Subscription();

  public keys: Array<KeyConfig> = new Array<KeyConfig>();
  public currentKey: KeyConfig = KeyConfig.getInstance();
  public highlightRow: boolean = false;
  public highlightColumn: boolean = false;

  constructor(public keyMapService: KeyMapService) { }

  ngOnInit(): void {
    this.currentKey.row = -1;
    this.currentKey.column = -1;
    console.log('subscribing to keys');
    this.keysSubscription = this.keyMapService.keys$.subscribe(
      (keys) => {
        this.keys = keys;
      }
    );
    this.currentKeySubscription = this.keyMapService.currentKey$.subscribe(
      (key) => {
        this.currentKey = key;
      }
    );
  }

  ngOnDestroy(): void {
    console.log('unsubscribing from keys');
    if(this.keysSubscription) {
      this.keysSubscription.unsubscribe();
    }
    if(this.currentKeySubscription) {
      this.currentKeySubscription.unsubscribe();
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
      'rx': '4px',
      'fill': this.getFill(key),
    }
  }

  private getFill(key:KeyConfig): string {
    let color: string = '#00';
    if (key.row === this.currentKey.row && key.column === this.currentKey.column) {
      color = '#33'
    }
    if (key.row === this.currentKey.row && this.highlightRow) {
      color = color + '33'
    } else {
      color = color + '00'
    }
    if (key.column === this.currentKey.column && this.highlightColumn) {
      color = color + '33'
    } else {
      color = color + '00'
    }
    return color;
  }

  selectKey(key:KeyConfig) {
    this.keyMapService.selectConfig(key);
  }

}
