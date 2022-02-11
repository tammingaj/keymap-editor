import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder} from "@angular/forms";
import {Codes} from "../../classes/codes";

@Component({
  selector: 'keycode-selector',
  templateUrl: './keycode-selector.component.html',
  styleUrls: ['./keycode-selector.component.css']
})
export class KeycodeSelectorComponent implements OnInit {

  // @ts-ignore
  public keycodes: Codes;
  public selectedGroup: string = "";

  keycodeForm = this.formBuilder.group({
    a: '',
  });

  constructor(private activeModal: NgbActiveModal, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.selectedGroup = Codes.groups[0];
  }

  select(keycode: any): void {
    console.log('chosen keycode: ',keycode);
    this.activeModal.close(keycode);
  }

  cancel(): void {
    console.log('form values: ');
    this.activeModal.dismiss('cancel click');
  }

  getGroups(): Array<any> {
    return Codes.groups;
  }

  selectGroup(group: string): void {
    this.selectedGroup = group;
  }

  getCodes(): Array<any> {
    let codes = [];
    switch (this.selectedGroup) {
      case 'Keyboard': codes = Codes.groupKeyboard; break;
      case 'Keypad': codes = Codes.groupKeypad; break;
      case 'Bluetooth': codes = Codes.groupBluetooth; break;
      case 'Consumer': codes = Codes.groupConsumer; break;
      case 'Consumer Menu': codes = Codes.groupConsumerMenu; break;
      case 'Consumer Media': codes = Codes.groupConsumerMedia; break;
      case 'Consumer AL': codes = Codes.groupConsumerAL; break;
      case 'Consumer AC': codes = Codes.groupConsumerAC; break;
      case 'Consumer KBIA': codes = Codes.groupConsumerKBIA; break;
      default: codes = [];
    }
    return codes;
  }
}
