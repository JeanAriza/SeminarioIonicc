import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 0, //slide inicial (primero) [0,1,2,3]
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, //que las slides enten centradas
    speed: 400 //velocidad movimiento de los slides
  }

  constructor(private router: Router) { }

  finish(){
    this.router.navigateByUrl("/home");
  }
  ngOnInit() {
  }

}