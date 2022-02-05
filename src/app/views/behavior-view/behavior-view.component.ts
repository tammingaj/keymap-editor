import { Component, OnInit } from '@angular/core';
import {Layer} from "../../classes/layer";
import {Subscription} from "rxjs";
import {v4 as uuidv4} from "uuid";
import {KeyMapService} from "../../services/key-map.service";
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'behavior-view',
  templateUrl: './behavior-view.component.html',
  styleUrls: ['./behavior-view.component.css']
})
export class BehaviorViewComponent implements OnInit {

  private subscriptions: Subscription = new Subscription();
  private layers: Array<Layer> = new Array<Layer>();
  public currentLayer: Layer = new Layer('dummy layer',uuidv4());

  public faArrowRight =  faArrowRight;
  public faArrowLeft =  faArrowLeft;


  constructor(public keyMapService: KeyMapService) {
  }

  ngOnInit(): void {
    this.keyMapService.setSingleSelect(true);
    this.subscriptions.add(this.keyMapService.layers$.subscribe(layers => {
      this.layers = layers;
    }));
    this.subscriptions.add(this.keyMapService.currentLayer$.subscribe(currentLayer => {
      this.currentLayer = currentLayer;
    }));
    this.keyMapService.deselectKeys();
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

}
