# React Skeletor App

A basic frontend React App to start new projects.

## Installation

Download the repository directory:

```bash
git clone git@github.com:emilianoarlettaz/reactskeletor.git
cd reactskeletor
```

Set the required NodeJS version:

```bash
nvm install
```

> This assumes you have NVM installed on your computer, if not, you can [install it from here](https://github.com/creationix/nvm#installation).

Install the repository hooks:

```bash
npm run install-hooks
```

> This will ensure the code is validated before committing changes and that the dependencies will be updated if you do `git pull` and there are new dependencies.

Install the project dependencies:

```bash
npm install
```

> You should always run `nvm install` before doing `npm install` or `git pull` as the dependencies MUST be installed with the version of NodeJS required by this project.

## Running the project

To start the project with the default configuration on your local environment run the following command:

```bash
npm start
```

Now, you can open the browser and visit ()[http://localhost:8080/]

### Running Unit and Integration tests:

```bash
npm run test:unit
```

You should also see a coverage report after test running.


### Running Snapshot tests:

```bash
npm run test:snapshot
```

## Quality Assurance

This project runs ESLint and executes all unit, integration and snapshot tests every time you want to commit changes. For this you should install the hooks (see installation guide).

If you want to run manually the Linter execute the following command:

```bash
npm run lint:js:full
```

This project follows (Airbnb JavaScript Style)[https://github.com/airbnb/javascript]
