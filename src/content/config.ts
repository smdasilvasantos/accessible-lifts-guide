import { defineCollection, z } from 'astro:content';

const recursos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    updatedDate: z.string().optional(),
    author: z.string().default('Equipa Vida Acessível'),
    category: z.enum(['Preços', 'Guias', 'Apoios', 'Instalação', 'Equipamentos']),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { recursos };
