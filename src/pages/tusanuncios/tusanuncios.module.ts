import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TusanunciosPage } from './tusanuncios';

@NgModule({
  declarations: [
    TusanunciosPage,
  ],
  imports: [
    IonicPageModule.forChild(TusanunciosPage),
  ],
})
export class TusanunciosPageModule {}
