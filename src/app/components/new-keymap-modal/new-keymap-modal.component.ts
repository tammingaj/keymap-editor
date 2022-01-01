import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder} from "@angular/forms";
import {KeyMapService} from "../../services/key-map.service";

@Component({
  selector: 'new-keymap-modal',
  templateUrl: './new-keymap-modal.component.html',
  styleUrls: ['./new-keymap-modal.component.css']
})
export class NewKeymapModalComponent implements OnInit {

  keymapForm = this.formBuilder.group({
    name: '',
    splitCheck: false,
    nofRows: 0,
    nofCols: 0,
    shield: '',
    board: ''
  });

  constructor(private activeModal: NgbActiveModal, private formBuilder: FormBuilder, private keyMapService: KeyMapService) {
  }

  ngOnInit(): void {
  }

  create(): void {
    console.log('form values: ',this.keymapForm);
    this.keyMapService.createNewKeymap(this.keymapForm.value);
    this.activeModal.close('create click');
  }

  cancel(): void {
    console.log('form values: ',this.keymapForm);
    this.activeModal.dismiss('blaat');
  }

  selectShield(shield: string): void {
    this.keymapForm.patchValue({shield: shield})
  }

  selectBoard(board: string): void {
    this.keymapForm.patchValue({board: board})
  }
}
