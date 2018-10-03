import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListamensajesPage } from './listamensajes';

@NgModule({
  declarations: [
    ListamensajesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListamensajesPage),
  ],
})
export class ListamensajesPageModule {}
