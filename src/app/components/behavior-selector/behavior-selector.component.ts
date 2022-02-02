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

  public selectedBehavior: Behavior = new Behavior(-1,Behavior.BEHAVIOR_TYPE_NONE,[],[], '','','', '');
  public layers: Array<Layer> = new Array<Layer>();
  public currentLayer: Layer = new Layer('','');
  public getBluetoothValues = Behavior.getBluetoothValues;

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
    this.subscriptions.add(
      this.keyMapService.currentLayer$.subscribe(layer => {
        this.currentLayer = layer;
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public targetLayers() {
    return this.layers.filter(layer => layer.id != this.currentLayer.id);
  }

  public selectBehaviorType(type: string): void {
    if (this.selectedBehavior) {
      this.selectedBehavior.type = type;
    }
  }

  selectTargetLayer(layer: Layer): void {
    this.selectedBehavior.targetLayerId = layer.id;
    this.selectedBehavior.targetLayerName = layer.name;
    console.log(this.selectedBehavior);
    console.log(this.selectedBehavior.generateCode());
  }

  selectModifierKeypress(value: string): void {
    this.selectedBehavior.values[1] = value;
  }

  selectBluetoothBehavior(value: string): void {
    this.selectedBehavior.type = Behavior.BEHAVIOR_TYPE_BLUETOOTH;
    this.selectedBehavior.values[0] = value;
  }

  showKeycodeSelector(): void {
    console.log('showKeycodeSelector');
    const modalRef = this.modalService.open(KeycodeSelectorComponent, {size: 'xl', centered: true, backdrop: "static", scrollable: true});
    modalRef.componentInstance.name = 'KeycodeSelector';
    modalRef.dismissed.subscribe((value) => {
      console.log('dismissed modal' + value);
      delete this.selectedBehavior.values[0];
    });
    modalRef.closed.subscribe((value => {
      console.log('closed modal', value);
      this.selectedBehavior.codeId = value.id;
      this.selectedBehavior.values[0] = value.codes[0];
    }));
  }
}
