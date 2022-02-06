import { Component, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {KeyMapService} from "../../services/key-map.service";

@Component({
  selector: 'about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.css']
})
export class AboutViewComponent implements OnInit {

  public faExternalLinkAlt = faExternalLinkAlt;

  constructor(public keyMapService: KeyMapService) { }

  ngOnInit(): void {
    this.keyMapService.autoSave();
  }

}
