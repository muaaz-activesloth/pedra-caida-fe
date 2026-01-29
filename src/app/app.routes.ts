import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { Home } from './pages/main-page/home/home';
import { Atrativos } from './pages/main-page/atrativos/atrativos';
import { Accommodation } from './pages/main-page/accommodation/accommodation';
import { Reservations } from './pages/main-page/reservations/reservations';
import { Precos } from './pages/main-page/precos/precos';
import { Politicas } from './pages/main-page/politicas/politicas';
import { Contato } from './pages/main-page/contato/contato';

export const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      { path: '', component: Home },
      { path: 'atrativos', component: Atrativos },
      { path: 'hospedagem', component: Accommodation },
      { path: 'reservas', component: Reservations },
      { path: 'precos', component: Precos },
      { path: 'politicas', component: Politicas },
      { path: 'contato', component: Contato },
      { path: '**', redirectTo: '' },
    ],
  },
];
