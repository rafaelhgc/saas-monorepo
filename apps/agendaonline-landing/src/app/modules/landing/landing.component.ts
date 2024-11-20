import { Component, ElementRef, inject, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AnalyticsService } from '@saas/commons/services';
import { DSButtonDirective, DSInputFieldDirective } from '@saas/design-system';

@Component({
  standalone: true,
  imports: [DSButtonDirective, DSInputFieldDirective, RouterLink, ReactiveFormsModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  @ViewChild('formSuccess')
  formSuccessElementRef!: ElementRef;

  @ViewChild('formOptIn')
  formOptInElementRef!: ElementRef;

  analytics = inject(AnalyticsService);

  optInForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pains: new FormControl('', [Validators.required]),
    daily_appointments: new FormControl('', [Validators.required]),
  });

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
    { title: 'Estúdios de Fotografia', placeholder: 'photo_camera' },
  ];

  ngOnInit() {
    this.analytics.view('landing');
  }

  onSubmitOptIn() {
    if (this.optInForm.invalid) {
      this.optInForm.markAllAsTouched();
      return;
    }

    this.formOptInElementRef.nativeElement.classList.add('--has-reduct');
    this.formSuccessElementRef.nativeElement.classList.add('--is-active');
    this.analytics.callback('optin', this.optInForm.value);
  }
}
