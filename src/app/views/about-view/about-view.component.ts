import { Component, OnInit } from '@angular/core';
import { faDonate, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.css']
})
export class AboutViewComponent implements OnInit {

  public faDonate = faDonate;
  public faExternalLinkAlt = faExternalLinkAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
