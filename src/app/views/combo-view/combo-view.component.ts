import { Component, OnInit } from '@angular/core';
import {KeyMapService} from "../../services/key-map.service";
import {Subscription} from "rxjs";
import {Layer} from "../../classes/layer";
import {KeyConfig} from "../../classes/key-config";
import {Combo} from "../../classes/combo";

@Component({
  selector: 'combo-view',
  templateUrl: './combo-view.component.html',
  styleUrls: ['./combo-view.component.css']
})
export class ComboViewComponent implements OnInit {

  private subscriptions: Subscription = new Subscription();
  private layers: Array<Layer> = new Array<Layer>();
  private activeKeys: KeyConfig[] = [];
  private combos: Combo[] = [];

  constructor(public keyMapService: KeyMapService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.keyMapService.layers$.subscribe(layers => {
      this.layers = layers;
    }));
    this.subscriptions.add(this.keyMapService.activeKeys$.subscribe(
      activeKeys => {
        this.activeKeys = activeKeys;
      }));
    this.subscriptions.add(this.keyMapService.combos$.subscribe(
      combos => {
      this.combos = combos;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  selectCombo(combo: Combo): void {
    console.log('selectCombo', combo);
  }
}
