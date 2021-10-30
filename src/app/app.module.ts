import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KeyConfig } from "./classes/key-config";
import { KeyComponent } from './components/key/key.component';
import { KeyDetailsComponent } from './components/key-details/key-details.component';
import { LayoutEditorComponent } from './components/layout-editor/layout-editor.component';
import { KeyMap } from "./classes/key-map";

@NgModule({
  declarations: [
    AppComponent,
    KeyComponent,
    KeyDetailsComponent,
    LayoutEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [KeyConfig,KeyMap],
  bootstrap: [AppComponent]
})
export class AppModule { }
