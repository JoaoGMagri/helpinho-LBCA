## Documentação e Relatos

## Relatos do projeto

**Planos não finalizados**
1. O front não foi estilizado para mobile e table por falta de tempo.
2. Carrosel da pagina de login e registro.
3. Biblioteca para icons e de cartão.
4. Algumas mascaras e estilos. 
5. Conectar a API com o DynamoDB local.
6. Schema de validação de entrada de informação no Back.

**Bugs**
1. No console do front-end quando inicializado apresenta alguns erros sobre o localStorage, mas isso não está afetando o funcionamento.

## Rotas do Back-end

**Autenticação**

O `token` é dado quando o usuario realiza o login 

``` TS
    {
        headers: {
            setHeaders: token
        }
    }
```


**Rota de usuário**

1. **POST**
            
    ``` bash
        http://localhost:3000/dev/user
    ```

    Objeto de entrada:

    ``` TS
        {
            "name": string;
            "email": string;
            "password": string;
            "date": string;
            "number": string;
        }
    ```
    Objeto de saida:

    ``` TS
        {
            "id": string;
            "name": string;
            "email": string;
            "password": string;
            "date": string;
            "image": string;
            "number": string;
        }
    ```

2. **GET**

    `A rota precisa de autenticação`      

    `:/` sendo o id do usuário. 

    ``` bash
        http://localhost:3000/dev/user/:id
    ```

    Objeto de saida

    ``` TS
        {
            "id": string;
            "name": string;
            "email": string;
            "password": string;
            "date": string;
            "image": string;
            "number": string;
        }
    ```


**Rota de login**

1. **POST**
            
    ``` bash
        http://localhost:3000/dev/auth
    ```

    Objeto de entrada:

    ``` TS
        {
            "email": string;
            "password": string;
        }          
    ```
    Objeto de saida:

    ``` TS
        {
            "id": string;
            "userId": string;
            "name": string;
            "email": string;
            "image": string;
            "token": string;
        }
    ```


**Rota de doação**

1. **POST**

    `A rota precisa de autenticação`
            
    ``` bash
        http://localhost:3000/dev/donate
    ```

    Objeto de entrada:

    ``` TS
        {
            "helpId": string;
            "donate": number;
        }          
    ```
    Objeto de saida:

    ``` TS
        {
            "id": string;
            "userId": string;
            "helpId": string;
            "donate": number;
        }
    ```


**Rota de help**

1. **POST**

    `A rota precisa de autenticação`
            
    ``` bash
        http://localhost:3000/dev/help
    ```

    Objeto de entrada:

    ``` TS
        {
            "title": string;
            "description": string;
            "type": string;
            "gols": string;
            "image": string;
            "urgent": boolean;
        }
    ```
    Objeto de saida:

    ``` TS
        {
            "title": string;
            "description": string;
            "type": string;
            "gols": string;
            "image": string;
            "urgent": boolean;
        }
    ```

2. **GET**     

    `:/` sendo o id do usuário. 

    ``` bash
        http://localhost:3000/dev/help/:id
    ```

    Objeto de saida

    ``` TS
        {
            "id": string;
            "title": string;
            "description": string;
            "type": string;
            "image": string;
            "author": {
                "id": string;
                "name": string;
                "email": string;
                "image": string;
                }
            "urgent": boolean;
            "supportes": string[];
            "donate": number;
        }
    ```

3. **GET**     
 
    ``` bash
        http://localhost:3000/dev/help
    ```

    Objeto de saida

    ``` TS
        [
            {
                "id": string;
                "title": string;
                "description": string;
                "type": string;
                "image": string;
                "author": {
                    "id": string;
                    "name": string;
                    "email": string;
                    "image": string;
                    }
                "urgent": boolean;
                "supportes": string[];
                "donate": number;
            }
        ]
    ```
