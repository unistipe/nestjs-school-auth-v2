## Description

[Nest](https://github.com/nestjs/nest) framework educational project on using [Authentication](https://docs.nestjs.com/security/authentication) and [Authorization](https://docs.nestjs.com/security/authorization).

This project showcases JWT and Guards to support Authentication and Authorization.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm start

# watch mode
$ nest start --watch
```

## Testing the app

- Go to http://localhost:3000 from browser, you should get HTTP 200 with text response 'Hello World!'.
- Perform HTTP GET http://localhost:3000/auth/profile from Postman, you should get HTTP 401 response.
- Perform HTTP POST http://localhost:3000/auth/login with JSON body {"username":"stipe", "password":"password123"} from Postman, you should get HTTP 200 response with access_token.
- Perform HTTP GET http://localhost:3000/auth/profile using access_token from previous step as Authorization: Bearer {}, you should get HTTP 200 with JSON response.
- Perform HTTP GET http://localhost:3000/users using access_token from previous step as Authorization: Bearer {}, you should get HTTP 403 response. This is because logged user does not have admin privileges. Re-login using {"username":"jure", "password":"password321"} and retry this endpoint, it should return HTTP 200 with all users in response.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use it however you want.
