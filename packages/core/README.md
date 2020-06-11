<div align="center">
<p>
<h1> @favware/syntax-highlighter-core </h1>
<h3> A lightweight, easy-to-use and framework agnostic syntax highlighter for your code snippets. </h3>
</p>
<p>
	<a href="https://github.com/favware/syntax-highlighter/blob/master/LICENSE.md">
	<img src="https://img.shields.io/github/license/favware/syntax-highlighter?logo=github&maxAge=3600&style=flat-square" alt="NPM version" />
	</a>
</p>
<p>
<a href="https://www.npmjs.com/package/@favware/syntax-highlighter-core">
<img src="https://img.shields.io/npm/v/@favware/syntax-highlighter-core.svg?maxAge=3600&logo=npm&style=flat-square" alt="NPM version" />
</a>
	
<a href="https://www.npmjs.com/package/@favware/syntax-highlighter-core">
<img src="https://img.shields.io/npm/dt/@favware/syntax-highlighter-core.svg?maxAge=3600&logo=npm&style=flat-square" alt="NPM downloads" />
</a>
</p>
<p>
<a href="https://bundlephobia.com/result?p=@favware/syntax-highlighter-core">
<img src="https://img.shields.io/bundlephobia/min/@favware/syntax-highlighter-core?label=minified&logo=webpack&maxAge=3600&style=flat-square" alt="Minified Size">
</a>

<a href="https://bundlephobia.com/result?p=@favware/syntax-highlighter-core">
<img src="https://img.shields.io/bundlephobia/minzip/@favware/syntax-highlighter-core?label=minzipped&logo=webpack&maxAge=3600&style=flat-square" alt="Minzipped Size">
</a>
</p>

<a href="https://depfu.com/github/favware/syntax-highlighter?project_id=13651">
<img src="https://badges.depfu.com/badges/4853d088999fc77ee0f8377b3fb52d9a/count.svg" alt="Depfu" />
</a>

<a href="https://donate.favware.tech/patreon">
<img src="https://img.shields.io/badge/donate-patreon-F96854.svg?logo=patreon" alt="Patreon" />
</a>

<a href="https://stenciljs.com/">
<img src="https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square" Alt="Stencil" />
</a>
</div>

# Why yet another code highlighter?

> There are many syntax highlighters avaliable already but most of those are either complex to setup or front end framework specific. `@favware/syntax-highlighter-core` is built using StencilJS. You can use it everywhere, i.e. Angular, React, Vue, any framework, No Framework!
>
> **This is an adoptation of [snippet-highlight] from [rahulbhooteshwar]**

# Features

-   Uses [PrismJS] for syntax highlighting
-   Light and Dark mode supported
-   Copy code support
-   Supports many languages, see [Supported Languages](#Supported Languages)

Check out the [live demo](https://syntax-highlighter.now.sh/) for further examples.

# Installation

## Install Package

```bash
yarn add @favware/syntax-highlighter-core
# or npm install @favware/syntax-highlighter-core
```

### Framework Integration

#### Angular

// TODO: Set up Angular output and check that it works

See [@favware/syntax-highlighter-angular]

#### React

// TODO: Verify that react output works

See [@favware/syntax-highlighter-react]

#### Vue

In order to use the custom element library within the Vue app, the application must be modified to define the custom elements and to inform the Vue compiler which elements to ignore during compilation. This can all be done within the `main.js` file. For example:

```tsx
import Vue from 'vue';
import App from './App.vue';
import { defineCustomElements } from '@favware/syntax-highlighter-core/loader';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/snippet-\w*/];

defineCustomElements(window);

new Vue({
	render: h => h(App)
}).$mount('#app');
```

Import it and call the necessary functions in your app entry file.

```ts
import { applyPolyfills, defineCustomElements } from '@favware/syntax-highlighter-core/loader';

applyPolyfills().then(() => defineCustomElements(window));
```

#### No Framework

If you're want to use the browser build, you can pull it in via unpkg.

```html
<script src="https://unpkg.com/browse/@favware/syntax-highlighter-core"></script>
```

## Usage

The syntax is kept fairly simple. Here's a basic example of a regular conversation:

```html
<syntax-highlighter theme="dark" language="javascript" content="import { SyntaxHighlighter } from @favware/syntax-highlighter-react" />
```

# Supported Languages

To limit the size of this library a selection has been made from all langauges supported by PrismJS. The chosen languages are those that we consider the most popular / common. If you want to see another languages supported you're always free to open [an issue]

`javascript`, `typescript`, `asciidoc`, `autohotkey`, `autoit`, `bash`, `batch`,  
`c`, `clike`, `clojure`, `coffeescript`, `cpp`, `csharp`, `csp`, `css`, `dart`,  
`diff`, `docker`, `elixir`, `gherkin`, `git`, `go`, `graphql`, `groovy`, `http`,  
`ini`, `java`, `json`, `jsx`, `kotlin`, `less`, `lua`, `makefile`, `markdown`,  
`nginx`, `objectivec`, `powershell`, `python`, `ruby`, `rust`, `sass`, `scala`,  
`scss`, `sql`, `swift`, `vim`, `visual-basic`, `wasm`, `wiki`, `yaml`

<!-- LINK DUMP -->

[snippet-highlight]: https://github.com/rahulbhooteshwar/snippet-highlight
[rahulbhooteshwar]: https://github.com/rahulbhooteshwar
[an issue]: https://github.com/favware/syntax-highlighter/issues/new