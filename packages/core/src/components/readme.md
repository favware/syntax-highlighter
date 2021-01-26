# syntax-highlighter



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description                                           | Type                | Default               |
| ----------------- | ------------------- | ----------------------------------------------------- | ------------------- | --------------------- |
| `content`         | `content`           | The content to show in the syntax highlighter element | `string`            | `undefined`           |
| `copyButtonLabel` | `copy-button-label` | The text inside the "copy to clipboard" button        | `string`            | `'Copy to clipboard'` |
| `language`        | `language`          | The language to highlight for                         | `string`            | `'html'`              |
| `theme`           | `theme`             | The theme to use, one of light or dark                | `"dark" \| "light"` | `'dark'`              |


## Events

| Event              | Description                                                             | Type                 |
| ------------------ | ----------------------------------------------------------------------- | -------------------- |
| `clipboardJsError` | The callback that will be fired when ClipboardJS fails to copy the text | `CustomEvent<Event>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
