import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  navItems: {
    label: string;
    path?: string;
    isButton?: boolean;
    isIcon?: boolean;
    icon?: string;
  }[] = [
    { label: 'Home', path: '/' },
    { label: 'Atrativos', path: '/atrativos' },
    { label: 'Hospedagem', path: '/hospedagem' },
    { label: 'Reservas', path: '/reservas' },
    { label: 'Precos', path: '/precos' },
    { label: 'Politicas', path: '/politicas' },
  ];
}
