import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {KeyConfig} from "../../classes/key-config";
import {KeyMapService} from "../../services/key-map.service";
import {Subscription} from "rxjs";
import {Combo} from "../../classes/combo";

@Component({
  selector: 'layout-editor',
  templateUrl: './layout-editor.component.html',
  styleUrls: ['./layout-editor.component.css']
})
export class LayoutEditorComponent implements OnInit {

  private STEP: number = 2;
  private keys: Array<KeyConfig> = new Array<KeyConfig>();
  private combos: Array<Combo> = new Array<Combo>();
  private subscriptions: Subscription = new Subscription();
  public top: string = "50px";
  constructor(public keyMapService: KeyMapService){}

  // @ts-ignore
  @ViewChild('arena') arena: ElementRef<HTMLElement>;

  @Input() mode: string = ''; // 'layout' or ''
  @Input() keymapName: string = '';

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    event.stopPropagation();
    event.preventDefault();
    console.log('keycode: ' + event.key);
    if (this.mode === 'layout') {
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
    }

    if (event.key === 'Escape') {
      console.log('escape');
      this.keyMapService.deselectKeys();
    }
  }

  ngOnInit(): void{
    this.subscriptions.add(this.keyMapService.keys$.subscribe(keys => {
      this.keys = keys;
    }));
    this.subscriptions.add(this.keyMapService.combos$.subscribe(combos => {
      this.combos = combos;
    }));

    setTimeout (() => {
      this.arena.nativeElement.click();
    }, 400);
  }

  ngOnDestroy(): void {
    if (this.subscriptions){
      this.subscriptions.unsubscribe();
    }
  }

  registerSelected(keyConfig: KeyConfig) {
    this.keyMapService.selectKey(keyConfig)
  }

  getKeyConfigs(): Array<KeyConfig> {
    return this.keys;
  }

  getCombos(): Array<Combo> {
    return this.combos;
  }

  getKeymapName(): string {
    return this.keyMapService.getKeymapName();
  }
}
