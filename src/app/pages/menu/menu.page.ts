import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Home',
      url: '/menu/main',
      icon: 'home'
    },
    {
      title: 'Eventos',
      url: 'publico/ver-eventos',
      icon: 'map'
    },
    {
      title: 'Solicitante',
      children: [
        {
          title: 'Ingresar Solicitud',
          url: 'solicitante/ingresar-solicitud',
          icon: 'add-circle'
        },
        {
          title: 'Ver Solicitudes',
          url: 'solicitante/ver-solicitudes',
          icon: 'map'
        }
      ]
    },
    {
      title: 'Asistente',
      children: [
        {
          title: 'Ver Solicitudes',
          url: 'asistente/ver-solicitudes',
          icon: 'map'
        }
      ]
    },
    {
      title: 'Gobernador',
      children: [
        {
          title: 'Ver Solicitudes',
          url: 'gobernador/ver-solicitudes',
          icon: 'map'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
