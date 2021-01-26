<div align="center">

<a href="https://favware.tech/syntaxhighlighter"><img style="height: 200px" src="https://cdn.favware.tech/img/syntax-highlighter.png" height="200" alt="logo"/></a>

# Syntax Highlighter

**A lightweight, easy-to-use and framework agnostic syntax highlighter for your code examples(snippets) in web applications**

[![GitHub](https://img.shields.io/github/license/favware/syntax-highlighter)](https://github.com/favware/syntax-highlighter/blob/main/LICENSE.md)
[![npm](https://img.shields.io/npm/v/@favware/syntax-highlighter-core?color=crimson&label=@favware/syntax-highlighter-core&logo=npm&style=flat-square)](https://www.npmjs.com/package/@favware/syntax-highlighter-core)
[![npm](https://img.shields.io/npm/v/@favware/syntax-highlighter-react?color=crimson&label=@favware/syntax-highlighter-react&logo=npm&style=flat-square)](https://www.npmjs.com/package/@favware/syntax-highlighter-react)
[![Depfu](https://badges.depfu.com/badges/efe23d577642dc26c6636c1630e5cccf/count.svg)](https://depfu.com/github/favware/syntax-highlighter?project_id=21396)

</div>

---

**_Table of Contents_**

- [Why yet another code highlighter?](#why-yet-another-code-highlighter)
- [Features](#features)
- [Supported Languages](#supported-languages)
- [Screenshots](#screenshots)
  - [Dark Mode](#dark-mode)
  - [Light Mode](#light-mode)

## Why yet another code highlighter?

> There are many syntax highlighters available already but most of those are either complex to setup or front end framework specific. `@favware/syntax-highlighter-core` is built using StencilJS. You can use it everywhere, i.e. Angular, React, Vue, any framework, No Framework!
>
> **This is an adaptation of [snippet-highlight] from [rahulbhooteshwar]**

## Features

- Uses [PrismJS] for syntax highlighting
- Light and Dark mode supported
- Copy code support
- Supports many languages, see [Supported Languages](#supported-languages)
- Will default to using [Fira Code][] as font family
  - The library first falls back to popular fonts such as [Cascadia Code][] and [Meslo NGF][] if it isn't available. If these are also not available it will go through various more popular coding fonts, ending in `monospace`

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
