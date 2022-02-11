import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder} from "@angular/forms";
import {KeyMapService} from "../../services/key-map.service";
import {Customvalidators} from "../../classes/customvalidators";
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Component({
  selector: 'new-keymap-modal',
  templateUrl: './new-keymap-modal.component.html',
  styleUrls: ['./new-keymap-modal.component.css']
})
export class NewKeymapModalComponent implements OnInit {

  // @ts-ignore
  @ViewChild('name') nameInputElement: ElementRef;

  keyPressAlphanumeric = Customvalidators.keyPressAlphanumeric;

  keymapForm = this.formBuilder.group({
    name: [''],
    githubUrl: '',
    split: true,
    nofRows: 1,
    nofCols: 1
  });

  constructor(private http: HttpClient, public activeModal: NgbActiveModal, private formBuilder: FormBuilder, public keyMapService: KeyMapService, private router: Router) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.nameInputElement.nativeElement.focus();
  }

  create(): void {
    console.log('create and close modal');
    this.keyMapService.createNewKeymap(this.keymapForm.value);
    this.activeModal.close('create click');
  }

  cancel(): void {
    this.activeModal.dismiss('cancel click');
  }

  clearBrowserStorage(): void {
    this.keyMapService.clear();
  }

  download(): void {
    let filename = 'keymap-' + this.keyMapService.getKeymapName() + '-' + new Date().toJSON() + '.json';
    let blob = new Blob([this.keyMapService.getKeymapAsJSON()], {type: 'application/json'});
    let e = document.createEvent('MouseEvents'), a = document.createElement('a');
    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
    e.initEvent('click', true, false);
    a.dispatchEvent(e);
    window.URL.revokeObjectURL(a.href); // clean the url.createObjectURL resource
  }

  load(keymapName: string): void {
    this.keyMapService.load(keymapName);
    this.activeModal.close('load click');
  }
}
