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
      description: 'Descubra como o agendamento online pode transformar a gestão de cabeleireiros. Aumente sua produtividade, reduza cancelamentos e ofereça um atendimento eficiente para seus clientes.',
      tags: [
        'Agendamento Online para Cabeleireiros',
        'Plataforma de Agendamento',
        'Gestão de Horários',
        'Redução de Cancelamentos',
        'Produtividade para Salões',
        'Organização de Agenda'
      ],
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
      description: 'Aproveite ao máximo sua ferramenta de agendamento. Aumente a eficiência, reduza atrasos e melhore a experiência dos seus clientes.',
      tags: [
        'Dicas de Agendamento Online',
        'Ferramentas de Agendamento',
        'Gestão de Compromissos',
        'Produtividade',
        'Eficiência no Atendimento'
      ],
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
      description: 'Reduza faltas e atrasos com agendamento online. Descubra estratégias para melhorar a experiência e aumentar sua taxa de comparecimento.',
      tags: [
        'Redução de Cancelamentos',
        'Agendamento Online Eficiente',
        'Lembretes Automáticos',
        'Produtividade para Negócios',
        'Gestão de Clientes'
      ],
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
      coverImage: 'dicas-para-melhorar-a-comunicacao-com-clientes-usando-agendamento-online.jpg',
      slug: 'dicas-para-melhorar-a-comunicacao-com-clientes-usando-agendamento-online',
      createdAt: '2024-10-30T12:16:50.676Z',
      description: 'Melhore sua comunicação com clientes usando agendamento online. Envie lembretes e acompanhe cada etapa para fidelizar seu público.',
      tags: [
        'Melhorar Comunicação com Clientes',
        'Agendamento Online Personalizado',
        'Fidelização de Clientes',
        'Produtividade no Atendimento',
        'Feedback e Melhorias'
      ],
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
      description: 'Ofereça um atendimento único com agendamento online personalizado. Descubra como criar experiências que fidelizam clientes.',
      tags: [
        'Personalização de Agendamento',
        'Experiência do Cliente',
        'Fidelização de Clientes',
        'Atendimento Personalizado',
        'Agenda Online'
      ],
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
      description: 'Descubra como o agendamento online pode ajudar a expandir seu negócio. Aumente a eficiência, conquiste novos clientes e organize sua gestão.',
      tags: [
        'Expansão de Negócios com Agendamento',
        'Gestão de Clientes',
        'Crescimento Empresarial',
        'Agendamento Online Eficiente',
        'Produtividade para Negócios'
      ],
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
      description: 'Melhore a gestão de consultórios de psicologia com agendamento online. Ofereça praticidade, confidencialidade e eficiência para seus clientes.',
      tags: [
        'Agendamento para Psicólogos',
        'Plataforma de Psicologia',
        'Gestão de Horários',
        'Confidencialidade',
        'Atendimento Eficiente'
      ],
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
      description: 'Descubra os benefícios do agendamento online para salões de beleza. Reduza atrasos, organize horários e melhore a experiência dos clientes.',
      tags: [
        'Agendamento para Salões de Beleza',
        'Plataforma para Cabeleireiros',
        'Gestão de Agenda',
        'Redução de Cancelamentos',
        'Produtividade para Salões'
      ],
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
      description: 'Descubra como o agendamento online pode oferecer vantagens competitivas. Fidelize clientes, reduza erros e simplifique processos.',
      tags: [
        'Vantagens Competitivas',
        'Agendamento Online Eficiente',
        'Gestão de Clientes',
        'Produtividade para Negócios',
        'Fidelização de Clientes'
      ],
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
      description: 'Descubra como o agendamento online pode melhorar a satisfação do cliente. Ofereça praticidade, agilidade e um atendimento impecável.',
      tags: [
        'Satisfação do Cliente',
        'Agendamento Online Eficiente',
        'Fidelização de Clientes',
        'Atendimento ao Cliente',
        'Melhor Gestão de Agenda'
      ],
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
      description: 'Entenda como plataformas de agendamento online podem transformar negócios. Melhore a produtividade, a organização e a satisfação do cliente.',
      tags: [
        'Plataformas de Agendamento',
        'Produtividade nos Negócios',
        'Ferramentas de Agendamento',
        'Gestão de Tempo Eficiente',
        'Satisfação do Cliente'
      ],
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
