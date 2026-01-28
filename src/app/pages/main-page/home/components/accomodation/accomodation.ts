import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accomodation',
  imports: [NgClass],
  templateUrl: './accomodation.html',
  styleUrl: './accomodation.scss',
})
export class Accomodation {
  rooms: {
    title: string;
    colorClass: string;
    image: string;
    price: string;
    features: { icon: string; text: string }[];
  }[] = [
    {
      title: 'ap std one',
      colorClass: 'blue',
      image: 'images/attraction-img.png',
      price: 'R$ 390,00',
      features: [
        { icon: 'bi-tv', text: '01 TV' },
        { icon: 'bi-snow2', text: 'Ar' },
        { icon: 'bi-cup-straw', text: 'frigobar' },
        { icon: 'bi-segmented-nav', text: '01 cama casal' },
        { icon: 'bi-person-fill', text: 'até 02' },
      ],
    },
    {
      title: 'ap std',
      colorClass: 'navy',
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
      colorClass: 'orange',
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
      colorClass: 'yellow',
      image: 'images/attraction-img.png',
      price: 'R$ 550,00',
      features: [
        { icon: 'bi-tv', text: '01 TVs' },
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
