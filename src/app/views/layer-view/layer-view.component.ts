import { Component, OnInit } from '@angular/core';
import {KeyMapService} from "../../services/key-map.service";
import { faTrash, faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Customvalidators} from "../../classes/customvalidators";

@Component({
  selector: 'layer-view',
  templateUrl: './layer-view.component.html',
  styleUrls: ['./layer-view.component.css']
})
export class LayerViewComponent implements OnInit {

  public newLayerName: string = '';
  public faTrash = faTrash;
  public faArrowRight =  faArrowRight;
  public faArrowLeft =  faArrowLeft;

  constructor(public keyMapService: KeyMapService) { }

  ngOnInit(): void {
    this.keyMapService.autoSave();
    this.keyMapService.setSingleSelect(true);
  }

  ngOnDestroy() {
  }

  keyPressAlphanumeric = Customvalidators.keyPressAlphanumeric;

}
