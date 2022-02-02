import {Component, Input, OnInit} from '@angular/core';
import {Combo} from "../../classes/combo";
import {KeyConfig} from "../../classes/key-config";
import {KeyMapService} from "../../services/key-map.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'combo-display',
  templateUrl: './combo-display.component.html',
  styleUrls: ['./combo-display.component.css']
})
export class ComboDisplayComponent implements OnInit {
  // Used to display the combo in the arena

  private subscriptions: Subscription = new Subscription();
  private width: number = 40;
  public selectedCombo: Combo = new Combo(0,'',50,'','', '', [],[]);
  constructor(public keyMapService: KeyMapService) { }

  @Input() combo: Combo = new Combo(0,'',50,'','', '', [],[]);
  @Input() arena = {width: 0, height: 0};

  ngOnInit(): void {
    this.subscriptions.add(this.keyMapService.selectedCombo$.subscribe(
      combo => {
        this.selectedCombo = combo;
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getComboKeys(): number[] {
    return this.combo.keys;
  }

  getStyle(comboKey: number): object {
    // get the key
    let key: KeyConfig = this.keyMapService.getComboKeys(this.combo).filter(key => key.keyNumber == comboKey)[0];
    // center the keys relative to the arena
    let top = key.y + (this.arena.height/2 - (this.keyMapService.maxY - this.keyMapService.minY)/2) - this.keyMapService.minY - (this.width / 2) + 'px';
    let left = key.x + (this.arena.width/2 - (this.keyMapService.maxX - this.keyMapService.minX)/2) - this.keyMapService.minX - (this.width / 6) + 'px';
    return {
      'z-index': 5,
      'position': 'absolute',
      'top': top,
      'left': left,
      'transform': 'rotate(' + key.angle + 'deg)',
      'aspect-ratio': 1,
      'width': this.width/2 + 'px',
      'border-radius': '50%',
      'opacity': 0.3,
      'pointer-events': 'none',
      'background-color': this.combo.color,
    }
  }
}
