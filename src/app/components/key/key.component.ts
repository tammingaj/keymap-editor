import {Component, HostListener, Input, OnInit} from '@angular/core';
import {KeyConfig} from "../../classes/key-config";
import {ZmkConfigGeneratorService} from "../../services/zmk-config-generator.service";
import {KeyMapService} from "../../services/key-map.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit {

  private width: number = 50;
  private subscriptions: Subscription = new Subscription();
  public currentKey: KeyConfig = KeyConfig.getInstance();
  private activeKeyCount: number = 0;

  @Input() config: KeyConfig = KeyConfig.getInstance();
  @Input() mode: string = ''; // 'layout' or ''
  @Input() arena = {width: 0, height: 0};

  constructor(private zmkConfigGeneratorService: ZmkConfigGeneratorService, private keyMapService: KeyMapService) {
  }

  ngOnInit() {
    this.subscriptions.add(this.keyMapService.currentKey$.subscribe(
      (key) => {
        this.currentKey = key;
      }
    ));
    this.subscriptions.add(this.keyMapService.activeKeys$.subscribe(
      (activeKeys) => {
        this.activeKeyCount = activeKeys.length;
      }
    ));
  }

  ngOnDestroy(): void {
    if(this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  @HostListener('dblclick',['$event'])
  onDoubleClick($event:any): void {
    $event.stopPropagation();
    this.keyMapService.deleteConfig(this.config);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    // not necessary to do anything here, catching the resize event is enough to rerender the component
  }

  delete(): boolean {
    this.keyMapService.deleteConfig(this.config);
    return false;
  }

  toggleActive(event: Event): void {
    event.stopPropagation();
    this.keyMapService.toggleActive(this.config);
  }

  getStyle(): object {
    // center the keys relative to the arena
    let top = this.config.y + (this.arena.height/2 - (this.keyMapService.maxY - this.keyMapService.minY)/2) - this.keyMapService.minY - (this.width / 2) + 'px';
    let left = this.config.x + (this.arena.width/2 - (this.keyMapService.maxX - this.keyMapService.minX)/2) - this.keyMapService.minX - (this.width / 2) + 'px';
    let keyStyle = {
      'top': top,
      'left': left,
      'transform': 'rotate(' + this.config.angle + 'deg)',
      'width': this.width-8 + 'px',
      'overflow': 'hidden'
    }
    // add a background color if the key is in the same row, column, side as the current key
    let r = this.keyMapService.highlight.side && this.config.side === this.currentKey.side ? 255 : 0;
    let g = this.keyMapService.highlight.row && this.config.row === this.currentKey.row ? 255 : 0;
    let b = this.keyMapService.highlight.column && this.config.column === this.currentKey.column ? 255 : 0;
    if (r+b+g > 0 && this.activeKeyCount > 0 && this.mode === 'layout') {
      let bgColor = 'rgb(' + r + ',' + g + ',' + b + ')';
      // @ts-ignore
      keyStyle['backgroundColor'] = bgColor;
    }
    return keyStyle;
  }

  getLabel(): string {
    let label = this.keyMapService.getLabel(this.config);
    return label;
  }

  getModifierLabel(): string {
    let label = this.keyMapService.getModifierLabel(this.config);
    return label;
  }

}
