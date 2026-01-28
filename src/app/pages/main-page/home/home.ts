import { Component } from '@angular/core';
import { Accomodation } from './components/accomodation/accomodation';
import { OurAttraction } from './components/our-attraction/our-attraction';
import { BookingCalendar } from './components/booking-calendar/booking-calendar';
import { InfoDetails } from './components/info-details/info-details';
import { Concierge } from './components/concierge/concierge';
import { Bands } from './components/bands/bands';
import { BannerImages } from './components/banner-images/banner-images';
import { Maps } from './components/maps/maps';

@Component({
  selector: 'app-home',
  imports: [
    Accomodation,
    OurAttraction,
    BookingCalendar,
    InfoDetails,
    Concierge,
    Bands,
    BannerImages,
    Maps,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
