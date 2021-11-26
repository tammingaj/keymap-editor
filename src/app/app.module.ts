import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KeyComponent } from './components/key/key.component';
import { KeyDetailsComponent } from './components/key-details/key-details.component';
import { LayoutEditorComponent } from './components/layout-editor/layout-editor.component';
import { KeyMapComponent } from './components/key-map/key-map.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { BehaviorSelectorComponent } from './components/behavior-selector/behavior-selector.component';
import {RouterModule, Routes} from "@angular/router";
import { LayoutViewComponent } from './views/layout-view/layout-view.component';
import { BehaviorViewComponent } from './views/behavior-view/behavior-view.component';

const appRoutes: Routes = [
  { path: 'layout', component: LayoutViewComponent },
  { path: 'behavior', component: BehaviorViewComponent },
  { path: '',   redirectTo: '/layout', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    KeyComponent,
    KeyDetailsComponent,
    LayoutEditorComponent,
    KeyMapComponent,
    BehaviorSelectorComponent,
    LayoutViewComponent,
    BehaviorViewComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
