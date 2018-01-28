import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Austausch } from "./austausch";
import {SharedModule} from "../../app/shared.module";

@NgModule({
  declarations: [
    Austausch
  ],
  imports: [
    IonicPageModule.forChild(Austausch),
    SharedModule
  ]
})
export class Module {}
