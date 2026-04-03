import { defineCollection, z } from 'astro:content';

const recursos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum(['Guias', 'Preços', 'Legislação', 'Instalação', 'Comparações']),
    author: z.string().default('Equipa Vida Acessível'),
    featured: z.boolean().default(false),
    heroImageAlt: z.string().optional(),
  }),
});

export const collections = { recursos };
