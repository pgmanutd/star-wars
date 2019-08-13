# 🎉 star-wars

## Development

Open your favorite Terminal and run these commands:

```bash
npm install

npm run bootstrap

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

### `npm run bootstrap`

Add node_modules to lerna packages

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
