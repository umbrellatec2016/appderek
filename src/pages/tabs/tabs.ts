import { Component, ViewChild } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FavoritosPage } from '../favoritos/favoritos';
import { TusanunciosPage} from '../tusanuncios/tusanuncios';
import { ListamensajesPage} from '../listamensajes/listamensajes'; 
import {ProfilePage} from '../profile/profile';
import {NativePageTransitions,NativeTransitionOptions} from '@ionic-native/native-page-transitions';
import {Slides, Tabs} from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild("tabs") tabs: Tabs;
  @ViewChild(Slides) slides: Slides;
  tab1Root = HomePage;
  tab2Root = FavoritosPage;
  tab3Root = TusanunciosPage;
  tab4Root = ListamensajesPage;
  tab5Root = ProfilePage;
  slideChange(){
    if(this.slides.getActiveIndex() == 0){
      this.tabs.select(0);
      this.slides.slideTo(0);
    }
    if(this.slides.getActiveIndex()==1)
    {
      this.tabs.select(1);
      this.slides.slideTo(1);
    }
    if(this.slides.getActiveIndex()==2)
    {
      this.tabs.select(2);
      this.slides.slideTo(2);
    }
    if(this.slides.getActiveIndex()==3)
    {
      this.tabs.select(3);
      this.slides.slideTo(3);
    }
    if(this.slides.getActiveIndex()==4)
    {
      this.tabs.select(4);
      this.slides.slideTo(4);
    }
  }
  tabChange(){
    if(this.tabs.getSelected().index == 0){
      this.tabs.select(0);
      this.slides.slideTo(0);
    }
    if(this.tabs.getSelected().index == 1){
      this.tabs.select(1);
      this.slides.slideTo(1);
    }
    if(this.tabs.getSelected().index == 2){
      this.tabs.select(2);
      this.slides.slideTo(2);
    }
    if(this.tabs.getSelected().index == 3){
      this.tabs.select(3);
      this.slides.slideTo(3);
    }
    if(this.tabs.getSelected().index == 4){
      this.tabs.select(4);
      this.slides.slideTo(4);
    }
  }
  constructor(private nativePageTransitions: NativePageTransitions) {

  }
}
 