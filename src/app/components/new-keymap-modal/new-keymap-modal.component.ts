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

  keymapForm = this.formBuilder.group({
    name: [''],
    githubUrl: '',
    split: true,
    nofRows: 1,
    nofCols: 1
  });

  constructor(private http: HttpClient, private activeModal: NgbActiveModal, private formBuilder: FormBuilder, public keyMapService: KeyMapService, private router: Router) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.nameInputElement.nativeElement.focus();
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

  load(configName: string): boolean {
    this.http.get('./assets/' + configName + '.json').subscribe(data => {
      this.keyMapService.importKeyMap(JSON.stringify(data));
      this.keyMapService.saveKeyMapConfig();
      this.activeModal.close('load keymap ' + configName);
      this.router.navigate(['/layout']);
    });
    return false;
  }

  clearBrowserStorage(): void {
    this.keyMapService.clear();
  }

  keyPressAlphanumeric = Customvalidators.keyPressAlphanumeric;

}
