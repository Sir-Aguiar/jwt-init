# [Versão PT-BR](https://github.com/Sir-Aguiar/jwt-init/blob/main/README-PT.md)

# JSON Web Token

JWT is used to share data between two sides, usually a client and a server.

Containing JSON objects that have the information to be shared. Each JWT is also signed using cryptography to ensure that the JSON contents cannot be altered by the client or a malicious party.

- `header`
  - The signing algorithm that’s being used.
  - The type of token, in this case is JWT.
- `payload`: The payload contains the claims or the JSON object.
- `signature`: A string generated via cryptographic algorithm, used to verify the integrity of the JSON payload.

## Token creation via JWT

```js
import jwt from "jsonwebtoken";

const secretKey = "VICTORIA'S";

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

## Reserved Claims

There are attributes that are recommended (although not mandatory) in token validation.

- `iat`: (Issued At) It is the timestamp when the token was issued.
- `exp`: (Expiration) It is the timestamp when the token will expire.
- `iss`: (Issuer) The issuer of the token.
- `aud`: (Audience) The recipient of the token, the application that will use it.
- `sub`: (Subject) The entity that holds the token, such as the ID of a user, for example.
