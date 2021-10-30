import { Injectable } from '@angular/core';
import {RepositoryService} from "./repository.service";
import {KeyMapConfig} from "../classes/key-map-config";

@Injectable({
  providedIn: 'root'
})
export class KeyMapService {

  public keyMap: KeyMapConfig = new KeyMapConfig();

  constructor(private repositoryService: RepositoryService) {


  }
}
