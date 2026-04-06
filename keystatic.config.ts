import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'smdasilvasantos/accessible-lifts-guide',
  },
  ui: {
    brand: { name: 'Vida Acessível CMS' },
  },
  collections: {
    recursos: collection({
      label: 'Recursos & Artigos',
      slugField: 'title',
      path: 'src/content/recursos/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({
          label: 'Descrição (meta description)',
          multiline: true,
          validation: { length: { max: 155 } },
        }),
        pubDate: fields.date({ label: 'Data de publicação' }),
        updatedDate: fields.date({ label: 'Data de atualização', defaultValue: undefined }),
        author: fields.text({ label: 'Autor', defaultValue: 'Equipa Vida Acessível' }),
        category: fields.select({
          label: 'Categoria',
          options: [
            { label: 'Preços', value: 'Preços' },
            { label: 'Guias', value: 'Guias' },
            { label: 'Apoios', value: 'Apoios' },
            { label: 'Instalação', value: 'Instalação' },
            { label: 'Equipamentos', value: 'Equipamentos' },
          ],
          defaultValue: 'Guias',
        }),
        heroImageAlt: fields.text({ label: 'Alt text da imagem principal' }),
        featured: fields.checkbox({ label: 'Artigo em destaque', defaultValue: false }),
        content: fields.markdoc({ label: 'Conteúdo' }),
      },
    }),
  },
});
