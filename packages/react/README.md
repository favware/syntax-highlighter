<div align="center">

<a href="https://favware.tech/syntaxhighlighter"><img style="height: 200px" src="https://cdn.favware.tech/img/syntax-highlighter.png" height="200" alt="logo"/></a>

# @favware/syntax-highlighter-react

**A lightweight, easy-to-use and framework agnostic syntax highlighter for your code examples(snippets) in web applications**

[![GitHub](https://img.shields.io/github/license/favware/syntax-highlighter)](https://github.com/favware/syntax-highlighter/blob/main/LICENSE.md)
[![npm](https://img.shields.io/npm/v/@favware/syntax-highlighter-react?color=crimson&label=@favware/syntax-highlighter-react&logo=npm)](https://www.npmjs.com/package/@favware/syntax-highlighter-react)
[![npm](https://img.shields.io/npm/dt/@favware/syntax-highlighter-react.svg?maxAge=3600&logo=npm)](https://www.npmjs.com/package/@favware/syntax-highlighter-react)
[![npm](https://img.shields.io/bundlephobia/min/@favware/syntax-highlighter-react?label=minified&logo=webpack&maxAge=3600)](https://bundlephobia.com/result?p=@favware/syntax-highlighter-react)
[![Depfu](https://badges.depfu.com/badges/efe23d577642dc26c6636c1630e5cccf/count.svg)](https://depfu.com/github/favware/syntax-highlighter?project_id=21396)
[![Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d)](https://stenciljs.com)

</div>

**_Table of Contents_**

- [Why yet another code highlighter?](#why-yet-another-code-highlighter)
- [Features](#features)
- [Installation](#installation)
  - [Usage](#usage)
- [Supported Languages](#supported-languages)
- [Screenshots](#screenshots)
  - [Dark Mode](#dark-mode)
  - [Light Mode](#light-mode)

## Why yet another code highlighter?

> There are many syntax highlighters avaliable already but most of those are either complex to setup or front end framework specific. `@favware/syntax-highlighter-react` is built using StencilJS. You can use it everywhere, i.e. Angular, React, Vue, any framework, No Framework!
>
> **This is an adoptation of [snippet-highlight] from [rahulbhooteshwar]**

## Features

- Uses [PrismJS] for syntax highlighting
- Light and Dark mode supported
- Copy code support
- Supports many languages, see [Supported Languages](#supported-languages)
- Will default to using [Fira Code][] as font family
  - The library first falls back to popular fonts such as [Cascadia Code][] and [Meslo NGF][] if it isn't available. If these are also not available it will go through various more popular coding fonts, ending in `monospace`

## Installation

```bash
yarn add @favware/syntax-highlighter-react @favware/syntax-highlighter-react
# or npm install @favware/syntax-highlighter-react @favware/syntax-highlighter-react
```

### Usage

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/syntax-highlighter-react-bb90c)

The syntax is kept fairly simple. Here's a basic example of some simple JavaScript code:

```tsx
import { SyntaxHighlighter } from '@favware/syntax-highlighter-react';

<SyntaxHighlighter theme="dark" language="javascript" content="import { SyntaxHighlighter } from @favware/syntax-highlighter-react" />;
```

## Supported Languages

To limit the size of this library a selection has been made from all langauges supported by PrismJS. The chosen languages are those that we consider the most popular / common. If you want to see another languages supported you're always free to open [an issue]

`javascript`, `typescript`, `asciidoc`, `autohotkey`, `autoit`, `bash`, `batch`,  
&nbsp;  
`c`, `clike`, `clojure`, `coffeescript`, `cpp`, `csharp`, `csp`, `css`, `dart`,  
&nbsp;  
`diff`, `docker`, `elixir`, `gherkin`, `git`, `go`, `graphql`, `groovy`, `http`,  
&nbsp;  
`ini`, `java`, `json`, `jsx`, `kotlin`, `less`, `lua`, `makefile`, `markdown`,  
&nbsp;  
`nginx`, `objectivec`, `powershell`, `python`, `ruby`, `rust`, `sass`, `scala`,  
&nbsp;  
`scss`, `sql`, `swift`, `tsx`, `vim`, `visual-basic`, `wasm`, `wiki`, `yaml`

## Screenshots

### Dark Mode

![](https://raw.githubusercontent.com/favware/syntax-highlighter/main/assets/dark_mode.png)

### Light Mode

![](https://raw.githubusercontent.com/favware/syntax-highlighter/main/assets/light_mode.png)

<!-- LINK DUMP -->

[snippet-highlight]: https://github.com/rahulbhooteshwar/snippet-highlight
[rahulbhooteshwar]: https://github.com/rahulbhooteshwar
[prismjs]: https://prismjs.com/
[fira code]: https://github.com/tonsky/FiraCode
[cascadia code]: https://github.com/microsoft/cascadia-code
[meslo ngf]: https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k
[an issue]: https://github.com/favware/syntax-highlighter/issues/new
