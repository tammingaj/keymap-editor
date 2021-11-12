import {Component, Input, OnInit} from '@angular/core';
import {KeyConfig} from "../../classes/key-config";
import {Behavior} from "../../classes/behavior";

@Component({
  selector: 'behavior-selector',
  templateUrl: './behavior-selector.component.html',
  styleUrls: ['./behavior-selector.component.css']
})
export class BehaviorSelectorComponent implements OnInit {

  public _selectedBehavior: string = 'Choose behavior';

  @Input() behavior: Behavior = new Behavior(0,'','',[],[]);

  constructor() { }

  ngOnInit(): void {
  }

  public selectBehavior(type: string): void {
    this.behavior.type = type;
  }

  deleteSelectedBehavior(): void {
    console.log('delete behavior');
  }

}
