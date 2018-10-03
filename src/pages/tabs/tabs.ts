import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FavoritosPage } from '../favoritos/favoritos';
import { TusanunciosPage} from '../tusanuncios/tusanuncios';
import { ListamensajesPage} from '../listamensajes/listamensajes'; 
import {ProfilePage} from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FavoritosPage;
  tab3Root = TusanunciosPage;
  tab4Root = ListamensajesPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
 