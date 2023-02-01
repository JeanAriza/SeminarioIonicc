import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { ModalController } from '@ionic/angular';
import { BookDetailModalPage } from '../book-detail-modal/book-detail-modal.page';

@Component({
  selector: 'app-top',
  templateUrl: './top.page.html',
  styleUrls: ['./top.page.scss'],
})
export class TopPage implements OnInit {

  listTop: any;

  constructor(
    private libraryService: LibraryService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.libraryService.getBooks().then(books => {
      this.books = books;
       console.log(this.books)
    })
  }

  ionViewWillEnter(){
    this.GetListTopBooks();
  }

  GetListTopBooks(){
    this.libraryService.GetListTop().then((data:any) => {
      this.listTop =  data 
      console.log(data)
    })
  }
  
  books: any;

 

  async showBook(book: any){
    const modal = await this.modalController.create({
      component: BookDetailModalPage,
      componentProps: {
        book: book
      }
    });
    return await modal.present();
  }


}
