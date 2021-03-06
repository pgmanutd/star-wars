# 🎉 star-wars

Search star wars planets

- For username and password check https://swapi.dev/api/people

  - ```Username``` is person's ```name```
  - ```Password``` is person's ```birth_year```

- For planets check https://swapi.dev/api/planets. You can search planets by their names.

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

Removes node_modules from lerna packages.

### `npm run clean:build`

Removes build, .netlify and netlify-lambda folders from lerna packages.

### `npm start`

Runs client and server in development mode.

### `npm run lint`

Lints client and server using eslint.

### `npm run format`

Formats client and server using prettier.

### `npm test`

Runs client and server tests.

### `npm run check`

Run lint and tests.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run serve`

Runs the app from build folder.
