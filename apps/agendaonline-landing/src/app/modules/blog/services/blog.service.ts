import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { filter, map, of, switchMap, throwError } from 'rxjs';
import { Post } from '../modes/post.model';

@Injectable({ providedIn: 'root' })
export class BlogService {
  http = inject(HttpClient);
  posts = [
    {
      title: 'Agendamento Online para Consultórios: Conforto e Eficiência',
      coverImage: 'agendamento-online-para-consultorios-conforto-e-eficiencia.jpg',
      slug: 'agendamento-online-para-consultorios-conforto-e-eficiencia',
      createdAt: '2024-11-02T12:16:50.676Z',
      tags: ['AgendamentoOnline', 'Consultórios', 'AgendaOnlineMe', 'Eficiência', 'GestãoDeHorários', 'Produtividade'],
      related: [
        {
          title: 'Vantagens Competitivas do Agendamento Online',
          coverImage: 'vantagens-competitivas-do-agendamento-online.jpg',
          slug: 'vantagens-competitivas-do-agendamento-online',
        },
        {
          title: 'Importância das Plataformas de Agendamento para Negócios',
          coverImage: 'importancia-das-plataformas-de-agendamento.jpg',
          slug: 'importancia-das-plataformas-de-agendamento',
        },
        { 
          title: 'Agendamento Online e a Satisfação do Cliente',
          coverImage: 'agendamento-online-e-a-satisfacao-do-cliente.jpg',
          slug: 'agendamento-online-e-a-satisfacao-do-cliente',
        }
      ],
    },
    {
      title: 'Benefícios do Agendamento Online para Salões de Beleza',
      coverImage: 'beneficios-do-agendamento-online-para-saloes-de-beleza.jpg',
      slug: 'beneficios-do-agendamento-online-para-saloes-de-beleza',
      createdAt: '2024-10-30T00:16:50.676Z',
      tags: ['AgendamentoOnline', 'SalaoDeBeleza', 'AgendaOnlineMe', 'Produtividade', 'GestãoDeTempo', 'AtendimentoAoCliente'],
      related: [
        {
          title: 'Importância das Plataformas de Agendamento para Negócios',
          coverImage: 'importancia-das-plataformas-de-agendamento.jpg',
          slug: 'importancia-das-plataformas-de-agendamento',
        },
        { 
          title: 'Agendamento Online e a Satisfação do Cliente',
          coverImage: 'agendamento-online-e-a-satisfacao-do-cliente.jpg',
          slug: 'agendamento-online-e-a-satisfacao-do-cliente',
        }
      ],
    },
    {
      title: 'Vantagens Competitivas do Agendamento Online',
      coverImage: 'vantagens-competitivas-do-agendamento-online.jpg',
      slug: 'vantagens-competitivas-do-agendamento-online',
      createdAt: '2024-10-26T00:16:50.676Z',
      tags: ['AgendamentoOnline', 'VantagemCompetitiva', 'AgendaOnlineMe', 'AtendimentoAoCliente', 'Gestão'],
      related: [
        {
          title: 'Importância das Plataformas de Agendamento para Negócios',
          coverImage: 'importancia-das-plataformas-de-agendamento.jpg',
          slug: 'importancia-das-plataformas-de-agendamento',
        },
        { 
          title: 'Agendamento Online e a Satisfação do Cliente',
          coverImage: 'agendamento-online-e-a-satisfacao-do-cliente.jpg',
          slug: 'agendamento-online-e-a-satisfacao-do-cliente',
        }
      ],
    },
    {
      title: 'Agendamento Online e a Satisfação do Cliente',
      coverImage: 'agendamento-online-e-a-satisfacao-do-cliente.jpg',
      slug: 'agendamento-online-e-a-satisfacao-do-cliente',
      createdAt: '2024-10-21T00:16:50.676Z',
      tags: ['AgendamentoOnline', 'SatisfacaoDoCliente', 'AgendaOnlineMe', 'AtendimentoAoCliente', 'FidelizacaoDeClientes'],
      related: [
        {
          title: 'Importância das Plataformas de Agendamento para Negócios',
          coverImage: 'importancia-das-plataformas-de-agendamento.jpg',
          slug: 'importancia-das-plataformas-de-agendamento',
        },
        {
          title: 'Vantagens Competitivas do Agendamento Online',
          coverImage: 'vantagens-competitivas-do-agendamento-online.jpg',
          slug: 'vantagens-competitivas-do-agendamento-online',
        }
      ],
    },
    {
      title: 'Importância das Plataformas de Agendamento para Negócios',
      coverImage: 'importancia-das-plataformas-de-agendamento.jpg',
      slug: 'importancia-das-plataformas-de-agendamento',
      createdAt: '2024-10-15T00:16:50.676Z',
      tags: ['AgendamentoOnline', 'Produtividade', 'Eficiência', 'AgendaOnlineMe', 'GestãoDeTempo', 'FerramentasDeAgendamento', 'SatisfaçãoDoCliente'],
      related: [
        {
          title: 'Agendamento Online e a Satisfação do Cliente',
          coverImage: 'agendamento-online-e-a-satisfacao-do-cliente.jpg',
          slug: 'agendamento-online-e-a-satisfacao-do-cliente',
        },
        {
          title: 'Vantagens Competitivas do Agendamento Online',
          coverImage: 'vantagens-competitivas-do-agendamento-online.jpg',
          slug: 'vantagens-competitivas-do-agendamento-online',
        }
      ],
    },
  ] as Post[];

  readAll() {
    return of(this.posts);
  }

  details(slug: string) {
    const post = this.posts.find((p) => p.slug === slug);

    if (!post) return throwError(() => new Error('not found'));

    return this.http.get(`/posts/${slug}.md`, { responseType: 'text' }).pipe(
      map(
        (content) =>
          ({
            ...post,
            content,
          } as Post)
      )
    );
  }
}
