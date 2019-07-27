# Scarlet

## Requirements

- Node 10+
- Docker

## Setup

Here's a brief intro about what a developer must do in order to start developing
the project further:

```
git clone https://github.com/Itrulia/scarlet.git
cd scarlet
npm install
```

You can now start the development server with create react app via `npm start`.

## Commands

### Build

#### Development

To build the application you will need to execute:

```
npm start
```

To build the documentations you will need to execute:

```
npm run storybook
npm run docz
```

#### Production

To build the application you will need to execute:

```
node scripts/build.js
```

To build the documentations you will need to execute:

```
node scripts/storybook.js
node scripts/documentation.js
```

### Server

#### Development

To start the development **application server** you will need to execute:

```bash
npx ts-node --project ssr/tsconfig.json ssr/index.tsx --prod=false
```

To start the development **docker container** you will need to execute:

```bash
docker build . --build-arg PROD=false
docker run -p "8000:8000" -it <CONTAINER_HASH>
```

Both of those will start the server at [http://localhost:8000](http://localhost:8000) and enable server side rendering.

#### Production

To start the production **application server** you will need to execute:

```bash
npx ts-node --project ssr/tsconfig.json ssr/index.tsx --prod=true
```

To build & run the production **docker container** you will need to execute:

```bash
docker build .
docker run -p "8000:8000" <CONTAINER_HASH>
```

Both of those will start the server at [http://localhost:8000](http://localhost:8000) and enable server side rendering.

### Unit Test

#### Development

To run the unit test you will need to execute

```
npm test
```

#### Production

To run the unit test you will need to execute

```
npx react-app-rewired test --watch=false --coverage
```

### Lint

#### Development

To lint the application you will need to execute

```
npm run lint
```

This will also fix fixable problems by TSLint automatically for you.

#### Production

To lint the application you will need to execute

```
node scripts/lint.js
```

## Known Issues

### CI/CD scripts are missing

We want to fully automate the release/deployment of Github actions.

### Component generation is missing

We want to be able to generate components via the CLI instead of having to either C&P them or create them by hand.

### Readme could be more descriptive

The readme should explain more what is going on. For example for the commands it could say what is executed in the background and its configuration options.

## Notable Dependencies

- **[TypeScript](https://www.typescriptlang.org/)**: Typed superset of JavaScript that compiles to plain JavaScript.
- **[React](https://reactjs.org/)**: Frontend framework we are working with
- **[Redux](https://redux.js.org/)**: Application state managment library.
- **[Ramda](https://ramdajs.com/)**: Functional utility library
- **[Jasmine](https://jasmine.github.io/)**: Testing framework we are working with.

## Mono Repository Tooling

This project makes use of:

- **[conventional-commits](https://conventionalcommits.org/)**: Commit message style guide that is required to be used within this repository.
- **[commitizen](http://commitizen.github.io/cz-cli/)**: A command line tool that helps format commit messages with a series of prompts that are used to generate a commit message.
- **[semantic-release](https://semantic-release.gitbooks.io/semantic-release/content/#highlights)**: Automates the whole package release workflow including: determining the next version number, generating the release notes and publishing the package. strictly following the [Semantic Versioning](https://semver.org/) specification.

## Contributing

When you publish something open source, one of the greatest motivations is that
anyone can just jump in and start contributing to your project.

To make it easier for everyone to contribute to this project and understand it,
please always update the documentation when you create or modify anything.

Also always try to improve atleast 1 small thing when you are already there so that over time
the project gets better and better, this is also known as [The Boy Scout Rule](http://programmer.97things.oreilly.com/wiki/index.php/The_Boy_Scout_Rule).

### Commit Guidelines

We are using the [conventional commits](https://conventionalcommits.org/) guidelines (and also lint for them). As a helper this repository is using a wizzard for the CLI. You can run the wizzard by executing the following command

```sh
npm run commit
```

There is no requirement to use that wizzard.
