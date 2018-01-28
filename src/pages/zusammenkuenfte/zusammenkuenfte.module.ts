import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZusammenkuenftePage } from "./zusammenkuenfte";

@NgModule({
  declarations: [
    ZusammenkuenftePage
  ],
  imports: [
    IonicPageModule.forChild(ZusammenkuenftePage)
  ]
})
export class Module {}
