import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DSButtonDirective } from '@monorepo/design-system';

@Component({
  standalone: true,
  imports: [RouterLink, DSButtonDirective],
  styleUrls: ['./not-found.component.scss'],
  template: `
    <div class="not-found">
      <div class="container">
        <h2 class="not-found__title">Página não encontrada.</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia veniam et expedita exercitationem
          reiciendis consequuntur eos dolorum culpa ullam quisquam facilis itaque, alias sint iure commodi iusto?
          Quaerat, maxime culpa.
        </p>

        <a href="/" dsButton="primary">go back home</a>
      </div>
    </div>
  `,
})
export class NotFoundComponent {}
