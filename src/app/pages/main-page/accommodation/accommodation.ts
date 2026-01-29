import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accommodation',
  imports: [NgClass],
  templateUrl: './accommodation.html',
  styleUrl: './accommodation.scss',
})
export class Accommodation {
  navOptions: { title: string; isFirst?: boolean }[] = [
    { title: 'Teleférico da Aventura', isFirst: true },
    { title: 'Pirâmide' },
    { title: 'Cachoeira da Pedra Furada' },
    { title: 'Cachoeiras Garrote ' },
    { title: 'Cachoeiras Caverna' },
    { title: 'Cachoeira do Santuário' },
  ];

  rooms: {
    title: string;
    colorClass: string;
    image: string;
    price: string;
    features: { icon: string; text: string }[];
  }[] = [
    {
      title: 'ap std one',
      colorClass: 'room-blue',
      image: 'images/attraction-img.png',
      price: 'R$ 390,00',
      features: [
        { icon: 'bi-tv', text: '01 TV' },
        { icon: 'bi-snow2', text: 'Ar' },
        { icon: 'bi-cup-straw', text: 'frigobar' },
        { icon: 'bi-segmented-nav', text: '01 cama casal' },
        { icon: 'bi-person-fill', text: 'até 02' },
        { icon: 'bi-person-fill', text: 'até 02' },
      ],
    },
    {
      title: 'ap std',
      colorClass: 'room-navy',
      image: 'images/attraction-img.png',
      price: 'R$ 420,00',
      features: [
        { icon: 'bi-tv', text: '01 TV' },
        { icon: 'bi-snow2', text: 'Ar' },
        { icon: 'bi-cup-straw', text: 'frigobar' },
        { icon: 'bi-segmented-nav', text: '01 cama casal' },
        { icon: 'bi-house-door', text: 'varanda' },
        { icon: 'bi-person-fill', text: 'até 02' },
      ],
    },
    {
      title: 'ap luxo',
      colorClass: 'room-cyan',
      image: 'images/attraction-img.png',
      price: 'R$ 480,00',
      features: [
        { icon: 'bi-tv', text: '02 TV' },
        { icon: 'bi-snow2', text: 'Ar' },
        { icon: 'bi-cup-straw', text: 'frigobar' },
        { icon: 'bi-lamp-fill', text: 'sala' },
        { icon: 'bi-house-door', text: 'varanda' },
        { icon: 'bi-segmented-nav', text: '01 cama casal' },
        { icon: 'bi-person-fill', text: 'até 02' },
      ],
    },
    {
      title: 'ap s. luxo',
      colorClass: 'room-light-blue',
      image: 'images/attraction-img.png',
      price: 'R$ 550,00',
      features: [
        { icon: 'bi-tv', text: '01 TV' },
        { icon: 'bi-snow2', text: 'Ar' },
        { icon: 'bi-cup-straw', text: 'frigobar' },
        { icon: 'bi-lamp-fill', text: 'sala' },
        { icon: 'bi-house-door', text: 'varanda' },
        { icon: 'bi-segmented-nav', text: '01 cama casal' },
        { icon: 'bi-person-fill', text: 'até 02' },
      ],
    },
  ];
}
