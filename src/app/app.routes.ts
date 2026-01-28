import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { Home } from './pages/main-page/home/home';

export const routes: Routes = [
  { path: '', component: MainPage, children: [{ path: '', component: Home }] },
];
