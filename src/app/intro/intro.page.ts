import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

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

  slides = [
    {
      title: "BlueBook",
      img: "../../assets/icon/Logo Libreria.png",
      description: "BlueBook te trae los mejores nuevos títulos seleccionados por nuestros editores. selección exclusiva de ficción contemporánea te ayuda a conectarte con historias absorbentes fuera de tu entorno."
    },
    {
      title: "BlueBook",
      desc: "¿Te interesa estar al día con el contexto político actual? Nuestra selección de libros electrónicos sobre política ofrece tanto intriga como conocimiento.",
      subtitle: "Suscribete",
      description: "Con una suscripción a los libros electrónicos de BlueBook, puedes acceder a esos títulos y más mediante un navegador web o un dispositivo Android o iOS.",
      img: "assets/logo.png",
    },
    {
      desc: null,
      subtitle: "BlueBook",
      img: "../../assets/icon/Logo Libreria.png",
      description: " Si te interesa más explorar un nuevo pasatiempo o mejorar uno, te recomendamos explorar nuestros libros electrónicos sobre cocina, alimentos y vinos, así como nuestros títulos sobre el hogar y el jardín"
    },
    {
      title: "BlueBook",
      desc: " trabajamos diariamente para ofrecerte los títulos que estás buscando en diversas áreas como: novelas, ficción, diccionarios, libros universitarios, cuentos infantiles y los best sellers de moda! todo a un solo clic. Encuentra el libro que estás necesitando en nuestro buscador inteligente.",
      subtitle: "Autores",
      description: " Nuestra amplia selección de libros electrónicos populares en verdad tiene algo para todos. Los títulos más vendidos sobre la superación personal —de personas como Mark Manson, Rachel Hollis, Stephen R. Covey y más—",
      icon: "close"
    },
  ]

  constructor(private router: Router, private storage: Storage) {
  }

  finish(){
    this.storage.set("IsHomeShowed", true);
    this.router.navigateByUrl("/login");
  }
  ngOnInit() {
  }

}