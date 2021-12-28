import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {KeyConfig} from "../../classes/key-config";
import {ZmkConfigGeneratorService} from "../../services/zmk-config-generator.service";
import {KeyMapService} from "../../services/key-map.service";

@Component({
  selector: 'key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit {

  private width: number = 50;

  @Input() config: KeyConfig = KeyConfig.getInstance();
  @Input() mode: string = ''; // 'layout' or ''
  @Input() arena = {width: 0, height: 0};
  @Output() selected = new EventEmitter();

  constructor(private zmkConfigGeneratorService: ZmkConfigGeneratorService, private keyMapService: KeyMapService) {
  }

  ngOnInit() {
  }

  @HostListener('dblclick',['$event'])
  onDoubleClick($event:any): void {
    $event.stopPropagation();
    console.log('double clicked');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    // not necessary to do anything here, catching the resize event is enough to rerender the component
  }

  delete(): boolean {
    console.log('deleting');
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
    return {
      'top': top,
      'left': left,
      'transform': 'rotate(' + this.config.angle + 'deg)',
      'width': this.width-8 + 'px',
    }
  }

  getModifierLabel(): string {
    let label = this.keyMapService.getModifierLabel(this.config);
    return label;
  }

}
