import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { KeyComponent } from './components/key/key.component';
import { LayoutEditorComponent } from './components/layout-editor/layout-editor.component';
import { BehaviorSelectorComponent } from './components/behavior-selector/behavior-selector.component';
import { LayoutViewComponent } from './views/layout-view/layout-view.component';
import { BehaviorViewComponent } from './views/behavior-view/behavior-view.component';
import { CodeViewComponent } from './views/code-view/code-view.component';
import { NewKeymapModalComponent } from './components/new-keymap-modal/new-keymap-modal.component';
import { ComboViewComponent } from './views/combo-view/combo-view.component';
import { ComboFormComponent } from './components/combo-form/combo-form.component';
import { ComboDisplayComponent } from './components/combo-display/combo-display.component';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { SettingsViewComponent } from './views/settings-view/settings-view.component';
import { LayerViewComponent } from './views/layer-view/layer-view.component';
import { KeycodeSelectorComponent } from './components/keycode-selector/keycode-selector.component';
import {AceEditorModule} from "ng2-ace-editor";

const appRoutes: Routes = [
  { path: 'layout', component: LayoutViewComponent },
  { path: 'layers', component: LayerViewComponent },
  { path: 'behavior', component: BehaviorViewComponent },
  { path: 'combos', component: ComboViewComponent },
  { path: 'code', component: CodeViewComponent },
  { path: 'about', component: AboutViewComponent },
  { path: 'settings', component: SettingsViewComponent },
  { path: '',   redirectTo: '/about', pathMatch: 'full' },
  { path: '**',   redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    KeyComponent,
    LayoutEditorComponent,
    BehaviorSelectorComponent,
    LayoutViewComponent,
    BehaviorViewComponent,
    CodeViewComponent,
    NewKeymapModalComponent,
    ComboViewComponent,
    ComboFormComponent,
    ComboDisplayComponent,
    SanitizeHtmlPipe,
    AboutViewComponent,
    SettingsViewComponent,
    LayerViewComponent,
    KeycodeSelectorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    AceEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
