import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { LibraryService } from '../services/library.service';
@Component({
  selector: 'app-author-detail-modal',
  templateUrl: './author-detail-modal.page.html',
  styleUrls: ['./author-detail-modal.page.scss'],
})
export class AuthorDetailModalPage implements OnInit {

  author: any;
  user_id: any;
  constructor( 
    private navParams: NavParams,
    private modalController: ModalController,
    private storage: Storage,
    private libraryService: LibraryService
     ) { }

  async ngOnInit() {
    this.author = this.navParams.get("author");
    this.user_id = await this.storage.get("user_id");
    this.libraryService.getCheckLikeBook(this.user_id, this.author.id).subscribe((data:any) =>{
    },
    (error) => 
      console.log(error)
    )
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
