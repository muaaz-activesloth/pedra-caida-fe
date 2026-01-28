import { Component } from '@angular/core';

@Component({
  selector: 'app-our-attraction',
  imports: [],
  templateUrl: './our-attraction.html',
  styleUrl: './our-attraction.scss',
})
export class OurAttraction {
  carosalImgs: { imgSrc: string; title: string }[] = [
    { imgSrc: 'images/img-2.png', title: 'Pirâmide' },
    { imgSrc: 'images/img-3.png', title: 'Cachoeira da Pedra Furada' },
    { imgSrc: 'images/img-4.png', title: 'Cachoeiras Garrote e Porteira' },
    { imgSrc: 'images/img-5.png', title: 'Cachoeiras Caverna e Capelão' },
    { imgSrc: 'images/img-6.png', title: 'Cachoeira do Santuário' },
  ];
}
