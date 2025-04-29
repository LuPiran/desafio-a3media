

import { defineConfig } from 'tinacms';

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null,
  token: null,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'paginatemplate1',
        label: 'Página Template 1',
        path: 'content/paginatemplate1',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'titulo',
            label: 'Título',
          },
          {
            type: 'string',
            name: 'imagem',
            label: 'Imagem',
          },
          {
            type: 'string',
            name: 'body',
            label: 'Conteúdo',
            ui: {
              component: 'textarea',
            },
          },
        ],
      },
      {
        name: 'paginatemplate2',
        label: 'Página Template 2',
        path: 'content/paginatemplate2/',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'titulo',
            label: 'Título',
          },
          {
            type: 'string',
            name: 'video',
            label: 'Vídeo',
          },
          {
            type: 'string',
            name: 'imagem',
            label: 'Imagem',
          },
          {
            type: 'string',
            name: 'body',
            label: 'Conteúdo',
            ui: {
              component: 'textarea',
            },
          },
        ],
      },
    ],
  },
});
