import { Component, OnInit } from '@angular/core';
import {KeyMapService} from "../../services/key-map.service";
import {RepositoryService} from "../../services/repository.service";
import {SettingsService} from "../../services/settings.service";
import {Layer} from "../../classes/layer";

@Component({
  selector: 'settings-view',
  templateUrl: './settings-view.component.html',
  styleUrls: ['./settings-view.component.css']
})
export class SettingsViewComponent implements OnInit {

  constructor(private keyMapService: KeyMapService, public settingsService: SettingsService) { }

  ngOnInit(): void {
    this.keyMapService.autoSave();
  }

  saveSettings(): void {
    this.settingsService.save();
  }

  onAutosaveChange(autosave: boolean, event: Event): void {
    this.settingsService.settings.autoSave = !this.settingsService.settings.autoSave;
    this.settingsService.save();
  }

}
