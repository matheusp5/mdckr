## mdckr 🧿

mdckr é uma ferramenta para gerar automaticamente os arquivos Dockerfile e docker-compose.yaml para projetos em diferentes linguagens. O objetivo dessa ferramenta é facilitar a criação de imagens Docker e simplificar o processo de deploy.

### Pré-requisitos

Antes de utilizar o mdckr, é preciso ter o Node.js instalado caso deseje rodar o mdckr via terminal integrado. Caso queira executar com .exe, é necessário ter o pacote [pkg](https://www.npmjs.com/package/pkg) instalado globalmente.

### Como utilizar

Você pode utilizar o mdckr de duas formas: a partir do arquivo `out/mdckr.js` com o Node.js ou através de um executável gerado. 

1. Baixe o repositório do mdckr em sua máquina.
2. Abra o terminal e navegue até a pasta onde o repositório foi baixado.
3. Instale as dependências utilizando "npm install"
5. Transpile o código usando "npm run build"
6. Para gerar os arquivos Dockerfile e docker-compose.yaml para um projeto, execute o seguinte comando:

Para utilizar o mdckr com Node.js:
```
npm start <imagem> <versão> "<build>" "<run>" <porta>
```

Se você preferir, é possível compilar o código para .exe. Utilize "npm run generate" e um aplicativo .exe será gerado.

```
.\mdckr.exe <imagem> <versão> "<build>" "<run>" <porta>
```

- `<imagem>`: Escolha a imagem que será utilizada pelo Docker.
- `<versão>`: Escolha a versão da iamge a ser utilizada. Se não for especificado, será utilizada a versão mais recente.
- `"<build>"`: Comando utilizado para "buildar" sua aplicação. Esse comando deve ser passado como string entre aspas.
- `"<run>"`: Comando utilizado para rodar sua aplicação. Esse comando deve ser passado como string entre aspas.
- `<porta>`: Especifique a porta que deve ser mapeada para o container. Se não for especificado, será utilizada a porta 80.

### Exemplos

Para gerar os arquivos Dockerfile e docker-compose.yaml para um projeto Node.js com a versão 19, o comando de build `npm install` seguido do comando `npm start`, execute o seguinte comando:

```
npm start node 19 "npm install" "npm start"
```

Para gerar os arquivos para um projeto Python com a versão 3.8, o comando `pip install` seguido do comando `python app.py` e a porta 8000, execute o seguinte comando:

```
.\mdckr python 3.8 "pip install" "python app.py" 8000
```

Isso criará os arquivos Dockerfile e docker-compose.yaml na pasta atual.

### To-do list

- [x] Adicionar a função de compilar a aplicação para mdckr.exe com [pkg](https://www.npmjs.com/package/pkg)
- [x] Transcrever para Typescript

### Como contribuir

Se você encontrar algum problema com o mdckr ou gostaria de contribuir com o projeto, por favor, abra uma issue em nosso [repositório no GitHub](https://github.com/ofmxtheuuz/mdckr) ou envie um pull request.

### Licença

mdckr é um software livre e é distribuído sob a licença MIT. Consulte o arquivo LICENSE para mais informações.



