import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {KeyMapService} from "../../services/key-map.service";
import {Subscription} from "rxjs";
import {Layer} from "../../classes/layer";
import {KeyConfig} from "../../classes/key-config";
import {Combo} from "../../classes/combo";

@Component({
  selector: 'combo-form',
  templateUrl: './combo-form.component.html',
  styleUrls: ['./combo-form.component.css']
})
export class ComboFormComponent implements OnInit {

  private subscriptions: Subscription = new Subscription();
  public layers: Array<Layer> = new Array<Layer>();
  private activeKeys: KeyConfig[] = [];
  public combo: Combo = new Combo(0,'',50,'', '',[],[]);

  constructor(private formBuilder: FormBuilder, private keyMapService: KeyMapService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.keyMapService.layers$.subscribe(layers => {
      this.layers = layers;
    }));
    this.subscriptions.add(this.keyMapService.activeKeys$.subscribe(
      activeKeys => {
        this.activeKeys = activeKeys;
        this.combo.keys = [];
        this.activeKeys.forEach(key => {
          this.combo.keys.push(key.keyNumber);
        });
      }));
    this.subscriptions.add(this.keyMapService.selectedCombo$.subscribe(
      combo => {
        this.combo = combo;
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public onLayerChange(layer: Layer, event: Event): void {
    console.log('onLayerChange', layer, event);
    // @ts-ignore
    if (event.target.checked) {
      this.combo.layers.push(layer.id);
    } else {
      this.combo.layers.splice(this.combo.layers.indexOf(layer.id), 1);
    }
  }

}
