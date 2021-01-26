import { Component, ComponentInterface, ComponentWillLoad, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import ClipboardJS from 'clipboard';
import Prism from 'prismjs';
import 'prismjs/components/prism-asciidoc.min.js';
import 'prismjs/components/prism-autohotkey.min.js';
import 'prismjs/components/prism-autoit.min.js';
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-batch.min.js';
import 'prismjs/components/prism-c.min.js';
import 'prismjs/components/prism-clike.min.js';
import 'prismjs/components/prism-clojure.min.js';
import 'prismjs/components/prism-coffeescript.min.js';
import 'prismjs/components/prism-cpp.min.js';
import 'prismjs/components/prism-csharp.min.js';
import 'prismjs/components/prism-csp.min.js';
import 'prismjs/components/prism-css-extras.min.js';
import 'prismjs/components/prism-css.min.js';
import 'prismjs/components/prism-dart.min.js';
import 'prismjs/components/prism-diff.min.js';
import 'prismjs/components/prism-docker.min.js';
import 'prismjs/components/prism-elixir.min.js';
import 'prismjs/components/prism-gherkin.min.js';
import 'prismjs/components/prism-git.min.js';
import 'prismjs/components/prism-go.min.js';
import 'prismjs/components/prism-graphql.min.js';
import 'prismjs/components/prism-groovy.min.js';
import 'prismjs/components/prism-http.min.js';
import 'prismjs/components/prism-ini.min.js';
import 'prismjs/components/prism-java.min.js';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-json.min.js';
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-kotlin.min.js';
import 'prismjs/components/prism-less.min.js';
import 'prismjs/components/prism-lua.min.js';
import 'prismjs/components/prism-makefile.min.js';
import 'prismjs/components/prism-markdown.min.js';
import 'prismjs/components/prism-nginx.min.js';
import 'prismjs/components/prism-objectivec.min.js';
import 'prismjs/components/prism-powershell.min.js';
import 'prismjs/components/prism-python.min.js';
import 'prismjs/components/prism-ruby.min.js';
import 'prismjs/components/prism-rust.min.js';
import 'prismjs/components/prism-sass.min.js';
import 'prismjs/components/prism-scala.min.js';
import 'prismjs/components/prism-scss.min.js';
import 'prismjs/components/prism-sql.min.js';
import 'prismjs/components/prism-swift.min.js';
import 'prismjs/components/prism-tsx.min.js';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/components/prism-vim.min.js';
import 'prismjs/components/prism-visual-basic.min.js';
import 'prismjs/components/prism-wasm.min.js';
import 'prismjs/components/prism-wiki.min.js';
import 'prismjs/components/prism-yaml.min.js';

@Component({
  tag: 'syntax-highlighter',
  styleUrl: 'syntax-highlighter.css'
})
export class SyntaxHighlighter implements ComponentWillLoad, ComponentInterface {
  /**
   * The content to show in the syntax highlighter element
   */
  @Prop({ mutable: true, reflect: true })
  public content: string;

  /**
   * The theme to use, one of light or dark
   * @default dark
   */
  @Prop({ mutable: true, reflect: true })
  public theme: 'dark' | 'light' = 'dark';

  /**
   * The language to highlight for
   * @default html
   */
  @Prop({ mutable: true, reflect: true })
  public language = 'html';

  /**
   * The text inside the "copy to clipboard" button
   * @remark This is primarily for if you want to provide i18n with your syntax highlighted component
   * @example "Kopieer naar klembord"
   * @default "Copy to clipboard"
   */
  @Prop({ mutable: true, reflect: true })
  public copyButtonLabel = 'Copy to clipboard';

  /**
   * The callback that will be fired when ClipboardJS fails to copy the text
   * @remark You can use this to, for example, show notifications to users
   * @remark This event will bubble up through the DOM
   * @default undefined
   * @example
   * ```html
   *	<body>
   *		<syntax-highlighter id="example-highlight" theme="dark" language="typescript" content="console.log('example')" />
   *		<script>
   *			const syntaxHighlighterElement = document.querySelector('#example-highlight');
   *			syntaxHighlighterElement.addEventListener('clipboardJsError', event => {
   *				console.log('handling');
   *			});
   *		</script>
   *	</body>
   * ```
   */
  @Event({ bubbles: true })
  public clipboardJsError: EventEmitter<ClipboardJS.Event>;

  /** The internal ref to the code block */
  private codeBlockRef: HTMLInputElement;

  private clipboardJsInstance: ClipboardJS;

  public componentWillLoad() {
    this.clipboardJsInstance = new ClipboardJS('#syntaxhighlighter__ctc-button');
    this.clipboardJsInstance //
      .on('success', (event) => event.clearSelection()) //
      .on('error', (event) => this.clipboardJsError.emit(event));
  }

  public componentDidRender() {
    Prism.highlightAll();
  }

  public componentDidUpdate() {
    Prism.highlightAll();
  }

  public render() {
    return (
      <Host class="syntaxhighlighter" ref={() => this.codeBlockRef}>
        {/* prevent anything from rendering that is between component selector */}
        <div class="syntaxhighlighter__hidden">
          <slot />
        </div>
        <div class={this.theme}>
          <div class="syntaxhighlighter__code-toolbar">
            <pre class={`language-${this.language}`}>
              <code id="syntaxhighlighter__ctc-target" class={`language-${this.language}`} innerHTML={this.encodeContent(this.content)} />
            </pre>
            <div class="syntaxhighlighter__toolbar">
              <div class="syntaxhighlighter__toolbar-item">
                <span class="syntaxhighlighter__language-label">{this.language.toUpperCase()}</span>
              </div>
              <div class="syntaxhighlighter__toolbar-item">
                <button
                  id="syntaxhighlighter__ctc-button"
                  class="syntaxhighlighter__copy-button"
                  data-clipboard-target="#syntaxhighlighter__ctc-target"
                >
                  {this.copyButtonLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }

  private encodeContent(str?: string): string | undefined {
    if (!str) {
      return undefined;
    }
    return Prism.util.encode(str) as string;
  }
}
