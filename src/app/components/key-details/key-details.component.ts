import {Component, Input, OnInit} from '@angular/core';
import {KeyConfig} from "../../classes/key-config";
import {KeyMapService} from "../../services/key-map.service";
import {Subscription} from "rxjs";
import {Behavior} from "../../classes/behavior";
import {Layer} from "../../classes/layer";
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'key-details',
  templateUrl: './key-details.component.html',
  styleUrls: ['./key-details.component.css']
})
export class KeyDetailsComponent implements OnInit {

  private currentKeySubscription: Subscription = new Subscription();
  private currentKeyBehaviorsSubscription: Subscription = new Subscription();
  private selectedBehaviorSubscription: Subscription = new Subscription();
  private selectedLayerSubscription: Subscription = new Subscription();
  public config: KeyConfig = KeyConfig.getInstance();
  public selectedBehavior: Behavior|undefined = undefined;
  public behaviors: Array<Behavior> = new Array<Behavior>();
  public selectedLayer: Layer = new Layer('',uuidv4());

  private index: number = 0;

  constructor(public keyMapService: KeyMapService) { }

  ngOnInit(): void {
    // subscribe to the current key
    this.currentKeySubscription = this.keyMapService.currentKey$.subscribe((keyConfig: KeyConfig) => {
      console.log('detailscomponent received selected keyConfig: ',keyConfig);
      this.config = keyConfig;
    });
    // subscribe to the current key behaviors
    this.currentKeyBehaviorsSubscription = this.keyMapService.currentKeyBehaviors$.subscribe((behaviors: Array<Behavior>) => {
      console.log('detailscomponent received behaviors for current key: ',behaviors);
      this.behaviors = behaviors;
    });
    // subscribe to the selected behavior
    this.selectedBehaviorSubscription = this.keyMapService.selectedBehavior$.subscribe((behavior: Behavior) => {
      console.log('detailscomponent received selected behavior: ',behavior);
      this.selectedBehavior = behavior;
    });
    // subscribe to the selected layer
    this.selectedLayerSubscription = this.keyMapService.currentLayer$.subscribe((layer: Layer) => {
      console.log('detailscomponent received selected layer: ',layer);
      this.selectedLayer = layer;
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.currentKeySubscription.unsubscribe();
    this.selectedBehaviorSubscription.unsubscribe();
    this.currentKeyBehaviorsSubscription.unsubscribe();
    this.selectedLayerSubscription.unsubscribe();
  }

  selectBehavior(behavior: Behavior) {
    console.log('behavior selected: ',behavior);
    this.keyMapService.selectBehavior(behavior);
  }

  addBehavior():void {
    let newBehavior: Behavior = new Behavior(this.config.keyNumber, Behavior.BEHAVIOR_TYPE_NONE, [], [], [this.selectedLayer.id]);
    this.keyMapService.addBehavior(newBehavior);
    this.selectBehavior(newBehavior);
  }

}