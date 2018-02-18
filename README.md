# Materia - Addon Boilerplate

Starter kit to create a Materia Addon.

## Features

- Build system (Rollup + TypeScript + Sass)
- Default addon view
- Basic addon setup

## Installation

Clone this repository:

```
git clone git@github.com:thyb/materia-addon-boilerplate.git
cd materia-addon-boilerplate
```

Then install and build:

```
yarn
yarn build
```

To test your addon locally before publishing it to NPM, use `npm link`:

```
cd dist && npm link
```

and in your materia application

```
npm link @materia/addon-boilerplate
```
