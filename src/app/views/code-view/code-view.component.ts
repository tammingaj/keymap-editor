import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {ZmkConfigGeneratorService} from "../../services/zmk-config-generator.service";
import {faArrowLeft, faCopy, faFileDownload} from '@fortawesome/free-solid-svg-icons';

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
  private autoUpdateSaveToUncheck: boolean = true;
  public codeLines : string[] = [];
  public faArrowLeft = faArrowLeft;
  public faCopy = faCopy;
  public faFileDownload = faFileDownload;

  constructor(private zmkConfigGeneratorService: ZmkConfigGeneratorService ) { }

  ngAfterViewInit() {
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
      if (this.zmkConfigGeneratorService.autoUpdate) {
        this.codeLines = codeLines;
        this.theCode = codeLines.join('\n');
        this.zmkConfigGeneratorService.codeBackup = this.theCode;
      }
      this.theCode = this.zmkConfigGeneratorService.codeBackup;
    }));
    this.zmkConfigGeneratorService.generateCode();
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  async copy() {
    console.log('copy');
    await navigator.clipboard.writeText(this.theCode);
  }

  download() {
    console.log('download');
  }

  onCodeChanged(event: any) {
    this.zmkConfigGeneratorService.codeBackup = this.theCode;
    if (this.autoUpdateSaveToUncheck) {
      this.zmkConfigGeneratorService.autoUpdate = false;
    }
    this.autoUpdateSaveToUncheck = true;
  }

  onAutoUpdateChange(event: any) {
    this.zmkConfigGeneratorService.autoUpdate = !this.zmkConfigGeneratorService.autoUpdate;
    if (this.zmkConfigGeneratorService.autoUpdate) {
      this.autoUpdateSaveToUncheck = false;
      this.zmkConfigGeneratorService.generateCode();
    }
  }

  isAutoUpdate() {
    return this.zmkConfigGeneratorService.autoUpdate;
  }
}
