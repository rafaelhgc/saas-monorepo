import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { filter, map, of, switchMap, throwError } from 'rxjs';
import { Post } from '../modes/post.model';

@Injectable({ providedIn: 'root' })
export class BlogService {
  http = inject(HttpClient);
  posts = [
    {
      title: 'Agendamento Online para Cabeleireiros: Praticidade e Organização',
      coverImage: 'agendamento-online-para-cabeleireiros-praticidade-e-organizacao.jpg',
      slug: 'agendamento-online-para-cabeleireiros-praticidade-e-organizacao',
      createdAt: '2024-11-16T12:16:50.676Z',
      tags: ['AgendamentoOnline', 'Cabeleireiros', 'AgendaOnlineMe', 'GestãoDeTempo', 'AtendimentoCliente', 'Beleza'],
      related: [
        {
          title: 'Benefícios do Agendamento Online para Salões de Beleza',
          coverImage: 'beneficios-do-agendamento-online-para-saloes-de-beleza.jpg',
          slug: 'beneficios-do-agendamento-online-para-saloes-de-beleza',
        },
        { 
          title: 'Agendamento Online e a Satisfação do Cliente',
          coverImage: 'agendamento-online-e-a-satisfacao-do-cliente.jpg',
          slug: 'agendamento-online-e-a-satisfacao-do-cliente',
        },
        {
          title: 'Importância das Plataformas de Agendamento para Negócios',
          coverImage: 'importancia-das-plataformas-de-agendamento.jpg',
          slug: 'importancia-das-plataformas-de-agendamento',
        }
      ],
    },
    {
      title: 'Dicas para Maximizar o Uso de uma Ferramenta de Agendamento',
      coverImage: 'dicas-para-maximizar-o-uso-de-uma-ferramenta-de-agendamento.jpg',
      slug: 'dicas-para-maximizar-o-uso-de-uma-ferramenta-de-agendamento',
      createdAt: '2024-11-06T12:16:50.676Z',
      tags: ['AgendamentoOnline', 'DicasProdutividade', 'GestãoDeTempo', 'AgendaOnlineMe', 'Eficiência'],
      related: [
        { 
          title: 'Dicas para Reduzir Cancelamentos com Agendamento Online',
          coverImage: 'dicas-para-reduzir-cancelamentos-com-agendamento-online.jpg',
          slug: 'dicas-para-reduzir-cancelamentos-com-agendamento-online',
        },
        { 
          title: 'Dicas para Melhorar a Comunicação com Clientes usando Agendamento Online',
          coverImage: 'dicas-para-melhorar-a-comunicacao-com-clientes-usando-agendamento-online.jpg',
          slug: 'dicas-para-melhorar-a-comunicacao-com-clientes-usando-agendamento-online',
        },
        {
          title: 'Como o Agendamento Online Pode Ajudar a Expandir seu Negócio',
          coverImage: 'como-o-agendamento-online-pode-ajudar-a-expandir-seu-negocio.jpg',
          slug: 'como-o-agendamento-online-pode-ajudar-a-expandir-seu-negocio',
        }
      ],
    },
    {
      title: 'Dicas para Reduzir Cancelamentos com Agendamento Online',
      coverImage: 'dicas-para-reduzir-cancelamentos-com-agendamento-online.jpg',
      slug: 'dicas-para-reduzir-cancelamentos-com-agendamento-online',
      createdAt: '2024-11-02T12:16:50.676Z',
      tags: ['AgendamentoOnline', 'ReduzirCancelamentos', 'Produtividade', 'AgendaOnlineMe', 'LembretesAutomáticos'],
      related: [
        { 
          title: 'Dicas para Maximizar o Uso de uma Ferramenta de Agendamento',
          coverImage: 'dicas-para-maximizar-o-uso-de-uma-ferramenta-de-agendamento.jpg',
          slug: 'dicas-para-maximizar-o-uso-de-uma-ferramenta-de-agendamento',
        },
        {
          title: 'Como o Agendamento Online Pode Ajudar a Expandir seu Negócio',
          coverImage: 'como-o-agendamento-online-pode-ajudar-a-expandir-seu-negocio.jpg',
          slug: 'como-o-agendamento-online-pode-ajudar-a-expandir-seu-negocio',
        },
        {
          title: 'Dicas para Personalizar a Experiência do Cliente com Agendamento Online',
          coverImage: 'dicas-para-personalizar-a-experiencia-do-cliente-com-agendamento-online.jpg',
          slug: 'dicas-para-personalizar-a-experiencia-do-cliente-com-agendamento-online',
        }
      ],
    },
    {
      title: 'Dicas para Melhorar a Comunicação com Clientes usando Agendamento Online',
      coverImage:'dicas-para-melhorar-a-comunicacao-com-clientes-usando-agendamento-online.jpg',
      slug: 'dicas-para-melhorar-a-comunicacao-com-clientes-usando-agendamento-online',
      createdAt: '2024-10-30T12:16:50.676Z',
      tags: ['AgendamentoOnline', 'ComunicaçãoCliente', 'AgendaOnlineMe', 'Feedback', 'Fidelização'],
      related: [
        {
          title: 'Como o Agendamento Online Pode Ajudar a Expandir seu Negócio',
          coverImage: 'como-o-agendamento-online-pode-ajudar-a-expandir-seu-negocio.jpg',
          slug: 'como-o-agendamento-online-pode-ajudar-a-expandir-seu-negocio',
        },
        {
          title: 'Dicas para Personalizar a Experiência do Cliente com Agendamento Online',
          coverImage: 'dicas-para-personalizar-a-experiencia-do-cliente-com-agendamento-online.jpg',
          slug: 'dicas-para-personalizar-a-experiencia-do-cliente-com-agendamento-online',
        },
        {
          title: 'Agendamento Online para Psicólogos: Praticidade e Discrição',
          coverImage: 'agendamento-online-para-psicologos-praticidade-e-discricao.jpg',
          slug: 'agendamento-online-para-psicologos-praticidade-e-discricao',
        }
      ],
    },
    {
      title: 'Dicas para Personalizar a Experiência do Cliente com Agendamento Online',
      coverImage: 'dicas-para-personalizar-a-experiencia-do-cliente-com-agendamento-online.jpg',
      slug: 'dicas-para-personalizar-a-experiencia-do-cliente-com-agendamento-online',
      createdAt: '2024-10-26T12:16:50.676Z',
      tags: ['AgendamentoOnline', 'ExperiênciaDoCliente', 'Personalização', 'AgendaOnlineMe', 'AtendimentoPremium'],
      related: [
        { 
          title: 'Dicas para Melhorar a Comunicação com Clientes usando Agendamento Online',
          coverImage: 'dicas-para-melhorar-a-comunicacao-com-clientes-usando-agendamento-online.jpg',
          slug: 'dicas-para-melhorar-a-comunicacao-com-clientes-usando-agendamento-online',
        },
        {
          title: 'Como o Agendamento Online Pode Ajudar a Expandir seu Negócio',
          coverImage: 'como-o-agendamento-online-pode-ajudar-a-expandir-seu-negocio.jpg',
          slug: 'como-o-agendamento-online-pode-ajudar-a-expandir-seu-negocio',
        },
        { 
          title: 'Vantagens Competitivas do Agendamento Online',
          coverImage: 'vantagens-competitivas-do-agendamento-online.jpg',
          slug: 'vantagens-competitivas-do-agendamento-online',
        }
      ],
    },
    {
      title: 'Como o Agendamento Online Pode Ajudar a Expandir seu Negócio',
      coverImage: 'como-o-agendamento-online-pode-ajudar-a-expandir-seu-negocio.jpg',
      slug: 'como-o-agendamento-online-pode-ajudar-a-expandir-seu-negocio',
      createdAt: '2024-10-18T12:16:50.676Z',
      tags: ['AgendamentoOnline', 'ExpansaoDeNegocios', 'AgendaOnlineMe', 'GestãoDeClientes', 'Produtividade', 'CrescimentoEmpresarial'],
      related: [
        {
          title: 'Dicas para Melhorar a Comunicação com Clientes usando Agendamento Online',
          coverImage:'dicas-para-melhorar-a-comunicacao-com-clientes-usando-agendamento-online.jpg',
          slug: 'dicas-para-melhorar-a-comunicacao-com-clientes-usando-agendamento-online',
        },
        {
          title: 'Dicas para Personalizar a Experiência do Cliente com Agendamento Online',
          coverImage: 'dicas-para-personalizar-a-experiencia-do-cliente-com-agendamento-online.jpg',
          slug: 'dicas-para-personalizar-a-experiencia-do-cliente-com-agendamento-online',
        },
        { 
          title: 'Vantagens Competitivas do Agendamento Online',
          coverImage: 'vantagens-competitivas-do-agendamento-online.jpg',
          slug: 'vantagens-competitivas-do-agendamento-online',
        }
      ],
    },
    {
      title: 'Agendamento Online para Psicólogos: Praticidade e Discrição',
      coverImage: 'agendamento-online-para-psicologos-praticidade-e-discricao.jpg',
      slug: 'agendamento-online-para-psicologos-praticidade-e-discricao',
      createdAt: '2024-10-16T12:16:50.676Z',
      tags: ['AgendamentoOnline', 'Psicologia', 'AgendaOnlineMe', 'Confidencialidade', 'Eficiência', 'Produtividade', 'GestãoDeHorários'],
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
        },
        {
          title: 'Importância das Plataformas de Agendamento para Negócios',
          coverImage: 'importancia-das-plataformas-de-agendamento.jpg',
          slug: 'importancia-das-plataformas-de-agendamento',
        }
      ],
    },
    {
      title: 'Agendamento Online para Consultórios: Conforto e Eficiência',
      coverImage: 'agendamento-online-para-consultorios-conforto-e-eficiencia.jpg',
      slug: 'agendamento-online-para-consultorios-conforto-e-eficiencia',
      createdAt: '2024-10-12T12:16:50.676Z',
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
      createdAt: '2024-10-05T05:16:50.676Z',
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
      createdAt: '2024-09-26T00:16:50.676Z',
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
      createdAt: '2024-09-21T00:16:50.676Z',
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
      createdAt: '2024-09-15T00:16:50.676Z',
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
