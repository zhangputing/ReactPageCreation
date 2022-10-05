# ReactPageCreation

> Sometimes when you need to create a page, you need to spend a lot of effort on npm configuration This is a simple way to do it.<br>
> Especially when you want to create a page with ts, scss, webpack, react, you need to spend a lot of time on the configuration. This is a simple way to do it.

## Description

> This project is a simple example of how to create a page in React.<br>
> You can use this project as a template for your own projects.<br>
> You need to develop your pages with ts, scss, react.

## File Structure

```
root
-html
    -demo.html
-src
    -pages
        -demo
            -index.tsx
            -index.scss
-test
    -demo
        -demo.test.ts
-.babelrc
-.gitignore
-.prettierrc
-.package.json
-.README.md
-.tsconfig.json
-.tsconfig.test.json
-.webpack.config.ts
-.webpack.debug.config.ts

/*
You can create your own html files in the pages folder, like demo.html.

You can create your own tsx files and scss files in the src/pages/** folder, like src/pages/demo/index.tsx. The entry file is index.tsx.

You can create your own test files in the test/** folder, like demo.test.ts.

Webpack will automatically compile the tsx file into js file and compile the scss file into css file with the folder name(**).

.babelrc is babel configuration file
.prettierrc is prettier configuration file
.tsconfig.test.json is ts-jest configuration file

*/
```

## Installation

npm install

## Usage

1.npm build

> Build the pages from the typescript to javascript.<br>
> And the styles from the scss to css.

| src folder         | dist folder |
| ------------------ | ----------- |
| src/\*\*/index.tsx | /dist/      |

2.npm start

> Start the server.<br>
> host: http://localhost:8080/
> port: 8080
> path: /html/

3.npm debug

> Build the pages on watch<br>

| src folder         | dist folder |
| ------------------ | ----------- |
| src/\*\*/index.tsx | /html/dist/ |
