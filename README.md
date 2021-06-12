# Getting started with typeScript

## TypeScript = JavaScript + A type system

## The TS Type System Goals

1. Helps us catch errors during development
2. uses type annotations to analyze our code
3. only active during development
4. doesn't provide any performance optimization

## How it actually works

- Typescript code ( javascript with type annotations ) -> Typescript compiler -> Plain old javascript -> browser

## Summary

- Writing typescript is the same as writing javascript with some 'extra documentation'
- typescript has no effect on how our code gets executed by the browser or node
- it is best to think of typescript as being like a friend sitting behind you while you are coding

## Environment setup

```
// Typescript compiler
npm install -g typescript ts-node

// tsc --help

```

## First app

- Make a network request to fetch some JSON and print the result
  - Take a look at the api we'll use to fetch data
  - create a new project directory
  - create a package.json file
  - install axios to make a request
  - write code
