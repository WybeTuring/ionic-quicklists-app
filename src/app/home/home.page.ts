import { Component, ViewChild } from '@angular/core';
import {AlertController, IonList} from "@ionic/angular";
import {ChecklistDataService} from "../services/checklist-data.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonList, {static: false}) slidingList: IonList;

  constructor(public dataService: ChecklistDataService, private alertCtrl: AlertController) {}

  addChecklist(): void {}

  renameChecklist(checklist): void {}

  removeChecklist(checklist): void {}


}
