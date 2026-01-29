import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { Home } from './pages/main-page/home/home';
import { Atrativos } from './pages/main-page/atrativos/atrativos';
import { Accommodation } from './pages/main-page/accommodation/accommodation';

export const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      { path: '', component: Home },
      { path: 'atrativos', component: Atrativos },
      { path: 'accommodation', component: Accommodation },
    ],
  },
];
