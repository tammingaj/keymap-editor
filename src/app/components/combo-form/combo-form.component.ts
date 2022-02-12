import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {KeyMapService} from "../../services/key-map.service";
import {Subscription} from "rxjs";
import {Layer} from "../../classes/layer";
import {KeyConfig} from "../../classes/key-config";
import {Combo} from "../../classes/combo";
import {KeycodeSelectorComponent} from "../keycode-selector/keycode-selector.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Codes} from "../../classes/codes";

@Component({
  selector: 'combo-form',
  templateUrl: './combo-form.component.html',
  styleUrls: ['./combo-form.component.css']
})
export class ComboFormComponent implements OnInit {
  // Used to create a form for the user to input their combo

  private subscriptions: Subscription = new Subscription();
  public layers: Array<Layer> = new Array<Layer>();
  private activeKeys: KeyConfig[] = [];
  public combo: Combo = new Combo(0,'',50,'','', '',[],[]);
  public checkedLayerIds: Array<string> = new Array<string>();
  public bluetoothValues = Codes.groupBluetooth;

  constructor(private formBuilder: FormBuilder, public keyMapService: KeyMapService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.subscriptions.add(this.keyMapService.layers$.subscribe(layers => {
      this.layers = layers;
    }));
    this.subscriptions.add(this.keyMapService.activeKeys$.subscribe(
      activeKeys => {
        this.activeKeys = activeKeys;
        this.combo.keys = [];
        this.activeKeys.forEach(key => {
          this.combo.keys.push(key.keyNumber);
        });
      }));
    this.subscriptions.add(this.keyMapService.selectedCombo$.subscribe(
      combo => {
        this.combo = combo;
        this.checkedLayerIds = new Array<string>();
        this.combo.layers.forEach(layer => {
          this.checkedLayerIds.push(layer);
        });
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public onLayerChange(layer: Layer, event: Event): void {
    // @ts-ignore
    if (event.target.checked) {
      this.combo.layers.push(layer.id);
    } else {
      this.combo.layers.splice(this.combo.layers.indexOf(layer.id), 1);
    }
    this.keyMapService.autoSave();
  }

  public isLayerChecked(layer: Layer): boolean {
    return this.combo.layers.indexOf(layer.id) > -1;
  }

  public selectBehaviorType(type: string): void {
    this.combo.selectedBehaviorType = type;
    this.keyMapService.autoSave();
  }

  selectBluetoothBehavior(value: any): void {
    this.combo.binding = value.codes[0];
    this.keyMapService.autoSave();
  }

  showKeycodeSelector(): void {
    const modalRef = this.modalService.open(KeycodeSelectorComponent, {size: 'xl', centered: true, backdrop: "static", scrollable: true});
    modalRef.componentInstance.name = 'KeycodeSelector';
    modalRef.dismissed.subscribe((value) => {
      //delete this.selectedBehavior.values[0];
      this.keyMapService.autoSave();
    });
    modalRef.closed.subscribe((value => {
      this.combo.binding = value.label || value.codes[0];
      this.keyMapService.autoSave();
    }));
  }
}
