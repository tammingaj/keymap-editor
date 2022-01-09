import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ZmkConfigGeneratorService} from "../../services/zmk-config-generator.service";
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.css']
})
export class CodeViewComponent implements OnInit {

  private subscriptions: Subscription = new Subscription();
  public codeLines : string[] = [];
  public faArrowLeft = faArrowLeft;

  constructor(private zmkConfigGeneratorService: ZmkConfigGeneratorService ) { }

  ngOnInit(): void {
    this.subscriptions.add(this.zmkConfigGeneratorService.codeLines$.subscribe(codeLines => {
      this.codeLines = codeLines;
    }));
    this.zmkConfigGeneratorService.generateCode();
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  getCodeFileAsHtml() {
    return this.codeLines.join('<br>').replace(' ', '&nbsp;');
  }
}
