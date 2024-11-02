import { Directive, ElementRef, inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'input[dsInputField], textarea[dsInputField]',
})
export class DSInputFieldDirective implements OnInit {
  elementRef = inject(ElementRef);

  renderer = inject(Renderer2);

  get hostElement() {
    return this.elementRef.nativeElement as HTMLElement;
  }

  ngOnInit() {
    this.renderer.addClass(this.hostElement, 'ds-input-field');
  }
}
