import {Component, OnInit} from '@angular/core';
import {Behavior} from "../../classes/behavior";
import {KeyMapService} from "../../services/key-map.service";
import {Subscription} from "rxjs";
import {Layer} from "../../classes/layer";
import {KeycodeSelectorComponent} from "../keycode-selector/keycode-selector.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'behavior-selector',
  templateUrl: './behavior-selector.component.html',
  styleUrls: ['./behavior-selector.component.css']
})
export class BehaviorSelectorComponent implements OnInit {

  private subscriptions: Subscription = new Subscription();

  public selectedBehavior: Behavior = new Behavior(-1,Behavior.BEHAVIOR_TYPE_NONE,[],[],[]);
  public layers: Array<Layer> = new Array<Layer>();

  constructor(public keyMapService: KeyMapService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.keyMapService.selectedBehavior$.subscribe(behavior => {
        this.selectedBehavior = behavior;
      }));
    this.subscriptions.add(
      this.keyMapService.layers$.subscribe(layers => {
        this.layers = layers;
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public selectBehaviorType(type: string): void {
    if (this.selectedBehavior) {
      this.selectedBehavior.type = type;
    }
  }

  selectModifierKeypress(value: string): void {
    this.selectedBehavior.values[1] = value;
  }

  showKeycodeSelector(): void {
    console.log('showKeycodeSelector');
    const modalRef = this.modalService.open(KeycodeSelectorComponent, {size: 'xl', centered: true, backdrop: "static", scrollable: true});
    modalRef.componentInstance.name = 'KeycodeSelector';
    modalRef.dismissed.subscribe((value) => {
      console.log('dismissed ' + value);
      delete this.selectedBehavior.values[0];
    });
    modalRef.closed.subscribe((value => {
      console.log('closed ', value);
      this.selectedBehavior.values[0] = value.label || value.codes[0];
    }));
  }
}
