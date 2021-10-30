import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {KeyConfig} from "../../classes/key-config";
import {ZmkConfigGeneratorService} from "../../services/zmk-config-generator.service";

@Component({
  selector: 'key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit {

  @Input() config: KeyConfig;
  @Output() selected = new EventEmitter();

  constructor(private zmkConfigGeneratorService: ZmkConfigGeneratorService) {
    this.config = new KeyConfig();
  }

  ngOnInit() {
  }

  @HostListener('dblclick',['$event'])
  onDoubleClick($event:any): void {
    this.zmkConfigGeneratorService.remove(this.config);
    $event.stopPropagation();
  }

  delete(): void {
    this.zmkConfigGeneratorService.remove(this.config);
  }

  toggleActive(): void {
    this.config.active = !this.config.active;
    console.log('toggled active to ' + this.config.active, this);
    if (this.config.active) {
      this.selected.emit(this.config);
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
      'top': this.config.x,
      'left': this.config.y,
      'rotation': this.config.angle,
      'background-color': this.config.active?'red':'',
      'border': '1px solid black',
      'width': '30px',
      'height': '30px'
    }
  }
}
