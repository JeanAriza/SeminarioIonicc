import { Component } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { ModalController,MenuController,NavController } from '@ionic/angular';
import { AuthorModalPage } from '../author-modal/author-modal.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  authors: any;
  booksOff: any;

  slideOps = {
    initialSlide: 0,
    slidesPerView: 3,
    centeredSlides: true,
    speed: 400
  }
  constructor(
    private libraryService: LibraryService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private menu: MenuController
    ) {}

  ionViewDidEnter(){
    this.libraryService.getAuthors().then( res => {
      this.authors = res;
    })
    this.booksOff = this.libraryService.getBooksOffline();
    console.log(this.booksOff.books);
  }

  async showAuthor(author:any) {
    const modal = await this.modalController.create({
      component: AuthorModalPage,
      componentProps: {
        author: author
      }
    });
    return await modal.present();
  }

  goToAuthors(){
    this.navCtrl.navigateForward("/menu/authors");
    this.menu.close();
  }

  goToBooks(){
    this.navCtrl.navigateRoot("/menu/books");
    this.menu.close();
  }


  goToMyFavorites(){
    this.navCtrl.navigateForward("/menu/favorite-books");
    this.menu.close();
  }

  goTotop(){
    this.navCtrl.navigateForward("/menu/top");
    this.menu.close();
  }


}
