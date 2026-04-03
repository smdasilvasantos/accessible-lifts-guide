import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    recursos: collection({
      label: 'Recursos',
      slugField: 'title',
      path: 'src/content/recursos/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ label: 'Descrição', multiline: true }),
        pubDate: fields.date({ label: 'Data de Publicação' }),
        category: fields.select({
          label: 'Categoria',
          options: [
            { label: 'Guias', value: 'Guias' },
            { label: 'Preços', value: 'Preços' },
            { label: 'Legislação', value: 'Legislação' },
            { label: 'Instalação', value: 'Instalação' },
            { label: 'Comparações', value: 'Comparações' },
          ],
          defaultValue: 'Guias',
        }),
        author: fields.text({ label: 'Autor', defaultValue: 'Equipa Vida Acessível' }),
        featured: fields.checkbox({ label: 'Destaque', defaultValue: false }),
        heroImageAlt: fields.text({ label: 'Alt da imagem principal', validation: { isRequired: false } }),
        content: fields.markdoc({ label: 'Conteúdo' }),
      },
    }),
  },
});
