import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder} from "@angular/forms";
import {KeyMapService} from "../../services/key-map.service";
import {Validators} from "../../classes/validators";

@Component({
  selector: 'new-keymap-modal',
  templateUrl: './new-keymap-modal.component.html',
  styleUrls: ['./new-keymap-modal.component.css']
})
export class NewKeymapModalComponent implements OnInit {

  keymapForm = this.formBuilder.group({
    name: '',
    githubUrl: '',
    split: true,
    nofRows: 0,
    nofCols: 0
  });

  constructor(private activeModal: NgbActiveModal, private formBuilder: FormBuilder, public keyMapService: KeyMapService) {
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
    this.activeModal.dismiss('cancel click');
  }

  keyPressAlphanumeric = Validators.keyPressAlphanumeric;

}
