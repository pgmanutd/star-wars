# 🎉 star-wars

Search star wars planets

- For username and password check https://swapi.co/documentation#people

  - ```Username``` is person's ```name```
  - ```Password``` is person' ```birth_year```

- For planets check https://swapi.co/documentation#planets

## Development

Open your favorite Terminal and run these commands:

```bash
npm install

cp ./packages/client/.env.example ./packages/client/.env

cp ./packages/server/.env.example ./packages/server/.env

npm start

# Open http://localhost:3000 for client
# Open http://localhost:4000/graphql for server
```

## Available Scripts

In the project directory, you can run:

### `npm run clean`

Removes node_modules from lerna packages

### `npm start`

Runs client and server

### `npm run lint`

Lints client and server using eslint

### `npm run format`

Formats client and server using prettier

### `npm test`

Runs client and server tests

### `npm run check`

Run lint and tests
