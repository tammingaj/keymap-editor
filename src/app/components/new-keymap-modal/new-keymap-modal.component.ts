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

  keyPressAlphanumeric(event: any) {
    let inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z0-9-_]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

}
