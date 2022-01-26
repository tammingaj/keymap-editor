import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {ZmkConfigGeneratorService} from "../../services/zmk-config-generator.service";
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.css']
})
export class CodeViewComponent implements OnInit {

  // @ts-ignore
  @ViewChild('editor') editor;

  @Input()  theCode: any | undefined;
  @Output() theCodeChange = new EventEmitter<string>();

  private subscriptions: Subscription = new Subscription();
  public codeLines : string[] = [];
  public faArrowLeft = faArrowLeft;

  constructor(private zmkConfigGeneratorService: ZmkConfigGeneratorService ) { }

  ngAfterViewInit() {
    // this.editor.setTheme("eclipse");

    this.editor.getEditor().setOptions({
      enableBasicAutocompletion: true
    });

    this.editor.getEditor().commands.addCommand({
      name: "showOtherCompletions",
      bindKey: "Ctrl-.",
      exec: function (editor: any) {
        console.log('callback');
      }
    })
  }

  ngOnInit(): void {
    this.subscriptions.add(this.zmkConfigGeneratorService.codeLines$.subscribe(codeLines => {
      this.codeLines = codeLines;
      this.theCode  = codeLines.join('\n');
    }));
    this.zmkConfigGeneratorService.generateCode();
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}
