import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KeyConfig } from "./classes/key-config";
import { KeyComponent } from './components/key/key.component';
import { KeyDetailsComponent } from './components/key-details/key-details.component';
import { LayoutEditorComponent } from './components/layout-editor/layout-editor.component';
import { KeyMapComponent } from './components/key-map/key-map.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    KeyComponent,
    KeyDetailsComponent,
    LayoutEditorComponent,
    KeyMapComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [KeyConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
