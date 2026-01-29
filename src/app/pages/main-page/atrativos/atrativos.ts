import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-atrativos',
  imports: [NgClass],
  templateUrl: './atrativos.html',
  styleUrl: './atrativos.scss',
})
export class Atrativos {
  navOptions: { title: string; isFirst?: boolean }[] = [
    { title: 'Teleférico da Aventura', isFirst: true },
    { title: 'Pirâmide' },
    { title: 'Cachoeira da Pedra Furada' },
    { title: 'Cachoeiras Garrote ' },
    { title: 'Cachoeiras Caverna' },
    { title: 'Cachoeira do Santuário' },
  ];

  cards: { imgUrl: string; title: string; description: string }[] = [
    {
      imgUrl: 'images/atr-1.png',
      title: 'Teleférico da Aventura',
      description:
        'Teleférico da Aventura O Teleférico da Aventura no Complexo da Pedra Caída é uma das melhores atrações do complexo. Com',
    },
    {
      imgUrl: 'images/atr-2.png',
      title: 'Pirâmide',
      description:
        'Pirâmide Na altitude de quase 400 metros, ergue-se a pirâmide de vidro da Pedra Caida, um tesouro no topo da',
    },
    {
      imgUrl: 'images/atr-3.png',
      title: 'Cachoeira da Pedra Furada',
      description:
        'Cachoeira da Pedra Furada A Cachoeira da Pedra Furada, integrante do complexo turístico de Pedra Caída, é um tesouro ainda',
    },
    {
      imgUrl: 'images/atr-4.png',
      title: 'Cachoeiras Garrote e Porteira',
      description:
        'Cachoeiras: Caverna e Capelão A Cachoeira da Caverna é um espetáculo à parte, destacando-se por suas cores encravadas dentro da',
    },
    {
      imgUrl: 'images/atr-5.png',
      title: 'Cachoeiras Caverna e Capelão',
      description:
        'Cachoeiras: Caverna e Capelão A Cachoeira da Caverna é um espetáculo à parte, destacando-se por suas cores encravadas dentro da',
    },
    {
      imgUrl: 'images/atr-6.png',
      title: 'Cachoeira do Santuário',
      description:
        'Um Espetáculo Natural: A Fascinante Cachoeira do Santuário Revelada Conta-se que, para os nativos, a Cachoeira do Santuário era mais',
    },
  ];
}
