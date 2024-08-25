## Arquivo de configuração

No back-end deixei o arquivo `.env` apenas para simplificar a configuração do projeto, o token do JWT está lá. Nessa mesma ideia deixei duas funções comentadas para testes.

O projeto está rodando com angular 17 e TypeScript no front-end usando tailwind para estilização. 

No back-end estou utilizando o NodeJS com TypeScript, usando para rodar a API serverless offline, por falta de tempo não consegui conectar o DynamoDB local no projeto então o banco de dado está feito em memoria, arquivo de memoria se encontra em `config/database.ts` no back-end



1. **Clone o Repósitorio**:

```bash
   git clone https://github.com/JoaoGMagri/helpinho-LBCA.git
```

## Front-End

2. **Navegue para a pasta do fron-end**:

    ```bash
    cd frontend/
    ```

3. **Instale as depencias**:

    ```bash
    npm install
    ```

4. **Inicialize o projeto**:

    ```bash
    npm start
    ```

## Back-End

2. **Navegue para a pasta do back-end**:

    ```bash
    cd backend/
    ```

3. **Instale as depencias**:

    ```bash
    npm install
    ```

4. **Inicialize o projeto**:

    4-a. **Caso tenha o serveless instalado globalmente execute**
    ```bash
    sls offline
    ```
    4-b. **Se não for o caso use npx**
    ```bash
    npx sls offline
    ```