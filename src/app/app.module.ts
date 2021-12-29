import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KeyComponent } from './components/key/key.component';
import { KeyDetailsComponent } from './components/key-details/key-details.component';
import { LayoutEditorComponent } from './components/layout-editor/layout-editor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BehaviorSelectorComponent } from './components/behavior-selector/behavior-selector.component';
import { RouterModule, Routes } from "@angular/router";
import { LayoutViewComponent } from './views/layout-view/layout-view.component';
import { BehaviorViewComponent } from './views/behavior-view/behavior-view.component';
import { CodeViewComponent } from './views/code-view/code-view.component';
import { NewKeymapModalComponent } from './components/new-keymap-modal/new-keymap-modal.component';
import { ComboViewComponent } from './views/combo-view/combo-view.component';
import { ComboFormComponent } from './components/combo-form/combo-form.component';
import { ComboDisplayComponent } from './components/combo-display/combo-display.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { AboutViewComponent } from './views/about-view/about-view.component';

const appRoutes: Routes = [
  { path: 'layout', component: LayoutViewComponent },
  { path: 'behavior', component: BehaviorViewComponent },
  { path: 'combos', component: ComboViewComponent },
  { path: 'code', component: CodeViewComponent },
  { path: 'about', component: AboutViewComponent },
  { path: '',   redirectTo: '/layout', pathMatch: 'full' },
  { path: '**',   redirectTo: '/layout', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    KeyComponent,
    KeyDetailsComponent,
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
    AboutViewComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        FontAwesomeModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
