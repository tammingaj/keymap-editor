import {Component, Input, OnInit} from '@angular/core';
import {KeyConfig} from "../../classes/key-config";
import {KeyMapService} from "../../services/key-map.service";
import {Subscription} from "rxjs";
import {Behavior} from "../../classes/behavior";

@Component({
  selector: 'key-details',
  templateUrl: './key-details.component.html',
  styleUrls: ['./key-details.component.css']
})
export class KeyDetailsComponent implements OnInit {

  private currentKeySubscription: Subscription = new Subscription();
  private currentKeyBehaviorsSubscription: Subscription = new Subscription();
  private selectedBehaviorSubscription: Subscription = new Subscription();
  public config: KeyConfig = KeyConfig.getInstance();
  public selectedBehavior: Behavior|undefined = undefined;
  public behaviors: Array<Behavior> = new Array<Behavior>();

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
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.currentKeySubscription.unsubscribe();
    this.selectedBehaviorSubscription.unsubscribe();
    this.currentKeyBehaviorsSubscription.unsubscribe();
  }

  selectBehavior(behavior: Behavior) {
    console.log('behavior selected: ',behavior);
    this.keyMapService.selectBehavior(behavior);
  }

  addBehavior():void {
    console.log('add behavior');
    let newBehavior: Behavior = new Behavior(this.config.keyNumber, Behavior.BEHAVIOR_TYPE_NONE, '', [], []);
    console.log(newBehavior);
    this.keyMapService.addBehavior(newBehavior);
  }

  public getBehaviors(): Array<Behavior> {
    return this.behaviors;
  }

}
