# Storefront Backend

## Overview

In this project we build Store APP Backend with PostgresSQL and Express.

## How to build and start the server

The project can be built and run in the following ways

### 1. Install all dependencies

`npm i`

### 2. Build

`npm run build`

This command will build the typeScript code into JavaScript and save them in the `./dist` folder.

### 3. DB Migrate

`npx db-migrate up`

### 4. Start the Server after Build

`npm run start`

This command will start the server running on port `3000`.

## Testing and Linting

Here, I will show you how to run the test and also how to check that our code respects all the eslint rules.

### 1. Linting

`npm run lint`

### 2. Formating

`npm run prettier`

### 3. Testing

`npm run test`

## Built With

- [NodeJS](https://nodejs.org/en/) - The JavaScript runtime.
- [Express](https://expressjs.com/) - The web framework.
- [TypeScript](https://www.typescriptlang.org/) - The language used.
- [postgres](https://www.postgresql.org/) - Relational DATABASE.
