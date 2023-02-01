import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.page.html',
  styleUrls: ['./top.page.scss'],
})
export class TopPage implements OnInit {

  listTop: any;

  constructor(
    private libraryService: LibraryService
  ) { }

  ngOnInit() {
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


}
