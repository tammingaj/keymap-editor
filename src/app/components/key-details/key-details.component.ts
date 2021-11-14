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

  public config: KeyConfig = KeyConfig.getInstance();
  private subscription: Subscription = new Subscription();
  public selectedBehavior: Behavior|undefined = undefined;

  private index: number = 0;

  constructor(private keyMapService: KeyMapService) { }

  ngOnInit(): void {
    this.subscription = this.keyMapService.currentKey$.subscribe((keyConfig: KeyConfig) => {
      console.log('detailscomponent received selected keyConfig: ',keyConfig);
      this.config = keyConfig;
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  selectBehavior(behavior: Behavior) {
    console.log('behavior selected: ',behavior);
    this.selectedBehavior = behavior;
  }

  addBehavior():void {
    console.log('add behavior');
    let newBehavior: Behavior = new Behavior(this.config.keyNumber, Behavior.BEHAVIOR_TYPE_NONE, '', [], []);
    console.log(newBehavior);
    this.keyMapService.addBehavior(newBehavior);
    this.selectedBehavior = newBehavior;
  }

  deleteSelectedBehavior():void {
    if(this.selectedBehavior) {
      // let index: number = this.config.behaviors.indexOf(this.selectedBehavior);
      // this.config.behaviors.splice(index,1);
      // this.selectedBehavior = undefined;
    }
  }

  getBehaviors():Array<Behavior> {
    return this.keyMapService.getBehaviorsForKey(this.config.keyNumber);
  }

}
