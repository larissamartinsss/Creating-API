# Game's API

This API is usage to ...
## Endpoints
### GET /games
This endpoint is responsible to return the listing of all games registered on the database.
#### Parameters
Nothing
#### Responses
##### OK! 200
If this response happen, you'll receive the listing of all games

Example: 
```
[
    {
        "id": 23,
        "title": "Call of duty MW",
        "year": 2019,
        "price": 60
    },
    {
        "id": 22,
        "title": "Sea of thieves",
        "year": 2018,
        "price": 40
    },
    {
        "id": 2,
        "title": "Minecraft",
        "year": 2012,
        "price": 20
    }
]
```
##### Authentication failed! 401
If this response happen, its means that occurs an fail while authentication process of request! Reasons: Invalid tokem, Expired Token. 

Example:
```
{
    "err": "Token invalid!"
}
```

## Endpoints
### POST /auth
This endpoint is responsible to do login process.
#### Parameters
User Id
User email: The user email registered. 
User password: The user passoword registered. 

exemple:
```
{
    "id": "1",
    "email": "larissa@gmail.com",
    "password": "12345678"
}
```
#### Responses
##### OK! 200
If this response happen, you'll receive the JWT token to acess API's protected endpoints.

Example: 
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsYXJpc3NhQGdtYWlsLmNvbSIsImlhdCI6MTY0NDg1NDAwNiwiZXhwIjoxNjQ1MDI2ODA2fQ.k1TZ3hRQpib8uZGIhwDnpbbPpWf2cj22AF496u1EMls"
}
```
##### Authentication failed! 401
If this response happen, its means that occurs an fail while authentication process of request! Reasons: Email or Passoword incorrect. 

Example:
```
{
    "err": "Invalid credentials!"
}
```
