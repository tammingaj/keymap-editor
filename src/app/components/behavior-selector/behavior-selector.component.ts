import {Component, Input, OnInit} from '@angular/core';
import {KeyConfig} from "../../classes/key-config";
import {Behavior} from "../../classes/behavior";
import {KeyMapService} from "../../services/key-map.service";

@Component({
  selector: 'behavior-selector',
  templateUrl: './behavior-selector.component.html',
  styleUrls: ['./behavior-selector.component.css']
})
export class BehaviorSelectorComponent implements OnInit {

  public _selectedBehavior: string = 'Choose behavior';
  public selectedBehavior: Behavior = new Behavior(-1,Behavior.BEHAVIOR_TYPE_NONE,'',[],[]);

  constructor(public keyMapService: KeyMapService) { }

  ngOnInit(): void {
    this.keyMapService.selectedBehavior$.subscribe(behavior => {
      console.log('show behavior ',behavior);
      this.selectedBehavior = behavior;
    });
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

}
