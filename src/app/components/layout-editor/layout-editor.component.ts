import {Component, HostListener, Input, OnInit} from '@angular/core';
import {KeyConfig} from "../../classes/key-config";
import {KeyMapService} from "../../services/key-map.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'layout-editor',
  templateUrl: './layout-editor.component.html',
  styleUrls: ['./layout-editor.component.css']
})
export class LayoutEditorComponent implements OnInit {

  private STEP: number = 2;
  private keys: Array<KeyConfig> = new Array<KeyConfig>();
  private subscriptions: Subscription = new Subscription();

  constructor(public keyMapService: KeyMapService){}

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
    this.subscriptions.add(this.keyMapService.keys$.subscribe(keys => {
      this.keys = keys;
    }));
  }

  ngOnDestroy(): void {
    if (this.subscriptions){
      this.subscriptions.unsubscribe();
    }
  }

  registerSelected(keyConfig: KeyConfig) {
    this.keyMapService.selectConfig(keyConfig)
  }

  getKeyConfigs(): Array<KeyConfig> {
    return this.keys;
  }
}
