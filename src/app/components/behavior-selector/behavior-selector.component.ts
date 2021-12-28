import {Component, Input, OnInit} from '@angular/core';
import {KeyConfig} from "../../classes/key-config";
import {Behavior} from "../../classes/behavior";
import {KeyMapService} from "../../services/key-map.service";
import {Subscription} from "rxjs";
import {Layer} from "../../classes/layer";

@Component({
  selector: 'behavior-selector',
  templateUrl: './behavior-selector.component.html',
  styleUrls: ['./behavior-selector.component.css']
})
export class BehaviorSelectorComponent implements OnInit {

  private subscriptions: Subscription = new Subscription();

  public selectedBehavior: Behavior = new Behavior(-1,Behavior.BEHAVIOR_TYPE_NONE,[],[],[]);
  public layers: Array<Layer> = new Array<Layer>();
  public selectedLayers: Array<Layer> = new Array<Layer>();

  constructor(public keyMapService: KeyMapService) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.keyMapService.selectedBehavior$.subscribe(behavior => {
        this.selectedBehavior = behavior;
      }));
    this.subscriptions.add(
      this.keyMapService.layers$.subscribe(layers => {
        this.layers = layers;
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public selectBehaviorType(type: string): void {
    if (this.selectedBehavior) {
      this.selectedBehavior.type = type;
    }
  }

  deleteSelectedBehavior(): void {
    console.log('delete behavior');
    this.keyMapService.deleteCurrentBehavior();
  }

  public selectValue(value: string): void {
    this.selectedBehavior.values[0] = value;
  }

  selectModifierKeypress(value: string): void {
    this.selectedBehavior.values[1] = value;
  }

  public onLayerChange(layer: Layer, event: Event): void {
    // if (event.target.checked) {
    //   this.selectedLayers.push(layer);
    // } else {
    //   this.selectedLayers.splice(this.selectedLayers.indexOf(layer), 1);
    // }
  }
}
