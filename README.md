# WARNING: WIP

Ths is a template [Technical Knockout](https://github.com/knockout/tko) application using webpack as the build tool. Webpack configuration is far from ideal - never used it before but it's error output is handy after using gulp for so long.

## Building

1. Clone the repo: `git clone https://github.com/mattlacey/tko_webpack`
2. Run `npm install`
3. Run the build (with FS watching) via `npm run build`, this will generate output in `/dist`

## Running

Either open `/dist/index.html` in a browser, or run `npm start` which will run a local webserver where you can access the built application at `localhost:8080`. When using the web server the code is automatically watched and rebuilt when you save changes to a source file.

## Directories (liable to change)

Directory | Purpose
---|---
`/src` | Root directory for the main JavaScript entry point as well as app-level JS modules
`/src/components` | Web Components extending `ko.Component` go in here
`/src/css` | CSS files that are copied through to the output and included automatically in `index.html`
`/dist` | Build output directory
