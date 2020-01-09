# sfsymbols

This package exposes a map of symbol name to character code for SF Symbols.

Note that this is the raw names and character data, not the visual representation of the symbols. You will still need a copy of the SF Symbols font, which is subject to the usage terms of SF Symbols.


## Usage

```js
import symbols from '@rmccue/sfsymbols';

// Use characters as needed.
`Here is a ${ symbols['pencil'] }`.
```


## Development

To update the data, perform the following steps:

1. Open the SF Symbols app
2. Select all icons: <kbd>⌘A</kbd>
3. Copy data <kbd>⌘C</kbd> and save into `data/unicode.dat`
4. Copy names <kbd>⌘⇧C</kbd> and save into `data/names.dat`
5. Run `yarn build`
