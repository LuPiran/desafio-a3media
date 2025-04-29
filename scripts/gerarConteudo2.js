import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const fs = require('fs');
const path = require('path');
const { faker } = require('@faker-js/faker');

// Função para escapar corretamente strings YAML para evitar problemas de formatação no arquivo Markdown
function yamlSafeString(str) {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

const gerarConteudo = (template) => {
  // Cria o caminho para o diretório onde os arquivos .md serão armazenados
  const dir = path.join(process.cwd(), 'content', template);
  
  // Cria a pasta se não existir
  if (!fs.existsSync(dir)) {
     // Cria o diretório com subdiretórios, se necessário
    fs.mkdirSync(dir, { recursive: true });
    // Exibe uma mensagem no console indicando que a pasta foi criada
    console.log(`🗂️ Pasta criada: ${dir}`);
  }

  // Gera 1000 arquivos
  // Loop para gerar 1000 arquivos
  for (let i = 1; i <= 1000; i++) {
    // Define o título da página como "Página X", onde X é o número da iteração
    const titulo = `Página ${i}`;
    // Link do vídeo fixo
    const video = '/videos/template2.mp4'; 
    // Link da imagem fixa
    const imagem = '/images/imagem-template2.png';

    // Gerando uma lista não ordenada com 10 itens usando faker (parágrafos maiores)
    const bodyList = [...Array(10)].map(() => `  - ${faker.lorem.paragraph()}`).join('\n'); // Gerando parágrafos completos com indentação

    // Conteúdo Markdown - define a estrutura do arquivo Markdown com frontmatter YAML
    const markdownContent = `---
titulo: "${titulo}"
video: "${video}"
imagem: "${imagem}"
body: |
${bodyList}
---
`;
    // Define o caminho do arquivo .md usando o número da página
    const filePath = path.join(dir, `${i}.md`);

    // Escreve o conteúdo no arquivo .md
    fs.writeFileSync(filePath, markdownContent, 'utf-8');

    // Exibe uma mensagem indicando que o arquivo foi criado
    console.log(`✅ Arquivo ${i}.md criado.`);
  }
};

// Chama a função para gerar os arquivos no diretório 'paginatemplate2'
gerarConteudo('paginatemplate2');



//const video = '/videos/template2.mp4'; // Link do vídeo fixo
//const imagem = '/images/imagem-template2.png'; 