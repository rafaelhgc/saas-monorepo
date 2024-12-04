import { Component, ElementRef, inject, OnDestroy, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AnalyticsService } from '@saas/commons/services';
import { DSButtonDirective, DSInputFieldDirective } from '@saas/design-system';
import { OptInService } from '../../core/services/opt-in.service';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

@Component({
  standalone: true,
  imports: [DSButtonDirective, DSInputFieldDirective, RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, OnDestroy {
  @ViewChild('formSuccess')
  formSuccessElementRef!: ElementRef;

  @ViewChild('formOptIn')
  formOptInElementRef!: ElementRef;

  destroyRef$ = new Subject<void>();

  analytics = inject(AnalyticsService);

  optinService = inject(OptInService);

  optInForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pains: new FormControl('', []),
    daily_appointments: new FormControl('', []),
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
    this.optinService.toggle.pipe(takeUntil(this.destroyRef$)).subscribe(() => {
      this.formOptInElementRef?.nativeElement.classList.remove('--has-reduct');
      this.formSuccessElementRef?.nativeElement.classList.remove('--is-active');
    });
    this.analytics.view('landing');
  }

  ngOnDestroy() {
    this.destroyRef$.next();
    this.destroyRef$.unsubscribe();
  }

  onSubmitOptIn() {
    this.analytics.click('optin', { valid: !this.optInForm.invalid });

    if (this.optInForm.invalid) {
      this.optInForm.markAllAsTouched();
      return;
    }

    this.optinService.emit(false);
    this.formOptInElementRef.nativeElement.classList.add('--has-reduct');
    this.formSuccessElementRef.nativeElement.classList.add('--is-active');
    this.analytics.callback('optin', {
      name: this.optInForm.value.name,
      email: this.optInForm.value.email,
      pains: this.optInForm.value.pains,
      daily_appointments: this.optInForm.value.daily_appointments,
    });
  }

  sendClickDemo() {
    this.optinService.emit(true);
    this.analytics.click('lp-demo');
  }
}
