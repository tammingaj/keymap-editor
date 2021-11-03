import {Component, Input, OnInit} from '@angular/core';
import {KeyConfig} from "../../classes/key-config";
import {KeyMapService} from "../../services/key-map.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'key-details',
  templateUrl: './key-details.component.html',
  styleUrls: ['./key-details.component.css']
})
export class KeyDetailsComponent implements OnInit {

  public config: KeyConfig = new KeyConfig();
  private subscription: Subscription = new Subscription();

  constructor(private keyMapService: KeyMapService) { }

  ngOnInit(): void {
    this.subscription = this.keyMapService.selected$.subscribe((keyConfig) => {
      console.log('detailscomponent received selected key: ',keyConfig);
      this.config = keyConfig;
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
