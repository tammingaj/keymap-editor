import { Injectable } from '@angular/core';
import {KeyMap} from "../classes/key-map";
import {RepositoryService} from "./repository.service";

@Injectable({
  providedIn: 'root'
})
export class KeyMapService {

  public keyMap: KeyMap = new KeyMap();

  constructor(private repositoryService: RepositoryService) {


  }
}
