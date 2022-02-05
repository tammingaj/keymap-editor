import {Component, Renderer2} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {KeyMapService} from "./services/key-map.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NewKeymapModalComponent} from "./components/new-keymap-modal/new-keymap-modal.component";
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faBug, faCog} from '@fortawesome/free-solid-svg-icons';
import {v4 as uuidv4} from "uuid";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'keymap-editor';
  public faDiscord = faDiscord;
  public faGithub = faGithub;
  public faCopyright = faCopyright;
  public faBug = faBug;
  public faCog = faCog;
  private static readonly DARK: string = 'bootstrap-dark'
  private static readonly LIGHT: string = 'bootstrap'

  private theme: string = AppComponent.DARK;
  private selectedFile: File = new File(['', ''], '', {type: 'text/plain'});
  private transform: boolean = false;

  constructor(private renderer: Renderer2, private router: Router, public route: ActivatedRoute, public keyMapService: KeyMapService, private modalService: NgbModal) {
    this.renderer.addClass(document.body, this.theme);
    if (this.keyMapService.noKeyMapAvailable()) {
      this.newKeymap();
    }
  }

  toggleTheme(): void {
    this.renderer.removeClass(document.body, this.theme);
    if (this.theme === AppComponent.DARK) {
      this.theme = AppComponent.LIGHT;
    } else {
      this.theme = AppComponent.DARK;
    }
    this.renderer.addClass(document.body, this.theme);
  }

  isDark(): boolean {
    return this.theme === AppComponent.DARK;
  }

  otherThemeName(): string {
    if (this.isDark()) {
      return 'Light';
    }
    return 'Dark';
  }

  newKeymap(): void {
    const modalRef = this.modalService.open(NewKeymapModalComponent, {centered: true, backdrop: "static"});
    modalRef.componentInstance.name = 'world';
    modalRef.closed.subscribe((value => {
      this.router.navigate(['/layout']);
    }));
  }

  getKeymapName(): string {
    return this.keyMapService.getKeymapName();
  }

  export(): void {
    // credits: https://stackoverflow.com/a/38462992/1128079
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

  onFileChanged(event: Event) {
    // @ts-ignore
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, "UTF-8");
    fileReader.onload = () => {
      let result: any = fileReader.result || '';
      if (this.transform) {
        const altered = result.replace(/id: ""/g, (match: any, key: any) => {
          return 'id: "' + uuidv4() + '"';
        });
        let blob = new Blob([altered], {type: 'txt/plain'});
        let e = document.createEvent('MouseEvents'), a = document.createElement('a');
        a.download = 'codes.js.altered';
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
        e.initEvent('click', true, false);
        a.dispatchEvent(e);
        window.URL.revokeObjectURL(a.href); // clean the url.createObjectURL resource
        this.transform = false;
      } else {
        this.keyMapService.importKeyMap(result);
      }
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }

  doTransform(): void {
    console.log('doTransform');
    this.transform = true;
  }

  save(): void {
    this.keyMapService.saveKeyMapConfig();
  }
}
