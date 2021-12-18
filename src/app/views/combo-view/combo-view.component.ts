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
  public newComboName: string = "";
  public selectedCombo: Combo = new Combo(0,'',50,'',[],[]);

  constructor(public keyMapService: KeyMapService) { }

  ngOnInit(): void {
    this.keyMapService.deselectKeys();
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
    this.subscriptions.add(this.keyMapService.selectedCombo$.subscribe(
      combo => {
        this.selectedCombo = combo;
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  addCombo(): void {
    let newCombo = new Combo(0,this.newComboName,50,'',[],[]);
    this.keyMapService.addCombo(newCombo);
    this.newComboName = "";
  }
}
