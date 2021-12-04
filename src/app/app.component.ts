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
}
