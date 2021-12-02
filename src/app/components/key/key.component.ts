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
    return {
      'position': 'absolute',
      'top': (this.arena.height/2)-((this.keyMapService.maxY - this.keyMapService.minY) / 2) + this.config.y - (this.width / 2) + 'px',
      'left': (this.arena.width/2)-((this.keyMapService.maxX - this.keyMapService.minX) / 2) + this.config.x - (this.width / 2) + 'px',
      'transform': 'rotate(' + this.config.angle + 'deg)',
      'aspect-ratio': 1,
      'width': this.width + 'px',
    }
  }
}
