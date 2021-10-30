import {Component, Input, OnInit} from '@angular/core';
import {KeyConfig} from "../../classes/key-config";

@Component({
  selector: 'key-details',
  templateUrl: './key-details.component.html',
  styleUrls: ['./key-details.component.css']
})
export class KeyDetailsComponent implements OnInit {

  @Input() config: KeyConfig = new KeyConfig();

  constructor() { }

  ngOnInit(): void {
  }

}
