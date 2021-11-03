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

  @Input() config: KeyConfig = new KeyConfig();
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

  delete(): boolean {
    console.log('deleting');
    this.keyMapService.deleteConfig(this.config);
    return false;
  }

  toggleActive(): void {
    this.config.active = !this.config.active;
    console.log('toggled active to ' + this.config.active, this);
    if (this.config.active) {
      this.keyMapService.selectConfig(this.config);
    }
  }

  // deltaX(delta: number):void {
  //   if (this.config.active) {
  //     this.config.x = this.config.x + delta;
  //     console.log('new x: ' + this.config.x);
  //   }
  // }
  //
  // deltaY(delta: number):void {
  //   if (this.config.active) {
  //     this.config.y = this.config.y + delta;
  //     console.log('new y: ' + this.config.y);
  //   }
  // }

  getStyle(): object {
    return {
      'position': 'absolute',
      'top': this.config.y + 'px',
      'left': this.config.x + 'px',
      'transform': 'rotate(' + this.config.angle + 'deg)',
      'aspect-ratio': 1,
      'width': this.width + 'px',
    }
  }
}
