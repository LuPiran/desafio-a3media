// scripts/gerarConteudo.js

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const fs = require('fs');
const path = require('path');
const { faker } = require('@faker-js/faker');

// Função para escapar corretamente strings YAML
function yamlSafeString(str) {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

const gerarConteudo = (template) => {
  const dir = path.join(process.cwd(), 'content', template);
  
  // Cria a pasta se não existir
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`🗂️ Pasta criada: ${dir}`);
  }

  // Gera 1000 arquivos
  for (let i = 1; i <= 1000; i++) {
    const titulo = `Página ${i}`;
    const imagem = '/images/imagem-template1.png'; // Imagem fixa
    const body = yamlSafeString(faker.lorem.paragraphs(5, '\n\n'));

    const markdownContent = `---
titulo: "${titulo}"
imagem: "${imagem}"
body: "${body}"
---
`;

    const filePath = path.join(dir, `${i}.md`);
    fs.writeFileSync(filePath, markdownContent, 'utf-8');
    console.log(`✅ Arquivo ${i}.md criado.`);
  }
};

gerarConteudo('paginatemplate1');


/*
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const fs = require('fs');
const path = require('path');
const { faker } = require('@faker-js/faker');

const gerarConteudo = (template) => {
  const dir = path.join(process.cwd(), 'content', template);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (let i = 1; i <= 1000; i++) {
    const conteudo = {
      titulo: faker.lorem.sentence(),
      descricao: faker.lorem.paragraph(),
      imagem: faker.image.urlLoremFlickr({ category: 'nature' }),
    };
    fs.writeFileSync(
      path.join(dir, `${i}.json`),
      JSON.stringify(conteudo, null, 2)
    );
  }
};

gerarConteudo('paginatemplate1');
gerarConteudo('paginatemplate2');
*/