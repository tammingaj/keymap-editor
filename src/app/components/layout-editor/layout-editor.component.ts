import {Component, HostListener, Input, OnInit} from '@angular/core';
import {KeyComponent} from "../key/key.component";
import {KeyConfig} from "../../classes/key-config";
import {ZmkConfigGeneratorService} from "../../services/zmk-config-generator.service";
import {KeyMapService} from "../../services/key-map.service";

@Component({
  selector: 'layout-editor',
  templateUrl: './layout-editor.component.html',
  styleUrls: ['./layout-editor.component.css']
})
export class LayoutEditorComponent implements OnInit {

  private STEP: number = 2;

  constructor(private keyMapService: KeyMapService){}

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {

    console.log('keycode: ' + event.key);

    if (event.key === 'ArrowRight') {
      console.log('rechts');
      this.keyMapService.right(this.STEP);
    }

    if (event.key === 'ArrowLeft') {
      console.log('links');
      this.keyMapService.left(this.STEP);
    }

    if (event.key === 'ArrowUp') {
      console.log('up');
      this.keyMapService.up(this.STEP);
    }

    if (event.key === 'ArrowDown') {
      console.log('down');
      this.keyMapService.down(this.STEP);
    }

    if (event.key === 'Escape') {
      console.log('escape');
      this.keyMapService.deselect();
    }
  }

  ngOnInit(): void{
  }

  registerSelected(keyConfig: KeyConfig) {
    this.keyMapService.selectConfig(keyConfig)
  }

  getKeyConfigs(): Array<KeyConfig> {
    return this.keyMapService.getKeyConfigs();
  }
}
