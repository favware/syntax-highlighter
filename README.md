<div align="center">
<p>
<h1> Syntax Highlighter </h1>
<h3> A lightweight, easy-to-use and framework agnostic syntax highlighter for your code examples(snippets) in web applications </h3>
</p>
<p>
	<a href="https://github.com/favware/syntax-highlighter/blob/master/LICENSE.md">
	<img src="https://img.shields.io/github/license/favware/syntax-highlighter?logo=github&maxAge=3600&style=flat-square" alt="NPM version" />
	</a>
</p>

<a href="https://depfu.com/github/favware/syntax-highlighter?project_id=13651">
<img src="https://badges.depfu.com/badges/4853d088999fc77ee0f8377b3fb52d9a/count.svg" alt="Depfu" />
</a>

<a href="https://donate.favware.tech/patreon">
<img src="https://img.shields.io/badge/donate-patreon-F96854.svg?logo=patreon" alt="Patreon" />
</a>
</div>

**_Table of Contents_**

-   [Why yet another code highlighter?](#why-yet-another-code-highlighter)
-   [Features](#features)
    -   [Properties](#properties)
-   [Screenshots](#screenshots)
    -   [Dark Theme](#dark-theme)
    -   [Light Theme](#light-theme)
-   [Supported Languages](#supported-languages)

# Why yet another code highlighter?

> There are many syntax highlighters avaliable already but most of those are either complex to setup or front end framework specific. `@favware/syntax-highlighter-core` is built using StencilJS. You can use it everywhere, i.e. Angular, React, Vue, any framework, No Framework!
>
> **This is an adoptation of [snippet-highlight] from [rahulbhooteshwar]**

# Features

-   Uses [PrismJS] for syntax highlighting
-   Light and Dark mode supported
-   Copy code support
-   Supports many languages, see [Supported Languages](#supported-languages)
-   Will default to using [Fira Code] as font family
    -   The library first falls back to popular fonts such as [Cascadia Code] and [Meslo NGF] if it isn't available. If these are also not available it will go through various more popular coding fonts, ending in `monospace`

Check out the [live demo](https://syntax-highlighter.now.sh/) for further examples.

# Supported Languages

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

<!-- LINK DUMP -->

[snippet-highlight]: https://github.com/rahulbhooteshwar/snippet-highlight
[rahulbhooteshwar]: https://github.com/rahulbhooteshwar
[supported languages]: https://prismjs.com/#supported-languages
[prismjs]: https://prismjs.com/
[fira code]: https://github.com/tonsky/FiraCode
[cascadia code]: https://github.com/microsoft/cascadia-code
[meslo ngf]: https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k
[an issue]: https://github.com/favware/syntax-highlighter/issues/new
