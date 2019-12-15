# Installation

## Pre-requisites
This project is developed on the following:
* Node v13.3.0
* NPM v6.13.2
* Yarn v1.21.1

After cloning / downloading the project to your local directory, go into the project folder and run:

```
yarn
```
or
```
npm i
```

Subsequently, create a `.env` file in the project root level with `MONGO_USER` and `MONGO_PASSWORD` keys, and complete it with the user credentials of MongoDB connection.

# How to Run

To run the project on local server, simply run:

```
yarn dev
```
or
```
npm run dev
```

****
# Quality Assurance

## Linting and code formatting

This project is using `ESLint` for linting and `Prettier` for code formatting. To run both linting and code formatting, run:

```
yarn lint
```
or
```
npm run lint
```

## Unit testing

This project is using `Jest` for unit testing. To run it, run:

```
yarn test
```
or
```
npm run test
```

## Code coverage

This project is using `Jest` to generate the report for code coverage. To generate a report, run:

```
yarn test-coverage
```
or
```
npm run test-coverage
```
