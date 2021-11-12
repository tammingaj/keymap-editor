import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'behavior-selector',
  templateUrl: './behavior-selector.component.html',
  styleUrls: ['./behavior-selector.component.css']
})
export class BehaviorSelectorComponent implements OnInit {

  public _selectedBehavior: string = 'Choose behavior';

  constructor() { }

  ngOnInit(): void {
  }

  public selectBehavior(behavior: string): void {
    this._selectedBehavior = behavior;
  }

  deleteSelectedBehavior(): void {
    console.log('delete behavior');
  }
}
