# JSON Web Token

JWT é usado para compartilhar dados entre dois ambientes, geralmente um cliente e um servidor.

Contém objetos JSON que têm as informações a serem compartilhadas. Cada JWT também é assinado usando criptografia para garantir que o conteúdo JSON não possa ser alterado pelo cliente ou por uma parte mal-intencionada.

O JWT é formado por três componentes principais:

- `header`:
  - O algoritmo de assinatura que está sendo usado.
  - O tipo de token, neste caso, é "JWT".
- `payload`: Contém o objeto JSON com os dados a serem compartilhados, é a nossa "carga".
- `signature`: Uma string gerada por um algoritmo criptográfico, usada para verificar a integridade da nossa carga (payload).

## Criação de token via JWT

```js
import jwt from "jsonwebtoken";

const secretKey = "LITTLESECRET";

const jwtPayload = {
  name: "Jhon Doe",
  password: "FooBar",
  address: "Doe Boulevard",
};

const userAccessToken = jwt.sign(jwtPayload, secretKey, { expiresIn: "5m" });

/* 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmhvbiBEb2UiLCJwYXNzd29yZCI6IkZvb0JhciIsImFkZHJlc3MiOiJEb2UgQm91bGV2YXJkIiwiaWF0IjoxNjg3MzAxNjcyLCJleHAiOjE2ODczMDE5NzJ9.t0KkEPvlOZNT0AJyyyvHvnwFZ3SOblCRBPyzIoMv1vk
*/
```

Header

```js
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

{
  "alg": "HS256",
  "typ": "JWT"
}
```

Payload

```js
eyJuYW1lIjoiSmhvbiBEb2UiLCJwYXNzd29yZCI6IkZvb0JhciIsImFkZHJlc3MiOiJEb2UgQm91bGV2YXJkIiwiaWF0IjoxNjg3MzAxNjcyLCJleHAiOjE2ODczMDE5NzJ9

{
  "name": "Jhon Doe",
  "password": "FooBar",
  "address": "Doe Boulevard",
  "iat": 1687301672,
  "exp": 1687301972
}
```
