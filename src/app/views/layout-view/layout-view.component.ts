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

  private subscriptions: Subscription = new Subscription();

  public keys: Array<KeyConfig> = new Array<KeyConfig>();
  public currentKey: KeyConfig = KeyConfig.getInstance();
  public highlightRow: boolean = false;
  public highlightColumn: boolean = false;
  public highlightLeft: boolean = false;
  public highlightRight: boolean = false;

  constructor(public keyMapService: KeyMapService) { }

  ngOnInit(): void {
    this.currentKey.row = -1;
    this.currentKey.column = -1;

    this.subscriptions.add(this.keyMapService.keys$.subscribe(
      (keys) => {
        this.keys = keys;
      }));

    this.subscriptions.add(this.keyMapService.currentKey$.subscribe(
      (key) => {
        this.currentKey = key;
      }
    ));
  }

  ngOnDestroy(): void {
    if(this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  addKey() {
    console.log('add key');
  }

  // used when using svg to render the keys
  // getStyle(key:KeyConfig): object {
  //   return {
  //     'transform-box': 'fill-box',
  //     'transform-origin': 'center',
  //     'transform': 'rotate(' + key.angle + 'deg)',
  //     'rx': '4px',
  //     'fill': this.getFill(key),
  //   }
  // }

  // used when using svg to render the keys
  // private getFill(key:KeyConfig): string {
  //   let color: string = '#00';
  //   if (key.row === this.currentKey.row && key.column === this.currentKey.column) {
  //     color = '#33'
  //   }
  //   if (key.row === this.currentKey.row && this.highlightRow) {
  //     color = color + '33'
  //   } else {
  //     color = color + '00'
  //   }
  //   if (key.column === this.currentKey.column && this.highlightColumn) {
  //     color = color + '33'
  //   } else {
  //     color = color + '00'
  //   }
  //   return color;
  // }

  // used when using svg to render the keys
  // selectKey(key:KeyConfig) {
  //   this.keyMapService.selectConfig(key);
  // }

}
