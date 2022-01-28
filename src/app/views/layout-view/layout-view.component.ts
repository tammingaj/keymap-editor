import { Component, OnInit } from '@angular/core';
import {KeyMapService} from "../../services/key-map.service";
import {KeyConfig} from "../../classes/key-config";
import {Subscription} from "rxjs";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Validators} from "../../classes/validators";

@Component({
  selector: 'layout-view',
  templateUrl: './layout-view.component.html',
  styleUrls: ['./layout-view.component.css']
})
export class LayoutViewComponent implements OnInit {

  private subscriptions: Subscription = new Subscription();

  public keys: Array<KeyConfig> = new Array<KeyConfig>();
  public currentKey: KeyConfig = KeyConfig.getInstance();
  public faArrowRight = faArrowRight;
  constructor(public keyMapService: KeyMapService) { }

  ngOnInit(): void {
    console.log('LayoutViewComponent.ngOnInit()');
    this.keyMapService.setSingleSelect(false);
    this.currentKey.row = -1;
    this.currentKey.column = -1;

    this.subscriptions.add(this.keyMapService.keys$.subscribe(
      (keys) => {
        this.keys = keys;
      }));

    this.subscriptions.add(this.keyMapService.currentKey$.subscribe(
      (key) => {
        this.currentKey = key;
      }
    ));
  }

  ngOnDestroy(): void {
    if(this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  keyPressAlphanumeric = Validators.keyPressAlphanumeric;
}
