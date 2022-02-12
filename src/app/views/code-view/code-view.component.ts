import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {ZmkConfigGeneratorService} from "../../services/zmk-config-generator.service";
import {faArrowLeft, faCopy, faFileDownload} from '@fortawesome/free-solid-svg-icons';
import {KeyMapService} from "../../services/key-map.service";
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.css']
})
export class CodeViewComponent implements OnInit {

  // @ts-ignore
  @ViewChild('editor') editor;

  // @ts-ignore
  @ViewChild('copyTooltip', {static: false}) copyTooltip: NgbTooltip;

  @Input()  theCode: any | undefined;
  @Output() theCodeChange = new EventEmitter<string>();

  private subscriptions: Subscription = new Subscription();
  private autoUpdateSaveToUncheck: boolean = true;
  public codeLines : string[] = [];
  public faArrowLeft = faArrowLeft;
  public faCopy = faCopy;
  public faFileDownload = faFileDownload;

  constructor(private keyMapService: KeyMapService, private zmkConfigGeneratorService: ZmkConfigGeneratorService ) { }

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
    this.keyMapService.autoSave();
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
    await navigator.clipboard.writeText(this.theCode);
    this.copyTooltip.open();
    setTimeout(()=>{
      this.copyTooltip.close();
    }, 2000);
  }

  download() {
    // credits: https://stackoverflow.com/a/38462992/1128079
    let filename = this.keyMapService.getKeymapName() + '.keymap';
    let blob = new Blob([this.theCode], {type: 'application/text'});
    let e = document.createEvent('MouseEvents'), a = document.createElement('a');
    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/text', a.download, a.href].join(':');
    e.initEvent('click', true, false);
    a.dispatchEvent(e);
    window.URL.revokeObjectURL(a.href); // clean the url.createObjectURL resource
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
