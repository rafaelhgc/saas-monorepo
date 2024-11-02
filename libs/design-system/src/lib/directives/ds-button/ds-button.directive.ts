import { Directive, ElementRef, inject, Input, OnInit, Renderer2 } from '@angular/core';

type DSButtonDirectiveType = 'primary' | 'secondary' | 'link';

type DSButtonDirectiveModifiersType = '';

@Directive({
  standalone: true,
  selector: 'a[dsButton], button[dsButton]',
})
export class DSButtonDirective implements OnInit {
  @Input()
  dsButton: DSButtonDirectiveType = 'primary';

  @Input()
  modifiers: DSButtonDirectiveModifiersType = '';

  elementRef = inject(ElementRef);

  renderer = inject(Renderer2);

  get hostElement() {
    return this.elementRef.nativeElement as HTMLElement;
  }

  ngOnInit() {
    this.renderer.addClass(this.hostElement, 'ds-button');
    this.renderer.addClass(this.hostElement, `ds-button-${this.dsButton}`);
    this.modifiers
      .split(' ')
      .map((i) => i.trim())
      .filter((i) => i.length)
      .forEach((modifier) => this.renderer.addClass(this.hostElement, `--is-${modifier}`));
  }
}
