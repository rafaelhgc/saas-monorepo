import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DSButtonDirective, DSInputFieldDirective } from '@monorepo/design-system';

@Component({
  standalone: true,
  imports: [DSButtonDirective, DSInputFieldDirective, RouterLink],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  areas = [
      { title: 'Salões de Beleza', placeholder: 'health_and_beauty' },
      { title: 'Cabeleireiros', placeholder: 'content_cut' },
      { title: 'Barbearias', placeholder: 'face' },
      { title: 'Pet Shops', placeholder: 'pets' },
      { title: 'Psicólogos', placeholder: 'psychology' },
      { title: 'Academias', placeholder: 'fitness_center' },
      { title: 'Tatuadores', placeholder: 'brush' },
      { title: 'Massoterapeutas', placeholder: 'hotel' },
      { title: 'Veterinários', placeholder: 'pets' },
      { title: 'Coworkings', placeholder: 'business_center' },
      { title: 'Imobiliárias', placeholder: 'home_work' },
      { title: 'Aulas Particulares', placeholder: 'school' },
      { title: 'Estúdios de Yoga', placeholder: 'spa' },
      { title: 'Estúdios de Pilates', placeholder: 'self_improvement' },
      { title: 'Personal Trainers', placeholder: 'sports_martial_arts' },
      { title: 'Consultórios Médicos', placeholder: 'stethoscope' },
      { title: 'Clínicas de Fisioterapia', placeholder: 'healing' },
      { title: 'Clínicas de Estética', placeholder: 'emoji_nature' },
      { title: 'Clínicas Odontológicas', placeholder: 'dentistry' },
      { title: 'Estúdios de Fotografia', placeholder: 'photo_camera' }
  ];
}
