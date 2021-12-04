import {Component, Renderer2} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {KeyMapService} from "./services/key-map.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'keymap-editor';
  private static readonly DARK: string = 'bootstrap-dark'
  private static readonly LIGHT: string = 'bootstrap'

  private theme: string = AppComponent.DARK;
  private selectedFile: File = new File(['', ''], '', {type: 'text/plain'});

  constructor(private renderer: Renderer2, public route: ActivatedRoute, public keyMapService: KeyMapService) {
    this.renderer.addClass(document.body, this.theme);
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
    console.log('newKeyMap');
    //this.keyMapService.newKeyMap();
  }

  export(): void {
    // credits: https://stackoverflow.com/a/38462992/1128079
    let filename = 'keymap-' + this.keyMapService.getKeymapName() + '-' + new Date().toJSON() + '.json';
    let blob = new Blob([this.keyMapService.getKeymapAsJSON()], {type: 'application/json'});
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, filename);
    } else{
      let e = document.createEvent('MouseEvents'), a = document.createElement('a');
      a.download = filename;
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
      e.initEvent('click', true, false);
      a.dispatchEvent(e);
      window.URL.revokeObjectURL(a.href); // clean the url.createObjectURL resource
    }
  }

  onFileChanged(event: Event) {
    // @ts-ignore
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, "UTF-8");
    fileReader.onload = () => {
      let result: any = fileReader.result || '';
      console.log('loaded file: ' + result);
      this.keyMapService.importKeyMap(result);
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }
}
