import { Injectable } from '@angular/core';
import {Settings} from "../classes/settings";
import {RepositoryService} from "./repository.service";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public settings: Settings = new Settings();

  constructor(private repositoryService: RepositoryService) {
    this.settings = this.repositoryService.loadSettings();
  }

  save(): void {
    this.repositoryService.saveSettings(this.settings);
  }
}
